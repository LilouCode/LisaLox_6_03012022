//// fix okay, console.log de l'envoi ok, reste a faire pareil pour les autres champs :)


//DOM elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message= document.getElementById("message");
let firstNameError = document.getElementById("first-name_error");
let lastNameError = document.getElementById("last-name_error")
let emailError = document.getElementById("email_error")
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

lastName.addEventListener("change", function () {
  validLastName(this);  
});

email.addEventListener("change", function () {
  validEmail(this);  
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

///validation par validation (prénom, nom...)
const validLastName = function (lastName) {
  let msg;
  let valid = false;
  // creation de la reg exp pour la validation du prénom
  let lastNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g");
  //******* Doit contenir au minimum 2 caractères
  console.log(lastName.value);
  if (lastName.value.length < 2) {
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  }
  // ******* Doit contenir uniquement des caractères valides
  else if (!lastNameRegExp.test(lastName.value)) {
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
    lastNameError.innerHTML = "";
    return true;
  } else {
    lastNameError.innerHTML = msg;
    return false;
  }
};
//// validation email
const validEmail = function (email) {
  //creation de la reg exp pour la validation de l'email
  let emailRegExp = new RegExp("^([a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,3})$", "g");
  //test de l'expression reguliere
  let emailTest = emailRegExp.test(email.value);
  if (email.value.length < 1){
    emailError.innerHTML = "Veuillez renseigner ce champs";
    emailError.classList.add("text-error");
    email.classList.add("text-control--error");
    return false;
  }else if (!emailTest) {
    emailError.innerHTML = "Veuillez renseigner une adresse e-mail valide";
    emailError.classList.add("text-error");
    email.classList.add("text-control--error");
    return false;
  } else {
    emailError.innerHTML = "";
    emailError.classList.remove("text-error");
    email.classList.remove("text-control--error");
    return true;
  }
};