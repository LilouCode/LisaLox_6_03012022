class PhotographerProfileCard{
    constructor(infosUser){
        this._infosUser = infosUser;
    }

    createPhotographerProfileCard(){
        const wrapper = document.createElement('div')
        wrapper.classList.add('profile')
        //ajouter class

        const photographerProfileCard = `
        <h1 class='profile_header' tabindex=0>${this._infosUser.name}</h1>
        <div tabIndex=0><h2 class= 'profile_subtitle'>${this._infosUser.localisation}</h2>
        <p>${this._infosUser.tagline}</p></div>
        `
        wrapper.innerHTML= photographerProfileCard

        return wrapper
    }
}