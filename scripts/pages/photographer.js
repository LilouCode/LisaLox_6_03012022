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

})()

//Récupération data photographes dans le json
async function getPhotographerData(photographerId){
  let photographerProfile = document.getElementById("photographer-profile");
  return fetch("data/photographers.json")
  
  .then(function(response){
    return response.json()
  })
  
  .then(function(objet){
    objet.photographers.forEach((photographers) => {
      if (photographerId == photographers.id){
        const data =  {
          photographerData: photographers
        };
        console.log(data);
      }
      // return (photographerProfile)
      return data
    })
  })
  
  .then(function(data){
    const photographerModel = photographerFactory(data);
    const userProfilDOM = photographerModel.getUserHeaderDOM();
    photographerProfile.appendChild(userProfilDOM);
  })
  .catch(function(error){
    alert.error
  })
}

// 
// -------------------------------------------------------
// (async function () {
//   //Recupération photographe ID
//   function getPhotographerId(){
//       const photographerUrl = new URL(document.location).searchParams.get('id');
//       console.log(photographerUrl);
//       document.createElement('h1');
//       return photographerUrl;
//   }
//   const photographerId = getPhotographerId()
//   const photographerData = await getPhotographerData(photographerId);

// })()

// //Récupération data photographes dans le json
// async function getPhotographerData(photographerId){
//   let photographerProfile = document.getElementById("photographer-profile");
//   let h1 = document.createElement('h1');
//   let div = document.createElement('div');
//   let h3 = document.createElement('h3');
//   let h4 = document.createElement('h4');
//   let img = document.createElement('img');
//   return fetch("data/photographers.json")
  
//   .then(function(response){
//     return response.json()
//   })
  
//   .then(function(objet){
//     objet.photographers.forEach((photographers) => {
//       // console.log(media.photographerId)
//       if (photographerId == photographers.id){
//         const data = {
//           name: photographers.name,
//           city: photographers.city,
//           tagline: photographers.tagline,
//           picture: photographers.portrait,
//         }
//         console.log(data);
//         console.log(data.name);
//         h1.textContent= `${data.name}`;
//         h3.textContent=`${data.city}`;
//         h4.textContent=`${data.tagline}`;
//         img.setAttribute ('src', ('assets/photographers/'+`${data.picture}`));
//         photographerProfile.appendChild(h1);
//         photographerProfile.appendChild(div);
//         photographerProfile.appendChild(img);
//         div.appendChild(h3);
//         div.appendChild(h4);
//         return (photographerProfile)
//       }
//     })
//   })
  
//   .catch(function(error){
//     alert.error
//   })
// }