//Elements du DOM
const lightbox = document.querySelector("#lightbox");
const mediasGrid = document.getElementsByClassName(
  "grid_thumb_media"
); //images et videos gallerie
const mainWrapper = document.getElementById("main"); //main

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
  if (lightbox.style.display === "flex") {
    if (event.key === "Escape") {
      closeLightbox();
    }
  }
});

function init() {
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
  const index = tableau.images.findIndex(
    (image) => image === this.url
  );
  links.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      new Lightbox(
        e.currentTarget.getAttribute("href"),
        images,
        tableau,
        titres,
        index
      );

      //focus
      const focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const firstFocusableElement =
        lightbox.querySelectorAll(focusableElements)[0]; //premier element focusable
      const focusableContent = lightbox.querySelectorAll(
        focusableElements
      );
      const lastFocusableElement =
        focusableContent[focusableContent.length - 1]; //dernier element focusable

      document.addEventListener("keydown", function (e) {
        let isTabPressed = e.key === "Tab";
        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (
            document.activeElement === firstFocusableElement
          ) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          //if tab key est appuyé
          if (
            document.activeElement === lastFocusableElement
          ) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });
      firstFocusableElement.focus();
    })
  );
}

////////////////////////////////////

/////////Init/////////

class Lightbox {
  constructor(url, images, tableau, titres) {
    this.element = this.builDOM(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.images = images;
    this.titres = titres;
    this.tableau = tableau;
    this.imagesT = tableau.images;
    this.titresT = tableau.titres;

    this.loadImage(url, tableau, images, titres);
    this.loadTitle(url, tableau, titres, images);
    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  loadImage(url, tableau) {
    this.url = null;

    const container = this.element.querySelector(
      ".lightbox__container"
    );
    container.innerHTML = "";

    if (url.includes(".mp4")) {
      console.log("c'est un fichier mp4");
      const image = document.createElement("video");
      image.setAttribute("type", "video/mp4");
      image.classList.add("lightbox__video");
      image.tabIndex = "1";

      container.appendChild(image);
      this.url = url;

      image.src = url;
      image.width = "900";
      image.autoplay = true;
      image.loop = true;
      image.controls = true;
    } else {
      const image = document.createElement("img");
      image.classList.add("lightbox__image");
      image.tabIndex = "1";

      container.appendChild(image);
      this.url = url;

      image.src = url;
      tableau = this.tableau;
      
      let indexI;
      tableau.images.forEach((images) => {
        if (images.includes(url)) {
          indexI = tableau.images.indexOf(images);
        }
      });
      image.alt = tableau.titres[indexI]
    }
  }

  loadTitle(tableau, url) {
    url = this.url;
    tableau = this.tableau;
    let indexI;
    tableau.images.forEach((images) => {
      if (images.includes(url)) {
        indexI = tableau.images.indexOf(images);
      }
    });

    const container = this.element.querySelector(
      ".lightbox__container"
    );

    const lightboxTitle = document.createElement("h2");
    lightboxTitle.classList.add("lightbox__title");
    lightboxTitle.tabIndex = "1";
    lightboxTitle.innerHTML = tableau.titres[indexI];
    container.appendChild(lightboxTitle);
  }

  onKeyUp(e) {
    if (e.key === "ArrowLeft") {
      this.prevMedia(e);
    } else if (e.key === "ArrowRight") {
      this.nextMedia(e);
    }
  }

  nextMedia(e) {
    e.preventDefault();
    console.log(this.tableau);
    let i = this.images.findIndex(
      (image) => image === this.url
    );
    if (i === this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1]);
    this.loadTitle();
  }

  prevMedia(e) {
    e.preventDefault();
    let i = this.images.findIndex(
      (image) => image === this.url
    );
    if (i === 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1]);
    this.loadTitle();
  }

  builDOM(url) {
    const dom = document.getElementById("lightbox");
    dom.innerHTML = `<div class="lightbox__container"></div>
        <button alt="bouton précédent" aria-roledescription="aller à l'image précédente" class="lightbox__btn__prev" tabindex="1" aria-roledescription="media précédent"></button>
        <button alt="bouton suivant" aria-roledescription="aller à l'image suivante" class="lightbox__btn__next" tabindex="1" aria-roledescription="media suivant"></button>
        <img alt="bouton fermer" class="lightbox__btn__close" src="assets/icons/close--red.svg" onclick="closeLightbox()" tabindex="1" aria-roledescription="fermer la lightbox" role="button"/>
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
