class ThumbImg{
    constructor(infosMedia){
        this._infosMedia = infosMedia;
    }

    createThumbMedia(){
        const $wrapperThumbMedia = document.createElement('div')
        const thumbImage = new mediaFactory (models, data.image)
        // const thumbMedia = new 
        //rajouter alt
        $wrapperThumbMedia.innerHTML = thumbMedia
        return $wrapperThumbMedia
    }
}