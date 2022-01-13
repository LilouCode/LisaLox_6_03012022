//Mettre le code JavaScript lié à la page photographer.html
////get request
fetch ("data/photographers.json")
//// gerer le succes
.then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
//// erreur    
    .catch(err => console.log('Request Failed', err)); // Catch errors
    
//Récupération data photographes dans le json
async function getPhotographers() {
    const response= await fetch ("data/photographers.json");
    const data= await response.json();
    const photographers= data;
   // Attention problème affichage sur Github page.... ajouter un .then dans fetch ??
    return photographers;
  }
  
  //Affichage dans la console
  
  async function assignUrl(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
  
    photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
    });
  }
  
  //Récupération data puis affichage
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
  }
  
  // go
  init();