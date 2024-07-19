//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//

// SASS ==============================================================//
import '../../sass/artist.scss';

// DOMLINKER =========================================================//
import {
  formData, submitButton, selectSortList,
  verifList,
  clickContact, modalContact, closer, h2name, close, formTarget,
  artistName, artistCity, artistTagline, artistImage, artistPrice, artistLikeCount,
  lightbox_target, lightbox_pop
}
from "../utils/domlinker";

// FORM ==============================================================//
import { formField, formFinish } from "../utils/form";
import { popoverModal } from "../utils/formfiller";

// STATE LIKE ========================================================//
//import { state } from "../factories/state";

// IMPORTS ===========================================================//
import {
  idCapture, closeEsc, popClick,
  closeClick, counterLike, lightboxClick,
  colorg, selectSort, userlike
} from "../utils/tools";

// FACTORY ===========================================================//
import { articleDisplay, likeCounterDisplay } from "../factories/display";

// ID FROM URL GET ---------------------------------------------------//
const id_GET_ARTIST = idCapture(window.location.href);
//colorg(id_GET_ARTIST, "yellow");
const response = await fetch("/data/photographers.json");
const data = await response.json();
const artist = data.photographers;
const medias = data.media;
const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);

// ID MEDIA -----------------------------------------------------------//
const FetchIDmedia = medias.filter(
  (media) => media.photographerId == id_GET_ARTIST
);
console.table(FetchIDmedia);

// DISPLAY ARTIST HEADER ---------------------------------------------//
FetchIDartist.forEach((arrayArtist) => {
  artistName.innerHTML = arrayArtist.name;
  artistCity.innerHTML = arrayArtist.city + ", " + arrayArtist.country;
  artistTagline.innerHTML = arrayArtist.tagline;
  artistImage.src = `/assets/photographers/${arrayArtist.portrait}`;
  artistPrice.innerHTML = arrayArtist.price + "€/Jour";
});
// DISPLAY ARTIST HEADER ----------------------------------------END--//

// DISPLAY COUNTER ---------------------------------------------------//
//counterLike(FetchIDmedia);
likeCounterDisplay(counterLike(FetchIDmedia), artistLikeCount);
localStorage.setItem('iCountGlobal', counterLike(FetchIDmedia));
let testLocalStorage = localStorage.getItem("iCountGlobal");
console.log("Local Storage : " + testLocalStorage);
localStorage.setItem("iCountGlobal", testLocalStorage++);
console.log("Local Storage UPDATE : " + testLocalStorage);

// DISPLAY MEDIA -----------------------------------------------------//
/* ICI EST LA BOUCLE D'AFFICHAGE DES CARDS ---------------------------*/
const mediaIndex = (cibleID, importMedia) => {
  //---------------------//
  //const forTwo = importMedia; 
  let article_media = "";
  importMedia.forEach((item) => {
    article_media += articleDisplay(item);
  });
  //---------------------//
  const cible = document.getElementById(cibleID);
  cible.innerHTML = article_media;
  //---------------------//
    importMedia.forEach((item) => {
      userlike(`article-${item.id}`);
  });
}
mediaIndex("carrousel", FetchIDmedia);
/* ICI EST LA BOUCLE D'AFFICHAGE DES CARDS ---------------------------*/
// DISPLAY MEDIA -----------------------------------------------END---//


// LIGHTBOX CLICK ============================================


//console.log(selectSort);
// DISPLAY LIKE COUNTER -------------------------------------//
//counterLike(FetchIDmedia);

// DISPLAY SORT ---------------------------------------------//
selectSort("filterSelect", FetchIDmedia, "carrousel");





// CONTACT MODAL ==============================================
// =============== NEAH GAME =================== 2024 =========
// ============================================================
/*
const clickContact = document.getElementById("contactButton");
const modalContact = document.getElementById("contact_modal");
const closer = document.getElementById("closecontact");
const close = document.querySelector(".close");
const h2name = document.querySelector("#contact_modal header h2");
const formTarget = document.getElementById("contactForm");
*/
h2name.innerHTML = "Contactez-moi " + FetchIDartist[0].name;
// OUVRIR =====================================================


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
