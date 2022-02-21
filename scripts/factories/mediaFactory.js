class mediaFactory{
    constructor(data){
        if(data.video){
            // return new ThumbVideo(data);
            const wrapperThumbMedia = document.createElement('a')
            wrapperThumbMedia.setAttribute('href','assets/medias/'+data.photographerId+'/'+data.video)
            wrapperThumbMedia.setAttribute('alt', data.title);
            const thumbVideo = `<video alt='${data.title}' onclick="displayLightbox()" class="grid_thumb_video grid_thumb_media" src="assets/medias/${data.photographerId}/${data.video}"></video>`
            wrapperThumbMedia.innerHTML = thumbVideo
            return wrapperThumbMedia
        } 
        
        if (data.image){
            // return new ThumbImg(data);
            const wrapperThumbMedia = document.createElement('a');
            wrapperThumbMedia.setAttribute('href','assets/medias/'+data.photographerId+'/'+data.image)
            wrapperThumbMedia.setAttribute('alt', data.title);
            const thumbImg = `<img alt='${data.title}' onclick="displayLightbox()" class="grid_thumb_image grid_thumb_media" src="assets/medias/${data.photographerId}/${data.image}"></img>`
            wrapperThumbMedia.innerHTML = thumbImg;
            return wrapperThumbMedia
        } 
        
        else{
            const thumbImg = `<img class="grid_thumb_image grid_thumb_media" src="assets/medias/"></img>`
            wrapperThumbMedia.innerHTML = thumbImg
            return wrapperThumbMedia
        }
    }
    
}