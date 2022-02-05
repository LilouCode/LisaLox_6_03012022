//Elements du DOM
const lightbox = document.getElementById('lightbox');//lightbox
const mediasGrid= document.getElementsByClassName("grid_thumb_media");//images et videos gallerie
const mainWrapper = document.getElementById('main');//main

console.log(mediasGrid);

const test = mediasGrid.item[1];
console.log(test)
//Display lightbox
function displayLightbox () {
    lightbox.style.display = 'flex';
    mainWrapper.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden','false');
}

mediasGrid.forEach(mediasGrid => {
    mediasGrid.addEventListener('click', e =>{
        displayLightbox()
    })
})

// displayLightbox()

// function createMediaBox (){
//     url= mediaGrid.src.nodeValue;
//     const mediaBox = new mediaFactory;
//     lightbox.appendChild(mediaBox);
// }
// mediaGrid.forEach(mediaGrid =>{
//     mediaGrid.addEventListener('click', function (){
//         displayLightbox ();
//     })
// })
