function photographerFactory(data) {
    const { name, portrait, city, tagline, price, description } = data;

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM() {
    
    //Article
        const article = document.createElement( 'article' );
        article.classList.add("thumb");
        article.tabIndex = "3";
        article.ariaLabel = "Allez sur la page de" +name
    
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
        p.textContent= price + "/jour";
        p.classList.add("thumb_price");
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, city, tagline, price, description, getUserCardDOM }
}