/**
 * 吳柏瀧 Po-Lung Wu | Personal Academic & Professional Digital Portfolio
 * Real-Time Dynamic Clock & Interactive Section Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // -------------------------------------------------------------
  // Theme & Format State Management
  // -------------------------------------------------------------
  let is24HourFormat = localStorage.getItem('portal_time_format') !== '12h'; // default 24h
  const themes = ['theme-aurora', 'theme-midnight', 'theme-cyber'];
  let currentThemeIndex = parseInt(localStorage.getItem('portal_theme_idx') || '0', 10);
  if (isNaN(currentThemeIndex) || currentThemeIndex < 0 || currentThemeIndex >= themes.length) {
    currentThemeIndex = 0;
  }
  document.body.className = themes[currentThemeIndex];

  // DOM Elements - Clock & Live Metrics
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const periodEl = document.getElementById('period');
  const fullDateEl = document.getElementById('full-date');
  const timezoneEl = document.getElementById('timezone');
  const greetingEl = document.getElementById('time-greeting');
  const dayPhaseEl = document.getElementById('day-phase');
  const dayOfYearEl = document.getElementById('day-of-year');
  const yearProgressEl = document.getElementById('year-progress');
  const footerUtcEl = document.getElementById('footer-utc');
  const secondsCircle = document.getElementById('seconds-circle');
  
  // Format & Theme Toggles
  const formatToggleBtn = document.getElementById('format-toggle-btn');
  const formatLabel = document.getElementById('format-label');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  function updateFormatUI() {
    formatLabel.textContent = is24HourFormat ? '24H' : '12H';
    if (is24HourFormat) {
      periodEl.classList.add('hidden');
    } else {
      periodEl.classList.remove('hidden');
    }
  }
  updateFormatUI();

  // -------------------------------------------------------------
  // Real-Time Clock & Date Engine
  // -------------------------------------------------------------
  function updateClock() {
    const now = new Date();

    let rawHours = now.getHours();
    const rawMinutes = now.getMinutes();
    const rawSeconds = now.getSeconds();

    let displayHours = rawHours;
    let period = 'AM';

    if (!is24HourFormat) {
      period = rawHours >= 12 ? 'PM' : 'AM';
      displayHours = rawHours % 12;
      if (displayHours === 0) displayHours = 12;
    }

    hoursEl.textContent = String(displayHours).padStart(2, '0');
    minutesEl.textContent = String(rawMinutes).padStart(2, '0');
    secondsEl.textContent = String(rawSeconds).padStart(2, '0');
    periodEl.textContent = period;

    // Circular seconds progress (0 - 100)
    if (secondsCircle) {
      const secondsPercent = Math.round((rawSeconds / 60) * 100);
      secondsCircle.setAttribute('stroke-dasharray', `${secondsPercent}, 100`);
    }

    // Dynamic Greeting & Day Phase
    let greeting = '歡迎回來';
    let phase = '白晝 Day';

    if (rawHours >= 5 && rawHours < 12) {
      greeting = '早安 · Good Morning';
      phase = '早晨 Morning';
    } else if (rawHours >= 12 && rawHours < 17) {
      greeting = '午安 · Good Afternoon';
      phase = '午後 Afternoon';
    } else if (rawHours >= 17 && rawHours < 22) {
      greeting = '傍晚好 · Good Evening';
      phase = '傍晚 Evening';
    } else {
      greeting = '夜深了 · Good Night';
      phase = '深夜 Night';
    }

    greetingEl.textContent = greeting;
    dayPhaseEl.textContent = phase;

    // Localized Date String
    try {
      fullDateEl.textContent = now.toLocaleDateString('zh-TW', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        weekday: 'long' 
      });
    } catch {
      const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      fullDateEl.textContent = now.toLocaleDateString(undefined, dateOptions);
    }

    // Timezone
    try {
      const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
      const offsetMinutes = -now.getTimezoneOffset();
      const offsetSign = offsetMinutes >= 0 ? '+' : '-';
      const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
      timezoneEl.textContent = `GMT${offsetSign}${offsetHours} • ${timeZoneName.split('/').pop().replace('_', ' ')}`;
    } catch {
      timezoneEl.textContent = 'GMT+8 · 台北';
    }

    // Day of Year & Year Progress
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const totalDaysInYear = isLeapYear(now.getFullYear()) ? 366 : 365;
    
    dayOfYearEl.textContent = `第 ${dayOfYear} 天 / 共 ${totalDaysInYear} 天`;

    const yearProgress = ((dayOfYear / totalDaysInYear) * 100).toFixed(1);
    yearProgressEl.textContent = `${yearProgress}%`;

    // Footer UTC
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    footerUtcEl.textContent = `UTC: ${utcHours}:${utcMinutes}:${utcSeconds}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // -------------------------------------------------------------
  // Format & Theme Switchers
  // -------------------------------------------------------------
  formatToggleBtn.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem('portal_time_format', is24HourFormat ? '24h' : '12h');
    updateFormatUI();
    updateClock();
  });

  themeToggleBtn.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.className = themes[currentThemeIndex];
    localStorage.setItem('portal_theme_idx', currentThemeIndex);
  });

  // -------------------------------------------------------------
  // Interactive Navigation Tabs
  // -------------------------------------------------------------
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Switch active tab content
      tabContents.forEach((content) => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });

      // Refresh icons if dynamic
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });

  // Re-run Lucide icons
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 100);
});
