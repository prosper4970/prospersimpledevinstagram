// This is for when the user clicks follow , it would display following //
const followButton= document.querySelector('.js-follow');
function follow(){
  if (followButton.innerText === 'follow'){
    followButton.classList.add('following')
    followButton.innerText = 'following';
  }else {
    followButton.innerText = 'follow';
    followButton.classList.remove('following')
  }
}// This is for when the user clicks follow , it would display following //






