//DOM
const boutonDropdown = document.getElementById(
  "dropdownButton"
);
boutonDropdown.innerHTML = "Titre";
const dropContent = document.getElementById("selection");
const boutonTitre = document.getElementById("titreBtn");
boutonTitre.style.display = "none";
const boutonPopulaire = document.getElementById("popBtn");
const boutonDate = document.getElementById("dateBtn");

function dropdownOpenClose() {
  dropContent.classList.toggle("show");
  boutonDropdown.classList.toggle("dropdown__btn--open");
}

function closeDropdown() {
  dropContent.classList.remove("show");
  boutonDropdown.classList.remove("dropdown__btn--open");
}

function trierParTitre(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  } else if (
    a.title.toLowerCase() > b.title.toLowerCase()
  ) {
    return 1;
  }
}
function trierParPopularite(a, b) {
  return b.likes - a.likes;
}

function trierParDate(a, b) {
  return (
    new Date(b.date.valueOf()) - new Date(a.date.valueOf())
  );
}

//ECOUTES

window.onclick = function (event) {
  //fermer le dropdown lorsque l'on clique n'importe où
  if (!event.target.matches(".dropdown__btn")) {
    closeDropdown();
  }
};

boutonTitre.addEventListener("click", function () {
  boutonDropdown.innerHTML = "Titre";
  this.style.display = "none";
  boutonPopulaire.style.display = "block";
  boutonDate.style.display = "block";
});

boutonPopulaire.addEventListener("click", function () {
  boutonDropdown.innerHTML = "Popularité";
  this.style.display = "none";
  boutonTitre.style.display = "block";
  boutonDate.style.display = "block";
});

boutonDate.addEventListener("click", function () {
  boutonDropdown.innerHTML = "Date";
  this.style.display = "none";
  boutonTitre.style.display = "block";
  boutonPopulaire.style.display = "block";
});
