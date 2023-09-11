function messages() {
  const messageImage = document.querySelector('.js-message-grid' );
  const messageToggle = document.querySelector('.message-toggle');
  messageToggle.classList.toggle('show');
  const messageGrid = document.querySelector('.right-message-grid');
  messageGrid.classList.toggle('right-show');
  const fixedMessageTop =document.querySelector('.fixed-message-top');
  fixedMessageTop.classList.toggle('show');

  if (messageImage.classList.contains('message-toggle-active')){
    messageImage.classList.remove('message-toggle-active')
  }else{
    messageImage.classList.add('message-toggle-active')
  }
}
