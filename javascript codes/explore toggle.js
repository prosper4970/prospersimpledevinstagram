function explore(){
  const exploreImage = document.querySelector('.js-explore-container');
  const exploreToggle = document.querySelector('.explore-div');
  exploreToggle.classList.toggle('show-explore');

  if (exploreImage.classList.contains('explore-div-active')) {
    exploreImage.classList.remove('explore-div-active');
  } else {
    exploreImage.classList.add('explore-div-active');
  }
}
