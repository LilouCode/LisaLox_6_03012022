class ThumbMediaDetails{
    constructor(infosMedia){
        this._infosMedia = infosMedia;
    }

    createThumbMediaDetails(){
        constwrapperThumbMediaDetails = document.createElement('div')
       wrapperThumbMediaDetails.classList.add('grid_thumb_details')
        const thumbMediaDetails = `<p class='grid_thumb_title'>${this._infosMedia.title}</p>
        <button class='grid_thumb_likes' onclick='like()'>
        <p class='grid_thumb_likes_number'>${this._infosMedia.likes}</p>
        <img class='grid_thumb_likes_button' src='assets/icons/like_heart.svg' alt="j'aime" role='button' aria-hidden='true'></img>
        </button>
        `
       wrapperThumbMediaDetails.innerHTML = thumbMediaDetails
        returnwrapperThumbMediaDetails
    }
}