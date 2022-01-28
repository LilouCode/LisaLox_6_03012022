class infosUser{
    constructor(data){
        this._name = data.name
        this._city = data.city 
        this._country = data.country
        this._tagline = data.tagline 
        this._price = data.price 
        this._portrait = data.portrait
        this._description = data.description
        this._id = data.id 
    }

    get name(){
        return this._name
    }

    get localisation(){
        return `${this._city}  ${this._country}`
    }

    get tagline(){
        return this._tagline
    }

    get price(){
        return `${this._price}€/jour`
    }

    get portrait(){
        return `assets/photographers/${this._portrait}`
    }

    get description(){
        return this._description
    }

    get id(){
        return this._id
    }
}