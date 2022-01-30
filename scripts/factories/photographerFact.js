function photographerFactory(data) {
    const { name, portrait, city, tagline, price, description, id } = data;

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM() {
    
    //Article
        const article = document.createElement( 'article' );
        article.classList.add("thumb");
        article.ariaLabel = "Allez sur la page de " +name
        article.tabIndex= 0;
    
    //Lien
        const a = document.createElement('a');
        a.href += '/photographer.html?id=' + id;
        a.classList.add("thumb_link")
        a.tabIndex= -1;
    // Image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.classList.add("thumb_img")
        img.alt = "Photo de profil de " + name
        img.ariaLabel = description
    
    // Noms
        const h2 = document.createElement( 'h2');
        h2.textContent = name;
        h2.classList.add("thumb_name");
    
    // Ville
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        h3.classList.add("thumb_city");
    
    // Description
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        h4.classList.add("thumb_tagline");
    
    // Tarifs 
        const p = document.createElement('p');
        p.textContent= price + "€/jour";
        p.classList.add("thumb_price");
        
    //organisation des éléments    
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, city, tagline, price, description, id, getUserCardDOM }

    //Header photographe de la page photographe.html
    function getUserHeaderDOM() {
    
        //Profile
            const profile = document.createElement( 'profile' );
            article.classList.add("profile");
            article.ariaLabel = "Profile de " +name
        
        // Noms
            const h2 = document.createElement( 'h2');
            h2.textContent = name;
            h2.classList.add("thumb_name");
        
        // Ville
            const h3 = document.createElement( 'h3' );
            h3.textContent = city;
            h3.classList.add("thumb_city");
        // Description
            const h4 = document.createElement('h4');
            h4.textContent = tagline;
            h4.classList.add("thumb_tagline");
        
        // Image
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            img.classList.add("thumb_img")
            img.alt = "Photo de profil de " + name
            img.ariaLabel = description
        
        //organisation des éléments    
            profile.appendChild(name);
            profile.appendChild(city);
            profile.appendChild(description);
            return (profile);
        }
        return { name, picture, city, tagline, description, id, getUserHeaderDOM }
}