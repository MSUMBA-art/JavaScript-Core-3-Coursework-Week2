let addButton = document.getElementById('addButton');
let dogListEl = document.getElementById('dogList');
addButton.addEventListener('click', () => {
    let dog = document.createElement('img');
    dogListEl.appendChild(dog);

     fetch("https://dog.ceo/api/breeds/image/random")
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
         dog.src = data.message;
       })
       .catch((error) => alert(error));
});