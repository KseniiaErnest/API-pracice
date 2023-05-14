const button = document.querySelector('#btn');
const par = document.querySelector('#par');

button.addEventListener('click', getDogs);

async function getDogs() {
  // sending request to connect to the database
  const res = await fetch('https://dog.ceo/api/breeds/image/random');

// formating the response from above to json format 
  const resReceived = await res.json();

  // call a function that's responssible for showing the images:
  showImages(resReceived)
}

function showImages(resReceived) {
par.innerHTML = `<img src = ${resReceived.message} width = '300px'>`
}