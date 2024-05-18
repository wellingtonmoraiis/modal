const modal = document.querySelector('.container');

function onOpen() {
  modal.classList.add('ativo');
}

function onClose() {
  modal.classList.remove('ativo');
}
