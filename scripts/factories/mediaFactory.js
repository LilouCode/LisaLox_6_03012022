class mediaFactory{
    constructor(data){
        if(data.video){
            // return new ThumbVideo(data);
            const wrapperThumbMedia = document.createElement('div')
            const thumbVideo = `<video class="grid_thumb_video" src="assets/medias/${data.photographerId}/${data.video}"></video>`
            wrapperThumbMedia.innerHTML = thumbVideo
            return wrapperThumbMedia
        } 
        
        if (data.image){
            // return new ThumbImg(data);
            const wrapperThumbMedia = document.createElement('div')
            const thumbImg = `<img class="grid_thumb_image" src="assets/medias/${data.photographerId}/${data.image}"></img>`
            wrapperThumbMedia.innerHTML = thumbImg
            return wrapperThumbMedia
        } 
        
        else{
            const thumbImg = `<img class="grid_thumb_image" src="assets/medias/"></img>`
            wrapperThumbMedia.innerHTML = thumbImg
            return wrapperThumbMedia
        }
    }
}