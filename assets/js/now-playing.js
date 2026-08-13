(function () {
  const POLL_MS = 30000;

  const render = (card, data) => {
    if (!data || !data.title) {
      card.hidden = true;
      return;
    }

    const art = card.querySelector('[data-now-playing-art]');
    const label = card.querySelector('[data-now-playing-label]');
    const title = card.querySelector('[data-now-playing-title]');
    const source = card.querySelector('[data-now-playing-source]');
    const eq = card.querySelector('[data-now-playing-eq]');
    const link = card.querySelector('[data-now-playing-link]');

    label.textContent = data.isPlaying ? "I'm currently listening to" : 'Last played';
    title.textContent = data.title + (data.artist ? ' — ' + data.artist : '');
    source.textContent = data.sourceLabel || '';
    eq.style.display = data.isPlaying ? '' : 'none';

    if (data.artUrl) {
      art.style.backgroundImage = 'url(' + data.artUrl + ')';
      art.style.backgroundSize = 'cover';
      art.style.backgroundPosition = 'center';
      art.textContent = '';
    }

    if (data.trackUrl) {
      link.href = data.trackUrl;
      link.hidden = false;
    } else {
      link.hidden = true;
    }

    card.hidden = false;
  };

  const poll = (card, endpoint) => {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('bad response');
        return res.json();
      })
      .then((data) => {
        render(card, data);
      })
      .catch(() => {
        // Leave the card as-is: hidden if it never loaded, or showing
        // last-known-good data if a previous poll already succeeded.
      });
  };

  document.querySelectorAll('.now-playing[data-endpoint]').forEach((card) => {
    const endpoint = card.getAttribute('data-endpoint');
    if (!endpoint) return;

    poll(card, endpoint);
    setInterval(() => {
      poll(card, endpoint);
    }, POLL_MS);
  });
})();
