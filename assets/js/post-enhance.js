(function () {
  var article = document.getElementById('post-article');
  if (!article) return;

  function run() {
    if (!(window.hljs && window.katex && window.renderMathInElement && window.mermaid)) {
      setTimeout(run, 160);
      return;
    }

    var mermaidBlocks = [];

    article.querySelectorAll('pre > code[class*="language-"]').forEach(function (code) {
      var langClass = Array.prototype.find.call(code.classList, function (c) {
        return c.indexOf('language-') === 0;
      });
      if (!langClass) return;
      var lang = langClass.replace('language-', '');
      var pre = code.parentElement;

      if (lang === 'mermaid') {
        var div = document.createElement('div');
        div.className = 'mermaid';
        div.setAttribute('data-mermaid-src', code.textContent);
        div.textContent = code.textContent;
        pre.replaceWith(div);
        mermaidBlocks.push(div);
      } else {
        window.hljs.highlightElement(code);
      }
    });

    try {
      window.renderMathInElement(article, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {}

    function renderMermaid(theme) {
      if (!mermaidBlocks.length) return;
      window.mermaid.initialize({
        startOnLoad: false,
        theme: theme === 'dark' ? 'dark' : 'neutral',
        securityLevel: 'loose',
        themeVariables: { fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }
      });
      mermaidBlocks.forEach(function (div) {
        div.textContent = div.getAttribute('data-mermaid-src');
        div.removeAttribute('data-processed');
      });
      window.mermaid.run({ nodes: mermaidBlocks }).catch(function () {});
    }

    var currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    renderMermaid(currentTheme);

    document.addEventListener('themechange', function (e) {
      renderMermaid(e.detail.theme);
    });
  }

  run();
})();
