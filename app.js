let button    = document.querySelector('#button');
let name      = document.querySelector('#name');
let height    = document.querySelector('#height');
let mass      = document.querySelector('#mass');
let birthYear = document.querySelector('#birth-year');
let image     = document.querySelector('#image');


// AJAX request
function getInfo() {
  let randomNumber = Math.floor((Math.random() * 88) + 1);
  
  axios.get(`https://swapi.dev/api/people/${randomNumber}`)
    .then(res => {
      updateInfo(res.data);
      console.log('https://starwars-visualguide.com/assets/img/characters/'+ randomNumber +'.jpg');
      image.src = 'https://starwars-visualguide.com/assets/img/characters/'+ randomNumber +'.jpg';
    })
    .catch(err => {
      updateInfoWithError()
    })
}

// Display info in screen
function updateInfo(data) {
  name.innerText = data.name;
  height.innerText = `Height: ${data.height}`;
  mass.innerText = `Mass: ${data.mass}`;
  birthYear.innerText = `Birth-Year: ${data.birth_year}`;
  
}

function updateInfoWithError() {
  name.innerText = 'Oh No! That person isn\'t available';
  height.innerText = '';
  mass.innerText = '';
  birthYear.innerText = '';
}

button.addEventListener('click', getInfo);