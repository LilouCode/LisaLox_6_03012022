//// fix okay, console.log de l'envoi ok, reste a faire pareil pour les autres champs :)


//DOM elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message= document.getElementById("message");
let firstNameError = document.getElementById("first-name_error");
const form = document.getElementById("form");
const modal = document.getElementById('contact_modal');


//launch modal
//lauch modal event
function displayModal() {
  const modal = document.getElementById('contact_modal');
	const mainWrapper = document.getElementById('main');
  modal.style.display = 'flex';
  mainWrapper.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden','false');
}

//close modal
//close modal event
function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}
window.addEventListener("keydown", function (event) { /// fermeture avec touche echap
  if(event.key === "Escape" ){
    closeModal();
  }
})

//Les ecoutes
firstName.addEventListener("change", function () {
  validFirstName(this);  
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ///////////// si toutes les fonctions de validation sont vraies
  if (
    validFirstName(firstName) 
  ) {
  ///////////// Affichage dans la console
  const envoi = {
    nom : firstName.value,
    prenom: lastName.value,
    email: email.value,
    message: message.value
  }
    
    
  console.log(envoi);
  }
  /////////////// pour la suite: envoi du formulaire
  ////////// form.submit();
});


///validation par validation (prénom, nom...)
const validFirstName = function (firstName) {
  let msg;
  let valid = false;
  // creation de la reg exp pour la validation du prénom
  let firstNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g");
  //******* Doit contenir au minimum 2 caractères
  console.log(firstName.value);
  if (firstName.value.length < 2) {
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  }
  // ******* Doit contenir uniquement des caractères valides
  else if (!firstNameRegExp.test(firstName.value)) {
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  }
  //******* Prénom valide
  else {
    msg = "Ce champs est valide";
    valid = true;
  }
  //******* Affichage
  //recuperation de la balise span pour le message d'erreur
  if (valid) {
    firstNameError.innerHTML = "";
    return true;
  } else {
    firstNameError.innerHTML = msg;
    return false;
  }
};
