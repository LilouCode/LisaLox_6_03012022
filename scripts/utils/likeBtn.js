 //like or dislike
class btnLike{
    constructor(infosMedia){
        this._infosMedia = infosMedia;
    }

    i = this._infosMedia.likes;
    likeOrDislikeMedia (){
        number = document.getElementById('l'+(this._infosMedia.title));
        if(number.value == i){
            number.value = ++i
        } 
        else{
            number.value = --i
        }
    }
}

// const filter = document.getElementById('filter');
// const div = document.createElement('div');
// filter.appendChild(div);



// let i= 3 ;

// function LikeOrDislike(){
//  document.getElementById('inc').value = ++i;
// }

// div.innerHTML = `<button id='btn' onclick= 'LikeOrDislike()'></button>
// <input type="text" id="inc" value="3"></input>`;
// button = document.getElementById('btn');

// filter.appendChild(button);

