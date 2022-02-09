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

//Récupération data MEDIAS dans le json
async function getMediaData(photographerId){
  return fetch("data/photographers.json")
  
  .then(function(response){
    return response.json() 
  })
  
  .then(function(objet){
    
    let sum = 0; // pour calacul total des likes (suite plus bas: dans la boucle et après)
    // console.log(objet.media);
    //// attention boucle pour chaque média:
    objet.media.forEach((media) => {//boucle pour chaque media...
      
      if (photographerId == media.photographerId){//...qui corresponde au photographe:
        
        const wrapperThumbMedia = document.getElementById("grid");//recupere la div grid dans le dom
        const wrapperThumbMediaFull = document.createElement('div');//creation d'une div
        wrapperThumbMediaFull.classList.add('grid_thumb');//avec la class grid_thumb
        
        const fullMedia= new mediaFactory(media);//factory image ou video

        // console.log(fullMedia);//fonctionnent retourne ThumbImg ou ThumbVideo
        wrapperThumbMediaFull.appendChild(fullMedia);
        
        const data = new infosMedia(media)//class infos media
       
        /////// lightbox 
        init()
        
        //like ou dislike//
        let i = data.likes;
        function likeOrDislikeMedia() {
          const number = document.getElementById('l'+(data.title));
          if(number.value == i){
              number.value = ++i
          } 
          else{
              number.value = --i
          }
          console.log(number.value);
        }
        ////////////////////////////////////

        const templateDetailsMedia = new ThumbMediaDetails(data); // creation template détails avec data(class infos media)
        
        
        wrapperThumbMedia.appendChild(wrapperThumbMediaFull);
        wrapperThumbMediaFull.appendChild(templateDetailsMedia.createThumbMediaDetails(media))
       
        const buttonLike = document.getElementById('b'+(data.title)); 
        buttonLike.addEventListener('click', likeOrDislikeMedia());
       
       
        //// collect de likes
        sum += data.likes; // premiere declaration avant boucle et suite ci-dessous
      }
      
    })
    // affichage du total like
    let wrapperNumber = document.createElement('p');
    wrapperNumber.classList.add('CTA_total-like');
    console.log(sum);
    wrapperNumber.innerHTML= sum;
    wrapperLikes = document.getElementById('CTA_likes');
    wrapperLikes.appendChild(wrapperNumber);
      
  })
  
  .catch(function(error){
    alert.error
  })

  
} 

