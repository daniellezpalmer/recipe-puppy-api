let submit =document.querySelector('#button');

submit.addEventListener('click', function() {
  let input = document.querySelector('#input');
  console.log(input);
let searchInput = input.value;

fetch(
  "http://recipepuppyproxy.herokuapp.com/api/?q=" + searchInput)
  .then(function(response) {
    if (response.status !== 200) {
      console.log("Broken: " + response.status);
      return;
    }
    response.json().then(function(data) {
      let html = "";
      let recipes = data.results;
      console.log(recipes);
      let lowerHalf = document.querySelector('#lowerHalf')
      for (let i = 0; i < recipes.length; i++) {
        let href = recipes[i].href;
        let title = recipes[i].title;
        let thumbnail = recipes[i].thumbnail;
        if (thumbnail === ""){
          thumbnail = 'http://via.placeholder.com/350x150'
        }
      html += `<div class="container">
              <a href="${href}">Recipe</a>
              <p>${title}</p>
              <img src="${thumbnail}">
              </div>`
      lowerHalf.innerHTML = html;
      }
    })
  })
})
