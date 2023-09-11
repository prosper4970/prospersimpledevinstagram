const displayCommentSection = document.querySelector('.comment-on-picture-div')
function commentOnPost(){
  displayCommentSection.classList.add('comment-on-picture-div-show')
}
function removeCommentSegment(){
  displayCommentSection.classList.remove('comment-on-picture-div-show')
}


const commentList = [];

rendercommentList();
function rendercommentList(){

    let commentListAccumulate = '';
    for ( let i = 0; i < commentList.length; i++){
      const commentComment = commentList[i];
      const commentListDisplay = `<p>
      <div class="profile-and-name-flex">
        <img src="/images for website/bose man-01.jpg" class="js-comment-on-post-picture">

        <p class="javascript-commenter-name">Prosper_js</p>

        <button onclick="
          commentList.splice(${i} , 1);
          rendercommentList();
        
        " class="delete-sent-comment">Delete comment</button>
        </div>

        <p class="javascript-actual-comment">${`Comment: `+commentComment}</p>
      </p>`

      commentListAccumulate += commentListDisplay
    }

    document.querySelector('.display-comment-on-page')
    .innerHTML = commentListAccumulate;

    console.log(commentListAccumulate);

}

function postComment(){

  const typeComment = document.querySelector('.js-type-comment-box')

  const commentTyped = typeComment.value;
  commentList.push(commentTyped);
  typeComment.value = '';
  console.log(commentList)
  rendercommentList();
}