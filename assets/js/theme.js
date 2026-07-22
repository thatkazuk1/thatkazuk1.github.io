(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function labelFor(theme) {
    return theme === 'dark' ? 'Light' : 'Dark';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = labelFor(theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch (e) {}
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: theme } }));
  }

  toggle.textContent = labelFor(root.getAttribute('data-theme') || 'dark');

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
