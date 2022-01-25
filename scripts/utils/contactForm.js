function displayModal() {
  const modal = document.getElementById('contact_modal');
	const mainWrapper = document.getElementById('main');
  modal.style.display = 'flex';
  mainWrapper.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden','false');
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}


/////////////////////
//Liaison des labels
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message= document.getElementById("message");
const form = document.getElementById("form");
const modal = document.getElementById('contact_modal');

window.addEventListener("keydown", function (event) {
  if(event.key === "Escape" ){
    closeModal();
  }
})

//ecoutes
firstName.addEventListener("change", () => {
    validFirstName(this);  
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // si toutes les fonctions de validation sont vraies
    if (
      validFirstName(firstName) 
    ) {
      // Affichage dans la console
      console.table (firstName)
    }
    // pour la suite: envoi du formulaire
    // form.submit();
  });

  const validFirstName = function (firstName) {
    let msg;
    let valid = false;
    // creation de la reg exp pour la validation du prénom
    let firstNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g");
    //******* Doit contenir au minimum 2 caractères
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
    let firstNameError = document.getElementById("first-name_error");
    if (valid) {
      firstNameError.innerHTML = "";
      return true;
    } else {
      firstNameError.innerHTML = msg;
      return false;
    }
  };
  