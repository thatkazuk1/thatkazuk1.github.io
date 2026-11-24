(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  // The label names the theme that a click selects.
  function updateToggle(theme) {
    var next = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    updateToggle(theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch (e) {}
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  updateToggle(root.getAttribute('data-theme') || 'dark');

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
