//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//
//import { dataAccess } from "../factories/data.js";
import { 
  idCapture,
  closeEsc, 
  closeClick, 
  counterLike
} from "/js/utils/tools.js";
import { formInject, formFinish } from "/js/utils/form.js";

// ID FROM URL GET ----------------------------------------------------//
const url = window.location.href;
const id_GET_ARTIST = idCapture(url);

console.log(id_GET_ARTIST);

const response = await fetch("/data/photographers.json");
const data = await response.json();
const artist = data.photographers;
const medias = data.media;

const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);
console.log(FetchIDartist);

const FetchIDmedia = medias.filter(
  (media) => media.photographerId == id_GET_ARTIST
);

// VARIABLE PROGZ
const formData = document.querySelectorAll(".formData");
const submitButton = document.getElementById("FinalBtn");
const formOC = document.getElementById("ocform");
// VARIABLE REGEX
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;
const messageRegEx = /^[\s\S]{30,400}$/;

// DISPLAY ARTIST  ---------------------------------------------------//
console.log(FetchIDartist[0].name);
FetchIDartist.forEach((arrayArtist) => {
  const artistName = document.getElementById("ArtistName");
  const artistCity = document.getElementById("ArtistCity");
  artistCity.innerHTML = arrayArtist.city + ", " + arrayArtist.country;
  const artistTagline = document.getElementById("ArtistTagline");
  artistTagline.innerHTML = arrayArtist.tagline;
  const artistImage = document.getElementById("ArtistPortrait");
  //console.log(artistImage);
  //console.log(arrayArtist.portrait);
  artistImage.src = `/assets/photographers/${arrayArtist.portrait}`;
  const artistPrice = document.getElementById("ArtistPrice");
  artistPrice.innerHTML = arrayArtist.price + "€/Jour";
});
// DISPLAY TRI -------------------------------------------------------//


// DISPLAY MEDIA -----------------------------------------------------//
function mediaIndex(importMedia) {
  //let article_media = `<section id="artistSection" class="photographer_section">`;
  let article_media = "";
  //---------------------//
  importMedia.forEach((arrayMedia) => {
    article_media += `<article class="article_media" aria-label="photo">
    <figure><a href="#lightbox?id=${arrayMedia.id}" role="button" aria-label="Ouvrir l'image en grand">`;
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
  const cible = document.getElementById("carrousel");
  cible.innerHTML = article_media;
}
mediaIndex(FetchIDmedia);

// DISPLAY LIKE COUNTER ----------------------------------------//
counterLike(FetchIDmedia);

// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
/**
 * @param {string} inputOnAir
 * */
const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  const targetMit = document.getElementById("FinalBtn");
  console.log(targetMit);
  targetAir.addEventListener(listenerOnAir, (event) => {
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (inputValue && regRuleOnAir.test(inputValue)) {
      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("aria-invalid", "false");
      fieldData.setAttribute(
      "aria-errormessage",
      `Votre saisie est valide`
      );
      console.log(`L'input ${inputValue} est valide`);
    }
    else {
      fieldData.classList.remove("formDataOK");
      fieldData.setAttribute("aria-invalid", "true");
      fieldData.setAttribute(
        "aria-errormessage",
        `Votre saisie n'est pas valide`
      );
      targetMit.setAttribute("disabled", "");
      throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);

      const btnSuppr = document.getElementById("FinalBtn");
      btnSuppr.setAttribute("disabled", "");
      console.log("Bouton désactivé");  
    }
  });
};

// ================= NEPHA CODE ===========ADAPT FOR 06 =======
// BOUCLE DE VERIF ============================================
// ============================= 2024 PATCH 😅 ================
const verifList = [
  { id: "first", regex: stringRegEx },
  { id: "last", regex: stringRegEx },
  { id: "email", regex: emailRegEx },
  { id: "message", regex: messageRegEx }
];

const onSkud = (inputSkud, regRuleSkud) => {
  const targetSkud = document.getElementById(inputSkud);
  const targetMit = document.getElementById("FinalBtn");
  const inputValue = targetSkud.value;

  console.log(targetSkud.value);
  const fieldData = targetSkud.parentElement;
  if (inputValue && regRuleSkud.test(inputValue)) {
    targetMit.removeAttribute("disabled");
    fieldData.classList.add("formDataOK");
    fieldData.setAttribute("aria-invalid", "false");
    fieldData.setAttribute(
      "aria-errormessage",
      `Votre saisie ${inputValue} est valide`
    );
    console.log(`L'input ${inputValue} est valide`);
    }
    else {
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
// FONCTION DISAMIT ================ NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string } inputDisamit
 */
const disamit = (targetDisamit, listenerDisamit) => {
  let submitProtect = document.getElementById("FinalBtn");
  // BOUCLE PATCH VERIF DES CHAMPS
  verifList.forEach((item) => {
    onSkud(item.id, item.regex);
    console.log(`Champ: ${item.id}, Expression régulière: ${item.regex}`);
    if (onSkud) {
      submitProtect.removeAttribute("disabled");
    }
    else {
      submitProtect.setAttribute("disabled", "");
      throw new Error(`Le bouton ${inputDisamit} des CGU n'est pas coché`);
    }
  });
};  
// FIN DE LA VERIF

// CONTACT MODAL ==============================================
// =============== NEAH GAME =================== 2024 =========
// ============================================================
const clickContact = document.getElementById("contactButton");
const modalContact = document.getElementById("contact_modal");
const closer = document.getElementById("closecontact");
const close = document.querySelector(".close");

// OUVRIR =====================================================
function launchModal() {
  modalContact.innerHTML = formInject(injectArtistName);
  //formOC.reset();
  modalContact.classList.add("modal-content");
  modalContact.style.display = "block";
  modalContact.showPopover();
  console.log("Ouverture Contact Modal");
  try {
    onAirChange("first", "blur", stringRegEx);
    onAirChange("last", "blur", stringRegEx);
    onAirChange("email", "blur", emailRegEx);
    onAirChange("message", "blur", messageRegEx);
    /////
    //disamit(submitButton.id, "change");
 
  } catch (Error) {
    console.log("il y'a des erreurs" + Error.message);
  }

}

// CLOSE ESC ==================================================
closeEsc(modalContact);
// CLOSE CLICK ================================================
closeClick(modalContact, closer);
// ============================================================
// ================================= NEAH GAME ================
clickContact.addEventListener("click", launchModal);

// ========================= By Nepha =================2024====
// ============================================================