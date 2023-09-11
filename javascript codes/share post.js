const sharePostToAUser = document.querySelector('.share-main-container')
function sharePost(){
  sharePostToAUser.classList.add('share-main-container-show')
}

function cancelShare(){
  sharePostToAUser.classList.remove('share-main-container-show')
}