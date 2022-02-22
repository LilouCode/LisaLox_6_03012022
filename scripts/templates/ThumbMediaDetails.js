class ThumbMediaDetails {
  constructor(infosMedia) {
    this._infosMedia = infosMedia;
  }

  createThumbMediaDetails() {
    const wrapperThumbMediaDetails =
      document.createElement("div");
    wrapperThumbMediaDetails.classList.add(
      "grid_thumb_details"
    );

    const thumbMediaDetails = `<p class='grid_thumb_title'>${this._infosMedia.title}</p>
        <button id='button_${this._infosMedia.title}' class='grid_thumb_likes' onclick=''> 
        <span id='like_${this._infosMedia.title}' class='grid_thumb_likes_number'>${this._infosMedia.likes}</span>
        <img class='grid_thumb_likes_button' src='assets/icons/like_heart.svg' alt="j'aime" role='button' aria-hidden='true'></img>
        </button>
        `;
    wrapperThumbMediaDetails.innerHTML = thumbMediaDetails;

    return wrapperThumbMediaDetails;
  }
}
