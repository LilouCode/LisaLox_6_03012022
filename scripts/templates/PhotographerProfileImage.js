class PhotographerProfileImage {
  constructor(infosUser) {
    this._infosUser = infosUser;
  }

  createPhotographerProfileImage() {
    const wrapperImage = document.createElement("div");
    const photographerProfileImage = `<img src='${this._infosUser.portrait}' 
        alt='${this._infosUser.description}' class= 'imageUser focus' tabindex=0></img>`;

    wrapperImage.innerHTML = photographerProfileImage;
    return wrapperImage;
  }
}
