const button = document.querySelector('#btn');
const par = document.querySelector('#par');

button.addEventListener('click', getAdvice);
// 1. ------------------------------------------------------------------------
// async function getDogs() {
//   // sending request to connect to the database
//   const res = await fetch('https://dog.ceo/api/breeds/image/random');

// // formating the response from above to json format 
//   const resReceived = await res.json();

//   // call a function that's responssible for showing the images:
//   showImages(resReceived)
// }

// function showImages(resReceived) {
// par.innerHTML = `<img src = ${resReceived.message} width = '300px'>`
// }

// 2. --------------------------------------------------------------------------
// async function getFoxes() {

//   const res = await fetch('https://randomfox.ca/floof/');
//   const resFormatted = await res.json();

//   showImages(resFormatted)
// }

// function showImages(resFormatted) {
//   par.innerHTML = `<img src = ${resFormatted.image} width = '300px'>`
// }

// 3. ---------------------------------------------------------------------------------
// async function getAdvice() {
//   const res = await fetch('https://api.adviceslip.com/advice');
//   const resFormatted = await res.json();

//   showAdvice(resFormatted);
// }

// function showAdvice(resFormatted) {
//   par.textContent = `${resFormatted.slip.advice}`
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// .then()

// function getAdvice() {
//   fetch('https://api.adviceslip.com/advice')
//   .then((res) => {
//     return res.json()
//   })
//   .then(resFormatted => par.textContent = `${resFormatted.slip.advice}`);
// }

// function getDogs() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then((res) => {
//     return res.json()
//   })
//   .then((resFormatted) => {
//     return par.innerHTML = `<img src = ${resFormatted.message} width = '300px'>`
//   })
// }

// function getFoxes() {
//   fetch('https://randomfox.ca/floof/')
//   .then(res => res.json())
//   .then(resFormatted => par.innerHTML = `<img src = ${resFormatted.image} width = '300px'>`)
// }

