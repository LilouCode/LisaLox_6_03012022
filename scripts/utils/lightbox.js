//Elements du DOM
const lightbox = document.getElementById("lightbox"); //lightbox
const mediasGrid = document.getElementsByClassName(
  "grid_thumb_media"
); //images et videos gallerie
const mainWrapper = document.getElementById("main"); //main
let title = String;
console.log(mediasGrid); //test

/////////Display lightbox/////////
function displayLightbox() {
  lightbox.style.display = "flex";
  mainWrapper.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
}
window.addEventListener("keydown", function (event) {
  if (event.target.matches(".aMedia")) {
    if (event.key === "Enter") {
      displayLightbox();
    }
  }
});

function closeLightbox() {
  lightbox.style.display = "none";
  mainWrapper.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
}
window.addEventListener("keydown", function (event) {
  if (lightbox.style.display == "flex") {
    if (event.key === "Escape") {
      closeLightbox();
    }
  }
});

function init() {
  // avec lightbox.js :
  const links = Array.from(
    document.querySelectorAll(
      'a[href$=".jpg"], a[href$=".mp4"]'
    )
  );
  console.log(links);
  const images = links.map((link) =>
    link.getAttribute("href")
  );
  console.log(images);
  const titres = links.map((link) =>
    link.getAttribute("alt")
  );

  const tableau = {
    images: images,
    titres: titres,
  };
  console.log(tableau);
  console.log(titres);
  links.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      title = e.currentTarget.getAttribute("alt");
      console.log(title);
      new Lightbox(
        e.currentTarget.getAttribute("href"),
        images,
        title
      );
    })
  );
}

////////////////////////////////////

/////////Init/////////

/**
 * @property {HTMLElement} element
 * @property {string[]} images chemins des images de la lightbox
 * @property {string} url Image actuellement chargée
 */
class Lightbox {
  /**
   * @param {string} url URL de l'image
   * @param {string[]} images chemins des images de la lightbox
   */
  constructor(url, images, tableau) {
    this.element = this.builDOM(url);
    this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.images = images;
    this.tableau = tableau;
    // this.title = title;
    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {string} url URL de l'image
   */
  loadImage(url) {
    this.url = null;
    const container = this.element.querySelector(
      ".lightbox__container"
    );
    container.innerHTML = "";

    const lightboxTitle = document.createElement("h2");
    lightboxTitle.classList.add("lightbox__title");
    lightboxTitle.innerHTML = title;
    container.appendChild(lightboxTitle);

    if (url.includes(".mp4")) {
      console.log("c'est un fichier mp4");
      const image = document.createElement("video");
      image.setAttribute("type", "video/mp4");
      image.classList.add("lightbox__video");

      container.appendChild(image);
      this.url = url;

      image.src = url;
      image.width = "900";
      image.autoplay = true;
      image.loop = true;
      image.controls = true;
      image.alt = title;
    } else {
      const image = document.createElement("img");
      image.classList.add("lightbox__image");

      container.appendChild(image);
      this.url = url;

      image.src = url;
      image.alt = title;
    }
  }
  /**
   *
   * @param {KeyboardEvent} e
   *
   */

  onKeyUp(e) {
    if (e.key === "ArrowLeft") {
      this.prevMedia(e);
    } else if (e.key === "ArrowRight") {
      this.nextMedia(e);
    }
  }

  /**
   * @param {MouseEvent/KeyboardEvent} e
   */
  nextMedia(e) {
    e.preventDefault();
    let i = this.images.findIndex(
      (image) => image === this.url
    );
    if (i === this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1]);
  }

  /**
   * @param {MouseEvent/KeyboardEvent} e
   */
  prevMedia(e) {
    e.preventDefault();
    let i = this.images.findIndex(
      (image) => image === this.url
    );
    if (i === 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1]);
  }

  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */

  builDOM(url) {
    const dom = document.getElementById("lightbox");
    dom.innerHTML = ` <img alt="bouton fermer" class="lightbox__btn__close" src="assets/icons/close--red.svg" onclick="closeLightbox()" tabindex="0" aria-roledescription="fermer la lightbox" role="button"/>
        <button alt="bouton suivant" aria-roledescription="aller à l'image suivante" class="lightbox__btn__next" tabindex="0" aria-roledescription="media suivant"></button>
        <button alt="bouton précédent" aria-roledescription="aller à l'image précédente" class="lightbox__btn__prev" tabindex="0" aria-roledescription="media précédent"></button>
        <div class="lightbox__container"></div>
        </div>
        `;
    dom
      .querySelector(".lightbox__btn__next")
      .addEventListener("click", this.nextMedia.bind(this));
    dom
      .querySelector(".lightbox__btn__prev")
      .addEventListener("click", this.prevMedia.bind(this));

    return dom;
  }
}
