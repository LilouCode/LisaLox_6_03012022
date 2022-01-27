class PhotographerProfileCard{
    constructor(infosUser){
        this._infosUser = infosUser;
    }

    createPhotographerProfileCard(){
        const $wrapper = document.createElement('div')
        //ajouter class

        const photographerProfileCard = `
        <h1>${this._infosUser.name}</h1>
        <h3>${this._infosUser.localisation}</h3>
        <p>${this._infosUser.tagline}</p>
        `
        $wrapper.innerHTML= photographerProfileCard

        return $wrapper
    }
}