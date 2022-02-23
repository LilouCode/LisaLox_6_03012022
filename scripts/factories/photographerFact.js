function photographerFactory(data) {
  const {
    name,
    portrait,
    city,
    country,
    tagline,
    price,
    description,
    id,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    //Article
    const article = document.createElement("article");
    article.classList.add("thumb");
    article.ariaLabel = "Allez sur la page de " + name;

    //Lien
    const a = document.createElement("a");
    a.href += "./photographer.html?id=" + id;
    a.classList.add("thumb_link");
    a.tabIndex = 0;
    // Image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add("thumb_img");
    img.alt = "Photo de profil de " + name;
    img.ariaLabel = description;

    // Noms
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.classList.add("thumb_name");

    //Section détails photographe
    const sectionDetails =
      document.createElement("section");
    sectionDetails.classList.add("thumb_details");
    sectionDetails.tabIndex = 0;

    // Ville et pays
    const h3 = document.createElement("h3");
    h3.textContent = city + " " + country;
    h3.classList.add("thumb_city");

    // Description
    const h4 = document.createElement("h4");
    h4.textContent = tagline;
    h4.classList.add("thumb_tagline");

    // Tarifs
    const p = document.createElement("p");
    p.textContent = price + "€/jour";
    p.classList.add("thumb_price");

    //organisation des éléments
    article.appendChild(a);
    a.appendChild(img);
    a.appendChild(h2);
    sectionDetails.appendChild(h3);
    sectionDetails.appendChild(h4);
    sectionDetails.appendChild(p);
    article.appendChild(sectionDetails);
    return article;
  }
  return {
    name,
    picture,
    city,
    tagline,
    price,
    description,
    id,
    getUserCardDOM,
  };
}
