////////////////////////// Profil photographe //////////////////////////

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

//Récupération data photographes dans le json
async function getPhotographerData(photographerId){
  return fetch("data/photographers.json")
  
  .then(function(response){
    return response.json()
  })
  
  .then(function(objet){
    objet.photographers.forEach((photographers) => {
      if (photographerId == photographers.id){
        //creation du profil
        let $wrapperProfil = document.getElementById("photographer-profile");
        const data = new infosUser(photographers);
        const template = new PhotographerProfileCard(data);
        $wrapperProfil.appendChild(template.createPhotographerProfileCard(photographers));
        console.log(template);
        // image user
        let $wrapperImg = document.getElementById("photographer_image");
        const templateImage = new PhotographerProfileImage(data);
        $wrapperImg.appendChild(templateImage.createPhotographerProfileImage(photographers));
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

//Récupération data medias dans le json
async function getMediaData(photographerId){
  return fetch("data/photographers.json")
  
  .then(function(response){
    return response.json()
  })
  
  .then(function(objet){
    // let allLikes = [];
    let sum = 0;
    objet.media.forEach((media) => {
      if (photographerId == media.photographerId){
        //creation du profil
        // console.log(media.video) //ça marche
        //test
        const test= new mediaFactory(media);
        console.log(test);
        // ok !
        const $wrapperThumbMedia = document.getElementById("grid");
        const $wrapperThumbMediaFull = document.createElement('div');
        $wrapperThumbMediaFull.classList.add('thumbImg');
        const data = new infosMedia(media)
        const templateDetailsMedia = new ThumbMediaDetails(data);
        $wrapperThumbMedia.appendChild($wrapperThumbMediaFull);
        $wrapperThumbMediaFull.appendChild(templateDetailsMedia.createThumbMediaDetails(media))
        


        // collect de likes
        // let add =tableauLikes.push(data.likes); (version avec fichier Likes.1)
        
        
        
        //  ;
        // for (let i = 0; i < allLikes.length; i++) {
            sum += data.likes;
            // console.log(sum)
            
        // }
        
        
        
    
      }
      
    })
    let $wrapperNumber = document.createElement('p');
    $wrapperNumber.classList.add('CTA_total-like');
    console.log(sum);
    $wrapperNumber.innerHTML= sum;
    $wrapperLikes = document.getElementById('CTA_likes');
    $wrapperLikes.appendChild($wrapperNumber);
      
  })
  
  .catch(function(error){
    alert.error
  })
} 

