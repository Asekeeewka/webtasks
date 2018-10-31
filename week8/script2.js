var loading = document.querySelector("#loading");
var loadButton = document.querySelector("button");
let cards = document.querySelector("#cards");

function onSuccess(response){
  response.json().then( 
    function(info) {
      loading.style.display = "none";
      info.forEach(function(card) {
        let div = document.createElement("div");
        let title = document.createElement("span");
        let price = document.createElement("span");
        div.classList.add("card");

        title.classList.add("title");
        title.innerHTML = card.maker + " " + card.model;
        
        price.innerHTML = card.price;
        price.classList.add("price");

        div.appendChild(title);
        div.appendChild(price);
        cards.appendChild(div);
        loadButton.innerHTML="Items are loaded";
      })
    });
  }

function onError(error){
  loadButton.innerHTML="Some error occured";
  loading.style.display="none";
  div.style.display="none";
  console.log(error);
}

function load(){
  loading.style.display = "block";
  loadButton.innerHTML = "loading...";
  fetch("http://demo4296963.mockable.io/listCars").then(onSuccess, onError);
}

document.querySelector("button").addEventListener("click", load);

