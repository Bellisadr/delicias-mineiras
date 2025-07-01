  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('ativo');
    menu.classList.toggle('ativo');
  });

  const links = document.querySelectorAll('.menu a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
    hamburger.classList.remove('ativo');
  });
});

