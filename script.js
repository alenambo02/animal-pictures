const dogURL = 'https://random.dog/woof.json';
console.log(dogURL)
const catURL = 'https://zoo-animal-api.herokuapp.com/animals/rand'; 
console.log(catURL)
const foxURL = 'https://randomfox.ca/floof';

const dogElem = document.getElementById("pup");
const catElem = document.getElementById("cat");
const foxElem = document.getElementById("fox");

pupbtn.addEventListener('click', getDog)
catbtn.addEventListener('click', getCat)
foxbtn.addEventListener('click', getFox)


function getDog() {
    fetch(dogURL)
    .then(response => response.json())
   
    .then(data => {
        dogElem.innerHTML = `<img src="${data.url}"/>`
    })
}



function getCat() {
    fetch(catURL)
    .then(response => response.json())
   
    .then(data => {
        catElem.innerHTML = `<img src="${data.image_link}"/>`
    })
}

function getFox() {
    fetch(foxURL)
    .then(response => response.json())

    .then(data => {
        foxElem.innerHTML = `<img src="${data.image}"/>`
    })

}




















// var duckURL =
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // // body:JSON.stringify(data),
// var dogRequest = document.getElementById('doggies');  

// function requestData(dogURL) {
//     fetch(dogURL)
//     .then(response => {
//         console.log(response);
//         return response.blob();
//     })
//     .then(blob => {
//     console.log('SUCCESSFUL!', blob);
//     document.getElementById('doggies').src = URL.createObjectURL(blob)
// })
// }

// requestData(dogURL)
//why wont it accept data instead of were blob is

