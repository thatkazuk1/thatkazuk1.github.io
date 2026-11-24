(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function labelFor(theme) {
    return theme === 'dark' ? 'Light' : 'Dark';
  }

  // The visible text names the theme that a click selects.
  // The aria-label contains the visible text, so voice control can find it.
  function updateToggle(theme) {
    var next = labelFor(theme);
    toggle.textContent = next;
    toggle.setAttribute('aria-label', 'Switch to ' + next.toLowerCase() + ' theme');
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
