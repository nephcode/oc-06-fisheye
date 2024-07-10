//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//

// SASS ==============================================================//
import '../../sass/artist.scss';

// IMPORTS ===========================================================//
import {artistName } from "../utils/domlinker";
//import {FactoryMedia} from "../utils/display";
import {
  idCapture,
  closeEsc,
  popClick,
  closeClick,
  counterLike,
  lightboxClick,
} from "../utils/tools";
import { formField, formFinish } from "/js/utils/form";
import { FactoryMedia } from "../factories/display";

// ID FROM URL GET ----------------------------------------------------//
const url = window.location.href;
const id_GET_ARTIST = idCapture(url);

console.log(id_GET_ARTIST);

const uriData = await fetch("assets/data/photographers.json");
const data = await uriData.json();
const artist = data.photographers;
console.log('artist', artist);

const fetchData = async() => {
  try {
    const url = await fetch("assets/data/photographers.json");
    const data = await url.json();
    const artist = data.photographers;
    console.log(artist);
    return artist;
  } catch (error){
    console.error('Erreur:', error );
  }
} 
fetchData();
console.log(fetchData);

const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);
console.log("==FetchIDartist==");
console.log(FetchIDartist);

// ID MEDIA -----------------------------------------------------------//

const FetchIDmedia = medias.filter(
  (media) => media.photographerId == id_GET_ARTIST
);
console.log("==== FetchIDmedia ====");
console.log(FetchIDmedia);

// TEST SORT ---------------------------------------------------------//

/* FONCTIONNE 
const sortMedia = (source, option) => {
  // Vérifiez le type de l'option
  if (typeof source[0][option] === 'string') {
      // Si l'option est une chaîne de caractères
      return source.sort((a, b) => a[option].localeCompare(b[option]));
  } else {
      // Si l'option est un nombre ou une date
      return source.sort((a, b) => b[option] - a[option]);
  }
};

const likesSort = sortMedia(FetchIDmedia, "title");
console.log("==== LIKES ====");
console.log(likesSort);
*/

// -----------------------------------------------------------------//

// VARIABLE PROGZ
const formData = document.querySelectorAll(".formData");
const submitButton = document.getElementById("FinalBtn");
const selectSortList = document.getElementById("filterSelect");

// VARIABLE REGEX
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;
const messageRegEx = /^[\s\S]{30,400}$/;

// VARIABLE FIELD FORM
const verifList = [
  { id: "first", regex: stringRegEx },
  { id: "last", regex: stringRegEx },
  { id: "email", regex: emailRegEx },
  { id: "message", regex: messageRegEx },
];

// DISPLAY ARTIST  ---------------------------------------------------//
FetchIDartist.forEach((arrayArtist) => {
  const artistName = document.getElementById("ArtistName");
  artistName.innerHTML = arrayArtist.name;
  const artistCity = document.getElementById("ArtistCity");
  artistCity.innerHTML = arrayArtist.city + ", " + arrayArtist.country;
  const artistTagline = document.getElementById("ArtistTagline");
  artistTagline.innerHTML = arrayArtist.tagline;
  const artistImage = document.getElementById("ArtistPortrait");
  //
  artistImage.src = `/assets/photographers/${arrayArtist.portrait}`;
  const artistPrice = document.getElementById("ArtistPrice");
  artistPrice.innerHTML = arrayArtist.price + "€/Jour";
});
// DISPLAY CLASS MEDIA -----------------------------------------------------//
const galerie = new FactoryMedia(id_GET_ARTIST);
console.log(id_GET_ARTIST);
console.log(galerie);
/*
galerie.forEach((arrayMedia) => {
  const galerie = mediaFactory.createMedia(arrayMedia);
  // Render the media
});

*/


// DISPLAY MEDIA -----------------------------------------------------//
function mediaIndex(cibleID, importMedia) {
  let article_media = "";
  //---------------------//
  importMedia.forEach((arrayMedia) => {
    article_media += `<article class="article_media" aria-label="photo">
    <figure><a role="button" aria-label="Ouvrir l'image en grand">`;
    if (arrayMedia.image == null) {
      article_media += `<video src="/assets/artist-assets/${arrayMedia.photographerId}/${arrayMedia.video}" alt="${arrayMedia.title}"></video>`;
    } else {
      article_media += `<img src="/assets/artist-assets/${arrayMedia.photographerId}/${arrayMedia.image}" alt="${arrayMedia.title}">`;
    }
    article_media += `</a><figcaption aria-labelledby="media-${arrayMedia.photographerId}">${arrayMedia.title}</figcaption>
    <span class="heartMedia">${arrayMedia.likes}
    <i class="fas fa-heart icone__Coeur"></i></span>
    </figure></article>`;
  });
  //---------------------//
  const cible = document.getElementById(cibleID);
  cible.innerHTML = article_media;
}
mediaIndex("carrousel", FetchIDmedia);
// LIGHTBOX CLICK ============================================
const lightbox_target = document.querySelectorAll(".article_media a");
const lightbox_pop = document.getElementById("media");


// DISPLAY TRI -------------------------------------------------------//
const selectSort = (selectorId, source, carrouselId, callback) => {
  const selector = document.getElementById(selectorId);
  const carrousel = document.getElementById(carrouselId);

  const sortMedia = (source, option) => {
    if (typeof source[0][option] === "string") {
      return source.sort((a, b) => a[option].localeCompare(b[option]));
    } else {
      return source.sort((a, b) => b[option] - a[option]);
    }
  };

  selector.addEventListener("change", (event) => {
    const option = event.target.value;
    const sortedMedia = sortMedia(source, option);
    mediaIndex(carrouselId, sortedMedia);
    lightboxClick(lightbox_pop, lightbox_target);
    // Réinitialisation du carousel sur le EventListener
    //const lightbox_target = document.querySelectorAll(".article_media a");
    //const lightbox_pop = document.getElementById("media");
    if (typeof callback === "function") {
      callback();
    }
  });
};

selectSort("filterSelect", FetchIDmedia, "carrousel", () => {
  lightboxClick(lightbox_pop, lightbox_target);
});
console.log(selectSort);
// DISPLAY LIKE COUNTER ----------------------------------------//
counterLike(FetchIDmedia);



// ================= NEPHA CODE ===========ADAPT FOR 06 =======
// BOUCLE DE VERIF ============================================
// ============================= 2024 PATCH 😅 ================
const onSkud = (inputSkud, regRuleSkud) => {
  const targetSkud = document.getElementById(inputSkud);
  const targetMit = document.getElementById("FinalBtn");
  const inputValue = targetSkud.value;
  //console.log("targetMit " + targetMit.id);
  //console.log("targetSkud " + targetSkud.value);
  const fieldData = targetSkud.parentElement;
  if (inputValue && regRuleSkud.test(inputValue)) {
    targetMit.removeAttribute("disabled");
    fieldData.classList.add("formDataOK");
    fieldData.setAttribute("aria-invalid", "false");
    fieldData.setAttribute("aria-errormessage", `Valide`);
    //console.log(`L'input ${inputValue} est valide`);
  } else {
    fieldData.classList.remove("formDataOK");
    fieldData.setAttribute("aria-invalid", "true");
    fieldData.setAttribute(
      "aria-errormessage",
      `Votre saisie ${inputValue} n'est pas valide`
    );
    targetMit.setAttribute("disabled", "");

    throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);
  }
};

// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
/**
 * @param {string} inputOnAir
 * */
const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  const targetMit = document.getElementById("FinalBtn");
  targetAir.addEventListener(listenerOnAir, (event) => {
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (inputValue && regRuleOnAir.test(inputValue)) {
      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("aria-invalid", "false");
      fieldData.setAttribute("aria-errormessage", `Votre saisie est valide`);
      //console.log(`L'input ${inputValue} est valide`);
      verifList
        .slice()
        .reverse()
        .forEach((item) => {
          onSkud(item.id, item.regex);
          if (!onSkud) {
            targetMit.setAttribute("disabled", "");
          } else {
            targetMit.removeAttribute("disabled");
          }
        });
    } else {
      fieldData.classList.remove("formDataOK");
      fieldData.setAttribute("aria-invalid", "true");
      fieldData.setAttribute(
        "aria-errormessage",
        `Votre saisie n'est pas valide`
      );
      targetMit.setAttribute("disabled", "");
      //throw new Error(`L'élément ${inputOnAir} ${inputValue} spécifié n'est pas valide`);
    }
  });
};

// CONTACT MODAL ==============================================
// =============== NEAH GAME =================== 2024 =========
// ============================================================
const clickContact = document.getElementById("contactButton");
const modalContact = document.getElementById("contact_modal");
const closer = document.getElementById("closecontact");
const close = document.querySelector(".close");
const h2name = document.querySelector("#contact_modal header h2");
const formTarget = document.getElementById("contactForm");
h2name.innerHTML = "Contactez-moi " + FetchIDartist[0].name;
// OUVRIR =====================================================
const popoverModal = (target) => {
  //console.log(target);
  target.innerHTML = formField;
  target.reset();
  try {
    onAirChange("first", "blur", stringRegEx);
    onAirChange("last", "blur", stringRegEx);
    onAirChange("email", "blur", emailRegEx);
    onAirChange("message", "blur", messageRegEx);
  } catch (Error) {
    console.log("il y'a des erreurs" + Error.message);
  }
};
clickContact.addEventListener("click", () => {
  popoverModal(formTarget);
});

// ============================================================
// OC FORM SUBMIT ================== NEPHA CODE ===============
// =============================================== 2024 =======
formTarget.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("========= Envoi du formulaire ======");
  console.log("Artiste ID : " + id_GET_ARTIST);
  console.log("Prénom : " + first.value);
  console.log("Nom : " + last.value);
  console.log("Email : " + email.value);
  const messageLog = message.value.substring(0, 40);
  console.log("Message : " + messageLog);
  console.log("========= PUSH MESSAGE OK ==========");
  formTarget.innerHTML = formFinish;

  closeClick(contact_modal, BtnInscriptionClozer);
});
// CLOSE ESC ==================================================
closeEsc(modalContact);
closeEsc(lightbox_pop);
// CLOSE CLICK ================================================
popClick(contact_modal, closecontact);
popClick(media, closemedia);

// ============================================================
// ========================= By Nepha =================2024====
// ============================================================
