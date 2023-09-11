function reel(){
  const reelsImage = document.querySelector('.js-reels-container');
  const reelsToogle= document.querySelector('.reels-div');
  reelsToogle.classList.toggle('reels-show')

  if(reelsImage.classList.contains('reels-show-active')){
    reelsImage.classList.remove('reels-show-active');
  }else{
    reelsImage.classList.add('reels-show-active');
  }
}