//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//
//import { dataAccess } from "../factories/data.js";
import { idCapture  } from "/js/utils/tools.js";
import { contactForm, finishForm } from "/js/utils/form.js";



// ID FROM URL GET ----------------------------------------------------//
//console.log("====================================");
//console.log("=============== GET ================");
//console.log("====================================");

const url = window.location.href;
const id_GET_ARTIST = idCapture(url);

console.log(id_GET_ARTIST);

const response = await fetch("/data/photographers.json");
const data = await response.json();
const artist = data.photographers;
const medias = data.media;

const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);
//console.log(FetchIDartist);

const FetchIDmedia = medias.filter(
  (media) => media.photographerId == id_GET_ARTIST
);
//console.log(FetchIDmedia);

const formData = document.querySelectorAll(".formData");
// VARIABLE PROGZ
const cguDown = document.getElementById("checkboxcgu");
const btnSub = document.getElementById("FinalBtn");
const gameTournoi = 'input[name="location"]';
// VARIABLE REGEX
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;


// DISPLAY ARTIST  ---------------------------------------------------//
//console.log("====================================");
//console.log("============== ARTIST ==============");
//console.log("====================================");

FetchIDartist.forEach((arrayArtist) => {
  const artistName = document.getElementById("ArtistName");
  //console.log(artistName);
  artistName.innerHTML = arrayArtist.name;
  

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

//export let injectArtistName = arrayArtist.name;


// DISPLAY MEDIA -----------------------------------------------------//
//console.log("====================================");
//console.log("============== MEDIA ===============");
//console.log("====================================");

function mediaIndex(importMedia) {
  //let article_media = `<section id="artistSection" class="photographer_section">`;
  let article_media = "";
  //---------------------//
  importMedia.forEach((arrayMedia) => {
   //console.log(mediaImage);
   // console.log("ID: " + arrayMedia.id);
   // console.log("PRICE: " + arrayMedia.price);
   // console.log("IMAGE: " + arrayMedia.image);
   // console.log("VIDEO: " + arrayMedia.video);
   // console.log("TITLE: " + arrayMedia.title);
   // console.log("DATE: " + arrayMedia.date);
   // console.log("LIKES: " + arrayMedia.likes);
    //---------------------//
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
//console.log("====================================");
//console.log("============== COUNT ===============");
//console.log("====================================");

function CounterLike(importMedia) {
  let likeCounterOut = 0;
  //---------------------//
  importMedia.forEach((arrayMedia) => {
    //console.log("ID: " + arrayMedia.id);
    //console.log("LIKES: " + arrayMedia.likes);

    likeCounterOut += parseInt(arrayMedia.likes);
  });
  //console.log(likeCounterOut);
  //---------------------//
  const artistLikeCount = document.getElementById("likeCount");
  //console.log(artistLikeCount.textContent);
  const likeCounterDisplay = `<span class="heart-btn">${likeCounterOut}
        <i class="fas fa-heart icone__Coeur"></i></span>`;
  artistLikeCount.innerHTML = likeCounterDisplay;

  //console.log(likeCounterDisplay);
}
CounterLike(FetchIDmedia);

// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
/**
 * @param {string} inputOnAir
 * */
const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  //const targetCgu = document.getElementById(cguDown.id);
  //const targetMit = document.getElementById(btnSub.id);
  targetAir.addEventListener(listenerOnAir, (event) => {
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (inputValue && regRuleOnAir.test(inputValue)) {
      //targetCgu.removeAttribute("disabled");

      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("aria-invalid", "false");
      fieldData.setAttribute(
        "aria-errormessage",
        `Votre saisie ${inputValue} est valide`
      );
      console.log(`L'input ${inputValue} est valide`);
      //console.log("Active checkbox : " + cguDown.id);
    } else {
      fieldData.classList.remove("formDataOK");
      fieldData.setAttribute("aria-invalid", "true");
      fieldData.setAttribute(
        "aria-errormessage",
        `Votre saisie ${inputValue} n'est pas valide`
      );
      //targetMit.setAttribute("disabled", "");
      //targetCgu.checked = false;
      //targetCgu.setAttribute("disabled", "");
      throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);

      //const btnSuppr = document.getElementById("FinalBtn");
      //const cguDown = document.getElementById("checkbokcgu");
      //btnSuppr.setAttribute("disabled", "");
      //const checkSuppr = document.getElementById("FinalBtn");
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

// OUVRIR =====================================================
function launchModal() {
  modalContact.innerHTML = contactForm;
  //contactForm.reset();
  modalContact.classList.add("modal-content");
  modalContact.style.display = "block";
  modalContact.showPopover();
  console.log("Ouverture Contact Modal");

  try {
    onAirChange("first", "blur", stringRegEx);
    onAirChange("last", "blur", stringRegEx);
    onAirChange("email", "blur", emailRegEx);
    //onAirChange("birthdate", "blur", dateRegEx);
    //onAirChange("quantity", "blur", tourRegEx);
    /////
    //disamit(cguDown.id, btnSub.id, "change");
    //rgpd("checkboxads", "change");
    /////
    //radioCheck(gameTournoi, "click");
  } catch (Error) {
    console.log("il y'a des erreurs" + Error.message);
  }

}
// FERMER =====================================================
console.log(close);
closer.addEventListener("click", () => {
  preventDefault();
  modalContact.style.display = "none";
  
  modalContact.hidePopover();
  //document.getElementById("contactForm").reset();
  //contactForm.innerHTML = formField;
  console.log("Fermeture Croix et Clean modale");
});



// FERMER ESC ================================================
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    modalContact.style.display = "none";
    modalContact.togglePopover();
    console.log(modalContact);
    console.log("Fermeture ESC");
  }
});


// ============================================================
// ================================= NEAH GAME ================
clickContact.addEventListener("click", launchModal);

//==================================== By Nepha =================2024==//
