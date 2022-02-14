//DOM
const boutonDropdown = document.getElementById('dropdownButton');
boutonDropdown.innerHTML = "selectionner";
const dropContent = document.getElementById('selection');
const boutonTitre = document.getElementById('titreBtn');
const boutonPopulaire = document.getElementById('popBtn');


function dropdownOpenClose() {
  dropContent.classList.toggle("show");
  boutonDropdown.classList.toggle("dropdown__btn--open");
}

function closeDropdown(){
  dropContent.classList.remove("show");
  boutonDropdown.classList.remove("dropdown__btn--open");
}


function trierParTitre (a,b) {
  if(a.title.toLowerCase() < b.title.toLowerCase()){
    return  -1;
  } else if (a.title.toLowerCase() > b.title.toLowerCase()){
    return 1;
  }
}
function trierParPopularite(a,b){
  return b.likes -a.likes;
}


let flag= false;


function choisirTri(element){
  if(flag){
    element.sort(trierParTitre);
    console.table(element);
  } else if (!flag) {
    element.sort(trierParPopularite);
    console.table(element);
  }
}


//ECOUTES

window.onclick = function(event){//fermer le dropdown lorsque l'on clique n'importe où 
  if (!event.target.matches('.dropdown__btn')){
    closeDropdown();
  }
}

boutonTitre.addEventListener('click', function(){
  boutonDropdown.innerHTML = "Titre";
  this.style.display = "none";
  boutonPopulaire.style.display = "block";
  flag = true;
  console.log(flag)
})

boutonPopulaire.addEventListener('click', function (){
  boutonDropdown.innerHTML= "Popularité";
  this.style.display = "none";
  boutonTitre.style.display= "block";
  flag= false;
  console.log(flag)
})

