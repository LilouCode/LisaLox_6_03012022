class ThumbMediaDetails{
    constructor(infosMedia){
        this._infosMedia = infosMedia;
    }

    createThumbMediaDetails(){
        const $wrapperThumbMediaDetails = document.createElement('div')
        $wrapperThumbMediaDetails.classList.add('thumbImg_details')
        const thumbMediaDetails = `<p class='thumbImg_title'>${this._infosMedia.title}</p>
        <button class='thumbImg_likes' onclick='like()'>
        <p class='thumbImg_likes_number'>${this._infosMedia.likes}</p>
        <img class='thumbImg_likes_button' src='assets/icons/like_heart.svg' role='button' onclick=''></img>
        </button>
        `
        $wrapperThumbMediaDetails.innerHTML = thumbMediaDetails
        return $wrapperThumbMediaDetails
    }
}