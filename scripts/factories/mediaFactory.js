class mediaFactory{
    constructor(data){
        if(!(data.video =null)){
            return new ThumbVideo(data);
        } 
        
        if (!(data.image = null)){
            return new ThumbImg(data);
        } 
        
        else{
            throw 'Fichier non pris en charge'
        }
    }
}