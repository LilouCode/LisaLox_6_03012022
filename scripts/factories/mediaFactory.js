class mediaFactory{
    constructor(data){
        if(data.video){
            return new ThumbVideo(data);
        } 
        
        if (data.image){
            return new ThumbImg(data);
        } 
        
        else{
            throw 'Fichier non pris en charge'
        }
    }
}