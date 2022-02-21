///////////////////////////DOM elements///////////////////////////
const bodyW= document.getElementById('body');
const mainWrap = document.getElementById('main');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message= document.getElementById("message");
let firstNameError = document.getElementById("first-name_error");
let lastNameError = document.getElementById("last-name_error")
let emailError = document.getElementById('email_error')
let messageError = document.getElementById('message_error')
const form = document.getElementById('form');
let messageValidation = document.getElementById('message_validation');
const modal = document.getElementById('contact_modal');
const contactButton = document.getElementById('contactButton');
///////////////////////////launch and close modal///////////////////////////
//lauch modal event

function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'flex';
  // bodyW.classList.add('no-scroll');
  mainWrap.setAttribute('aria-hidden', 'true');
  mainWrap.tabIndex= "-1";
  modal.setAttribute('aria-hidden','false');
}
// document.getElementById('contactButton').addEventListener("click", displayModal());
//close modal event
function closeModal() {
  // bodyW.classList.remove('no-scroll');
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

// fermeture avec touche echap
window.addEventListener("keydown", function (event) {
  if(event.key === "Escape" ){
    closeModal();
  }
})

///////////////////////////Les ecoutes des champs///////////////////////////
firstName.addEventListener("change", function () {
  validFirstName(this);  
});

lastName.addEventListener("change", function () {
  validLastName(this);  
});

email.addEventListener("change", function () {
  validEmail(this);  
});

message.addEventListener("change", function(){
  validMessage(this);
})

///////////////////////////Ecoute et validation du formulaire///////////////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();//suppresseion du comportement par defaut
  
  // Conditions:
  if (validFirstName(firstName) && validLastName(lastName) 
    && validEmail(email) 
  ) {
  // Affichage dans la console:
  const envoi = {//regroupe les saisies en objet
    prenom : firstName.value,
    nom: lastName.value,
    email: email.value,
    message: message.value
  } 
  console.table(envoi); //affiche le résultat dans la console sous forme de tableau
  contactName.style.fontSize= "45px"
  messageValidation.style.fontSize= "80px";
  messageValidation.innerHTML = `Merci ${firstName.value} <br> <p>Votre message a bien été envoyé !</p>`;
  messageValidation.style.margin= "20% 8%";
  messageValidation.style.color= "#901C1C";
  messageValidation.style.textAlign= "center";
  messageValidation.setAttribute("aria-hidden","false");
  messageValidation.tabIndex= 0; 
  form.parentNode.removeChild(form);
  } else{
    messageValidation.setAttribute("aria-hidden","true");
    messageValidation.tabIndex= -1; 
  }
  // (pour la suite: envoi du formulaire : form.submit(); )
});

///////////////////////////Fonctions de validation champs///////////////////////////

//Validation par validation (prénom, nom...)
const validFirstName = function (firstName) {
  let msg;
  let valid = false;
  
  let firstNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g");// creation de la reg exp pour la validation du prénom
  
  // Conditions:
  if (firstName.value.length < 2) {//Doit contenir au minimum 2 caractères
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  } else if (!firstNameRegExp.test(firstName.value)) { //Doit contenir uniquement des caractères valides
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  } else {//Prénom valide
    msg = "Ce champs est valide";
    valid = true;
  }
  //Affichage
  if (valid) {
    firstNameError.innerHTML = "";
    firstNameError.setAttribute("aria-hidden", "true");
    firstNameError.tabIndex = "-1";
    firstName.setAttribute("aria-invalid", "false");//accessibilite champ valide
    return true;
  } else {
    firstNameError.innerHTML = msg;
    firstNameError.setAttribute("aria-hidden", "false");
    firstNameError.tabIndex = "0";
    firstName.setAttribute("aria-invalid", "true");//accessibilite champ invalide
    return false;
  }
};

///Validation par validation (prénom, nom...)
const validLastName = function (lastName) {
  let msg;
  let valid = false;
  
  let lastNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g"); // creation de la reg exp pour la validation du prénom

  //Conditions:
  if (lastName.value.length < 2) {//Doit contenir au minimum 2 caractères
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  } else if (!lastNameRegExp.test(lastName.value)) { //Doit contenir uniquement des caractères valides
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  } else {//Prénom valide
    msg = "Ce champs est valide";
    valid = true;
  }
  //Affichage:
  if (valid) {
    lastNameError.innerHTML = "";
    lastNameError.setAttribute("aria-hidden", "true");
    lastNameError.tabIndex = "-1";
    lastName.setAttribute("aria-invalid", "false");//accessibilite champ valide
    return true;
  } else {
    lastNameError.innerHTML = msg;
    lastNameError.setAttribute("aria-hidden", "false");
    lastNameError.tabIndex = "0";
    lastName.setAttribute("aria-invalid", "true");//accessibilite champ invalide
    return false;
  }
};


//Validation email
const validEmail = function (email) {
  let emailRegExp = new RegExp("^([a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,3})$", "g"); //creation de la reg exp pour la validation de l'email
  let emailTest = emailRegExp.test(email.value); //test de l'expression reguliere
  email.setAttribute("aria-invalid", "true");//accessibilite champ invalide

  //Conditions:
  if (email.value.length < 1){ //le champs ne doit pas etre vide
    emailError.innerHTML = "Veuillez renseigner ce champs";
    emailError.classList.add("text-error");
    email.classList.add("text-control--error");
    return false;
  }else if (!emailTest) {//Doit etre conforme a la RegExp
    emailError.innerHTML = "Veuillez renseigner une adresse e-mail valide";
    emailError.setAttribute("aria-hidden", "false");
    emailError.tabIndex = "0";
    emailError.classList.add("text-error");
    email.classList.add("text-control--error");
    return false;
  } else { //E-mail valide
    emailError.innerHTML = "";
    emailError.setAttribute("aria-hidden", "true");
    emailError.tabIndex = "-1";
    emailError.classList.remove("text-error");
    email.classList.remove("text-control--error");
    email.setAttribute("aria-invalid", "true");//accessibilite champ valide
    return true;
  }
};

//Validation message
const validMessage = function (message) {
  let msg;
  let valid = false;
  message.setAttribute("aria-invalid", "true");//accessibilite champ invalide

  //Conditions:
  if (message.value.length < 10) {//Doit contenir au minimum 10 caractères
    msg = "Vous devez saisir un minimum de 10 caractères pour ce champs";
  } else if (message.value.length > 1000) {//Doit contenir au maximum 1000 caractères
    msg = "Votre message est trop long. Vous devez saisir un maximum de 1000 caractères pour ce champs";
  } else {//message valide
    msg = "Ce champs est valide";
    valid = true;
  }
  //Affichage:
  if (valid) {
    messageError.innerHTML = "";
    messageError.setAttribute("aria-hidden", "true");
    messageError.tabIndex = "-1";
    message.setAttribute("aria-invalid", "true");//accessibilite champ valide
    return true;
  } else {
    messageError.innerHTML = msg;
    messageError.setAttribute("aria-hidden", "false");
    messageError.tabIndex = "0";
    message.setAttribute("aria-invalid", "true");//accessibilite champ invalide
    return false;
  }
};