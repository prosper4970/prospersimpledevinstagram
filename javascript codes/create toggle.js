const createToggle = document.querySelector('.create-post');
const createImage = document.querySelector('.js-create-container');
function create(){
  createToggle.classList.toggle('create-post-show');
}

function cancelCreate(){
  createToggle.classList.remove('create-post-show');
}