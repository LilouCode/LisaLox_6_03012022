class PhotographerProfileCard{
    constructor(infosUser){
        this._infosUser = infosUser;
    }

    createPhotographerProfileCard(){
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('profile')
        //ajouter class

        const photographerProfileCard = `
        <h1 class='profile_header'>${this._infosUser.name}</h1>
        <h3 class= 'profile_subtitle'>${this._infosUser.localisation}</h3>
        <p>${this._infosUser.tagline}</p>
        `
        $wrapper.innerHTML= photographerProfileCard

        return $wrapper
    }
}