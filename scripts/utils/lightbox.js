//Notes : ouverture de la lightbox via HTML on click dans mediaFactory 
//pour thumbImg et thumbVideo


//Elements du DOM
const lightbox = document.getElementById('lightbox');//lightbox
const mediasGrid= document.getElementsByClassName("grid_thumb_media");//images et videos gallerie
const mainWrapper = document.getElementById('main');//main

console.log(mediasGrid);//test
// const test = mediasGrid.item[1];
// console.log(test)

/////////Display lightbox/////////
function displayLightbox () {
    lightbox.style.display = 'flex';
    mainWrapper.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden','false');
}

function closeLightbox(){
    lightbox.style.display = 'none';
    mainWrapper.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden','true');
}

function init(){// avec lightbox.js :
    const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'))
    const images = links.map(link => link.getAttribute('href'))
    links.forEach(link => link.addEventListener('click',e =>{ 
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'),images)
        }))
}

////////////////////////////////////


/////////Init/////////

/**
 * @property {HTMLElement} element
 * @property {string[]} images chemins des images de la lightbox
 * @property {string} url Image actuellement chargée
 */
class Lightbox{
   
    /** 
     * @param {string} url URL de l'image
     * @param {string[]} images chemins des images de la lightbox
    */
    constructor (url, images){
        this.element = this.builDOM(url)
        this.loadImage(url)
        this.images = images
        document.body.appendChild(this.element)
    }
    
    /** 
     * @param {string} url URL de l'image
    */
    loadImage (url){
        this.url = null
        const container = this.element.querySelector('.lightbox__container');
        const loader = document.createElement('div');
        loader.classList.add('lightbox__loader')
        container.innerHTML = '';
        container.appendChild(loader);
        if(url.includes(".mp4")){
            console.log("c'est un fichier mp4")
            const image = document.createElement('video');
            image.setAttribute("type","video/mp4");
            image.classList.add('lightbox__video');
            // image.onload = () => {
                container.removeChild(loader)
                container.appendChild(image)
                this.url = url
            // }
            image.src = url
            image.width= "900"
            image.autoplay = true;
        }else{
            const image = document.createElement('img');
            image.classList.add('lightbox__image');
            image.onload = () => {
                container.removeChild(loader)
                container.appendChild(image)
                this.url = url
            }
            image.src = url
        }
        
    }
    /** 
     * @param {string} url URL de l'image
     * @return {HTMLElement}
    */
    builDOM (url){
        const dom = document.getElementById('lightbox')
        dom.innerHTML = ` <img alt="bouton fermer" class="lightbox__btn__close" src="assets/icons/close--red.svg" onclick="closeLightbox()" tabindex="0" aria-roledescription="fermer" role="button"/>
        <button alt="bouton suivant" class="lightbox__btn__next" tabindex="0" aria-roledescription="media suivant"></button>
        <button alt="bouton précédent" class="lightbox__btn__prev" onclick="" tabindex="0" aria-roledescription="media précédent"></button>
        <div class="lightbox__container"></div>
        </div>
        `
        return dom
    }
}

















// function createMediaLightbox (){
//     const mediaLightbox= new mediaFactory;
//     lightbox.appendChild(mediaLightbox);
//     return lightbox
// }
//////////////////////////////////////////////////////
// mediasGrid.forEach(mediasGrid => {
//     mediasGrid.addEventListener('click', e =>{
//         displayLightbox()
//     })
// })
// /////////////////////////////////
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
