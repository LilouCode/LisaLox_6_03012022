function photographerFactory(data) {
    const { name, portrait, city, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    // const user = 'assets/photographers/account.png'

    function getUserCardDOM() {
    
        //creation article
        const article = document.createElement( 'article' );
        article.classList.add("thumb")
        // article.ariaLabel("Ouvrir la page de" +name);
    
        // creation image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        // img.style.backgroundImage("src", picture);
        img.classList.add("thumb_img")
    
        // creation nom
        const h2 = document.createElement( 'h2');
        h2.textContent = name;
        h2.classList.add("thumb_name");
    
        //creation ville
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        h3.classList.add("thumb_city");
    
        //creation description
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        h4.classList.add("thumb_tagline");
    
        // creation prix 
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
    return { name, picture, city, tagline, price, getUserCardDOM }
}