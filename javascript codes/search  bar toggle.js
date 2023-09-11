function toggleSearchBar(){
  const jsToggle = document.querySelector('.js-toggle');
  jsToggle.classList.toggle('active');
}

const menuToggle = document.querySelector(".search-container");
menuToggle .addEventListener("click", function(){
  if(menuToggle.classList.contains('search-active')){
    menuToggle.classList.remove('search-active');
  } else{
    menuToggle.classList.add('search-active');
  }
});


const searchList = [];

function rendersearchList(){

    let searchListAccumulate = '';
    for (let i = 0; i < searchList.length; i++){
      searchSearch = searchList[i];
      searchListDisplay = `<p>
      
      <div class="js-searched-user-picture-container">
          <img src="/images for website/juice world-01.png" class="js-searched-user-picture">

          <div class="js-search-name">
            ${searchSearch}

          </div>

          <button class="cancel-search-user" onclick="
            searchList.splice(${i} , 1);
            rendersearchList();
          ">X</button>
      </div>

    

      </p>`
      searchListAccumulate += searchListDisplay
    }

    document.querySelector('.user-search-display')
    .innerHTML = searchListAccumulate;

}

function searchForUser(event){
  const searchTypeContainer = document.querySelector('.js-search-bar');
  const typedSearch = searchTypeContainer.value;
  if (event.key ==="Enter"){
    searchList.push(typedSearch)
    console.log(searchList);
    searchTypeContainer.value = '';
  }

  rendersearchList();
 
}



