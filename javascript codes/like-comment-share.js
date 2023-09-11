const likeButton = document.querySelector('.js-like-button');
const countDisplay = document.querySelector('.js-span-count');
const name = document.querySelector('.js-name');
const changeLikeColor = document.querySelector('.post-like-color-div');
let countLike = 0;

function like() {
  if (countLike === 1) {
    countLike = 0;
    countDisplay.innerHTML = '';
    // Hey it works, the codeis not clean lol
  } else {
    countLike++;
    countDisplay.innerHTML = `Liked by <p class="js-name">Prosper_js</p>`;

    // Add the 'post-like-color-div-show' class
    changeLikeColor.classList.add('post-like-color-div-show')
  }
}

function changeLike(){
  countLike = 0;
  countDisplay.innerHTML = '';

  // Remove the 'post-like-color-div-show' class
  changeLikeColor.classList.remove('post-like-color-div-show')
}