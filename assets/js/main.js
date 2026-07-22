document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.post__content pre');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';

    block.style.position = 'relative';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code').innerText;

      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied';

        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }).catch(error => {
        console.error('Failed to copy code', error)
      });
    });
  });
});
