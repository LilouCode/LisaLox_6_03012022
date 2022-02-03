class ThumbVideo{
    constructor(infosMedia){
        this._infosMedia = infosMedia;
    }

    createThumbVideo(){
        const wrapperThumbMedia = document.createElement('div')
        const thumbVideo = `<video src="${this._infosMedia.video}"></video>`
        wrapperThumbMedia.innerHTML = thumbVideo
        return wrapperThumbMedia
    }
}

class ThumbImg{
    constructor(infosMedia){
        this._infosMedia = infosMedia;
    }

    createThumbImg(){
        const wrapperThumbMedia = document.createElement('div')
        const thumbImg = `<img src="${this._infosMedia.image}"></img>`
        wrapperThumbMedia.innerHTML = thumbImg
        return wrapperThumbMedia
    }
}