//Mettre le code JavaScript lié à la page photographer.html


(async function () {
    //Recupération photographe ID
    function getPhotographerId(){
        const photographerUrl = new URL(document.location).searchParams.get('id');
        console.log(photographerUrl);
        return photographerUrl;
    }
    const photographerId = getPhotographerId()
    const photographerData = await getPhotographerData(photographerId);

})()

//Récupération data photographes dans le json
async function getPhotographerData(photographerId){
    
    return fetch("data/photographers.json")
    
    .then(function(response){
      return response.json()
    })
    
    .then(function(objet){
        objet.photographers.forEach((photographers) => {
            // console.log(media.photographerId)
            if (photographerId == photographers.id){
                const data = {
                    name: photographers.name,
                    city: photographers.city,
                    tagline: photographers.tagline
                }
                console.log(data)
            }
        })
    })
    
    .catch(function(error){
      alert.error
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////

// (async function () {
//     //Recupération photographe ID
//     function getPhotographerId(){
//         const photographerUrl = new URL(document.location).searchParams.get('id');
//         console.log(photographerUrl);
//         return photographerUrl;
//     }
//     const photographerId = getPhotographerId()
//     const photographerData = await getPhotographerData(photographerId);
//     function displayPhotographer(photographerData){
//         const photographerHeader = document.querySelector(".photograph-header");
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographerHeader.appendChild(userCardDOM);
//     }

// })()

// //Récupération data photographes dans le json
// async function getPhotographerData(photographerId){
//     return fetch("data/photographers.json")
//     .then(function(response){
//       return response.json()
//     })
//     .then(function(photographer){
//     photographer.media.forEach((media) => {
//         // console.log(media.photographerId)
//         if (photographerId == media.photographerId){
//             console.log(media.photographerId)
//             console.log(media.title)
//         }
//     })
//       console.log(photographer)
//       return photographer
//     })
//     .catch(function(error){
//       alert.error
//     })
// }