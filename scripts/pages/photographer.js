////////////////////////// Photographer Profil //////////////////////////

(async function () {
  //Recupération photographe ID
  function getPhotographerId(){
      const photographerUrl = new URL(document.location).searchParams.get('id');
      console.log(photographerUrl);
      document.createElement('h1');
      return photographerUrl;
  }
  const photographerId = getPhotographerId()
  const photographerData = await getPhotographerData(photographerId);
  const mediaData = await getMediaData(photographerId);

})()

//Récupération data PHOTOGRAPHER dans le json
async function getPhotographerData(photographerId){
  return fetch("data/photographers.json")
  
  .then(function(response){
    return response.json()
  })
  
  .then(function(objet){
    objet.photographers.forEach((photographers) => {
      if (photographerId == photographers.id){
        //creation du profil
        let wrapperProfil = document.getElementById("photographer-profile");
        const data = new infosUser(photographers);
        const template = new PhotographerProfileCard(data);
        wrapperProfil.appendChild(template.createPhotographerProfileCard(photographers));
        console.log(template);
        // image user
        let wrapperImg = document.getElementById("photographer_image");
        const templateImage = new PhotographerProfileImage(data);
        wrapperImg.appendChild(templateImage.createPhotographerProfileImage(photographers));
        console.log(templateImage);
        //CTA
        let ctaPrice = document.getElementById('CTA_price');
        ctaPrice.innerHTML= `${data.price}`;
        //modal name
        contactName= document.getElementById('modal_title');
        contactName.innerHTML += `<br>${data.name}`;
      }
  
    })
    
  })
  
  .catch(function(error){
    alert.error
  })
}

////////////////////////// Grid Media //////////////////////////
const wrapperThumbMedia = document.getElementById("grid");//recupere la div grid dans le dom
let test = document.getElementById('grid').innerHTML;


//Récupération data MEDIAS dans le json
async function getMediaData(photographerId, tri){

  return fetch("data/photographers.json")
  
  .then(function(response){
    return response.json() 
    
  })
  
  .then(function(objet){
    let sum = 0; // pour calacul total des likes (suite plus bas: dans la boucle et après)

   //TRIER
    
   if(tri==="titre"){
    objet.media.sort(trierParTitre);
   } else if (tri === "popularite"){
    objet.media.sort(trierParPopularite);
   } else if (tri === "date"){
     objet.media.sort(trierParDate);
   }
    console.table(objet.media)//tableau plein pour tri


    ///////////////
    const oneWrapper = document.createElement('div');
    wrapperThumbMedia.appendChild(oneWrapper);
    oneWrapper.classList.add('grid_wrapper');
    // attention boucle:
    objet.media.forEach((media) => {//boucle pour chaque media...
      
      if (photographerId == media.photographerId){//...qui corresponde au photographe:
        
        function creatMediaGrid(){
          
          // const wrapperThumbMedia = document.getElementById("grid");//recupere la div grid dans le dom
          const wrapperThumbMediaFull = document.createElement('div');//creation d'une div
          wrapperThumbMediaFull.classList.add('grid_thumb');//avec la class grid_thumb
          
          const fullMedia= new mediaFactory(media);//factory image ou video

          // console.log(fullMedia);//fonctionnent retourne ThumbImg ou ThumbVideo
          wrapperThumbMediaFull.appendChild(fullMedia);
          
          const data = new infosMedia(media)//class infos media
        
          
          
          ////////////////////////////////////

          const templateDetailsMedia = new ThumbMediaDetails(data); // creation template détails avec data(class infos media)
          
          
          oneWrapper.appendChild(wrapperThumbMediaFull);
          wrapperThumbMediaFull.appendChild(templateDetailsMedia.createThumbMediaDetails(media))
        
          /////// lightbox 
          init()
          //// collect de likes
          sum += data.likes; // premiere declaration avant boucle et suite ci-dessous

          ///////// Bouton like ou dislike //////////
          const buttonLike = document.getElementById('button_'+(data.title)); 
          buttonLike.addEventListener('click', function() {
            let i = document.getElementById('like_'+(data.title)).innerHTML;
            if (i == data.likes){
              i++;
              sum ++;
            } else{
              i--;
              sum--;
            }
            wrapperNumber.innerHTML= sum;
            document.getElementById('like_'+(data.title)).innerHTML= i;
          });
       
        }
        creatMediaGrid()
      } 
      
    })
    
    
     // affichage du total like
    let wrapperNumber = document.createElement('p');
    wrapperNumber.classList.add('CTA_total-like');
    console.log(sum);
    wrapperNumber.innerHTML= sum;
    wrapperLikes = document.getElementById('CTA_likes');
    wrapperLikes.appendChild(wrapperNumber);
    
    boutonTitre.addEventListener('click', function(e){
      e.preventDefault()
      wrapperNumber.parentNode.removeChild(wrapperNumber);
      oneWrapper.parentNode.removeChild(oneWrapper);
      test= getMediaData(photographerId, "titre");
    })
    boutonPopulaire.addEventListener('click', function(e){
      e.preventDefault()
      wrapperNumber.parentNode.removeChild(wrapperNumber);
      oneWrapper.parentNode.removeChild(oneWrapper);
      test= getMediaData(photographerId, "popularite");
    })
    boutonDate.addEventListener('click', function(e){
      e.preventDefault()
      wrapperNumber.parentNode.removeChild(wrapperNumber);
      oneWrapper.parentNode.removeChild(oneWrapper);
      test= getMediaData(photographerId, "date");
    })
  })
  
  .catch(function(error){
    alert.error
  })
  
} 