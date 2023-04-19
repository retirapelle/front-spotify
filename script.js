const icons = document.querySelectorAll('.material-icons');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icons.forEach(i => i.classList.remove('selected')); // remover a classe 'selected' de todos os ícones
    icon.classList.add('selected'); // adicionar a classe 'selected' ao ícone clicado
  });
});