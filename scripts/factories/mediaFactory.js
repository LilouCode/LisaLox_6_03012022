class mediaFactory{
    constructor(data){
        if(media._media == data.image){
            return new infosMediaImage(data);
        } else if (media._media == data.video){
            return new infosMediaVideo(data);
        } else{
            throw 'Fichier non pris en charge'
        }
    }
}