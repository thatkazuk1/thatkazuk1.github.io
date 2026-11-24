(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var preference = root.getAttribute('data-theme-pref');
  if (preference !== 'light' && preference !== 'dark') preference = 'system';

  function nextPreference() {
    return preference === 'system' ? 'light' : preference === 'light' ? 'dark' : 'system';
  }

  function applyTheme() {
    var theme = preference === 'system' ? (systemTheme.matches ? 'dark' : 'light') : preference;
    root.setAttribute('data-theme-pref', preference);
    root.setAttribute('data-theme', theme);
    if (toggle) {
      var label = 'Theme: ' + preference + '. Switch to ' + nextPreference() + '.';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  function updateSystemTheme() {
    if (preference === 'system') applyTheme();
  }

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener('change', updateSystemTheme);
  } else {
    systemTheme.addListener(updateSystemTheme);
  }

  applyTheme();

  if (toggle) {
    toggle.addEventListener('click', function () {
      preference = nextPreference();
      try { localStorage.setItem('portfolio-theme', preference); } catch (e) {}
      applyTheme();
    });
  }
})();
