//Récupération data photographes dans le json
async function getPhotographers() {
  const response= await fetch ("data/photographers.json");
  const data= await response.json();
  const photographers= data;
 // Attention problème affichage sur Github page.... ajouter un .then dans fetch ??
  return photographers;
}

//Affichage data photographes
async function displayData(photographers) {
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