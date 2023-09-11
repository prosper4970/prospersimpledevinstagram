const moreToggle = document.querySelector('.more-toggle-container');
const moreImage = document.querySelector('.js-more-container');
function more(){
  moreToggle.classList.toggle('more-toggle-container-show')
  if(moreImage.classList.contains('more-container-active')){
    moreImage.classList.remove('more-container-active');
  }else{
    moreImage.classList.add('more-container-active');
  }
}