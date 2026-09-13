(function () {
  const LIGHT = '/favicon-light.png';
  const DARK = '/favicon-dark.png';

  function apply() {
    const href = document.documentElement.classList.contains('dark') ? DARK : LIGHT;
    document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach(function (link) {
      if (link.getAttribute('href') !== href) {
        link.type = 'image/png';
        link.removeAttribute('sizes');
        link.setAttribute('href', href);
      }
    });
  }

  apply();
  new MutationObserver(apply).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  new MutationObserver(apply).observe(document.head, { childList: true, subtree: true });
})();
