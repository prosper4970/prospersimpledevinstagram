const displayNotification = document.querySelector('.notification-toggle-div');

const notificationImage = document.querySelector('.js-notification-container');
function notification(){
  displayNotification.classList.toggle('notification-toggle-show');
  if(notificationImage.classList.contains('notification-div-active')){
    notificationImage.classList.remove('notification-div-active')
  }else{
    notificationImage.classList.add('notification-div-active')
  }
}

function followBack(){
  const followBack = document.querySelector('.notification-follow-button')
  if (followBack.innerText === "Follow"){
    followBack.classList.add('notification-follow-back');
    followBack.innerText ="following";
  }else{
    followBack.classList.remove('notification-follow-back');
    followBack.innerText ="Follow";
  }

}

function followBackTwo(){
  const followBackTwo = document.querySelector('.js-notification-follow-button-two')
  if (followBackTwo.innerText === "Follow"){
    followBackTwo.classList.add('notification-follow-back');
    followBackTwo.innerText ="following";
  }else{
    followBackTwo.classList.remove('notification-follow-back');
    followBackTwo.innerText ="Follow";
  }
}

function followBackThree(){
  const followBackTwo = document.querySelector('.js-notification-follow-button-three')
  if (followBackTwo.innerText === "Follow"){
    followBackTwo.classList.add('notification-follow-back');
    followBackTwo.innerText ="following";
  }else{
    followBackTwo.classList.remove('notification-follow-back');
    followBackTwo.innerText ="Follow";
  }
}

function followBackFour(){
  const followBackTwo = document.querySelector('.js-notification-follow-button-four')
  if (followBackTwo.innerText === "Follow"){
    followBackTwo.classList.add('notification-follow-back');
    followBackTwo.innerText ="following";
  }else{
    followBackTwo.classList.remove('notification-follow-back');
    followBackTwo.innerText ="Follow";
  }
}

function followBackFive(){
  const followBackTwo = document.querySelector('.js-notification-follow-button-five')
  if (followBackTwo.innerText === "Follow"){
    followBackTwo.classList.add('notification-follow-back');
    followBackTwo.innerText ="following";
  }else{
    followBackTwo.classList.remove('notification-follow-back');
    followBackTwo.innerText ="Follow";
  }
}

function followBackSix(){
  const followBackTwo = document.querySelector('.js-notification-follow-button-six')
  if (followBackTwo.innerText === "Follow"){
    followBackTwo.classList.add('notification-follow-back');
    followBackTwo.innerText ="following";
  }else{
    followBackTwo.classList.remove('notification-follow-back');
    followBackTwo.innerText ="Follow";
  }
}







