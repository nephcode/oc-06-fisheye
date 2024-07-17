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
  artistName, artistCity, artistTagline, artistImage, artistPrice
}
from "../utils/domlinker";

// FORM ==============================================================//
import { formField, formFinish } from "/js/utils/form";

// STATE LIKE ========================================================//
import { state } from "../factories/state";

// IMPORTS ===========================================================//
import {
  idCapture, closeEsc, popClick,
  closeClick, counterLike, lightboxClick,
  colorg, selectSort, userlike
} from "../utils/tools";

// FACTORY ===========================================================//
import { articleDisplay } from "../factories/display";

// ID FROM URL GET ---------------------------------------------------//
const id_GET_ARTIST = idCapture(window.location.href);
colorg(id_GET_ARTIST, "yellow");
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

// LOCAL STORAGE ------------------------------------------------------//
//et iCount = localStorage.getItem('iCount') ? parseInt(localStorage.getItem('iCount'), 10) : 0;
//console.log(iCount);


// LIKE MEDIA ---------------------------------------------------------//
console.table(state)
// Callback en dernier lieu 
/*
const userlike = (likeTarget) => {
  console.log(likeTarget);
  // Cibler le media
  const domMedia = document.getElementById(likeTarget);
  const idMedia = parseInt(domMedia.id.match(/media-(\d+)/)[1], 10);
  console.log(`${idMedia}`);
  console.log(`${domMedia}`);
      
  // Cibler le coeur et le compteur 
  const heartElement = domMedia.querySelector('[data-idheart]');
  const countElement = domMedia.querySelector('[data-idmediacount]');
  //const count = parseInt(domMedia.querySelector('[data-count]'), 10);
  console.log(heartElement);
  //console.log(count);
  //
  const heartTarget = heartElement.dataset.idheart;
  let iCount = parseInt(countElement.dataset.count, 10);

  colorg(`${iCount}`, "blue");
  let count = iCount;
  const id = idMedia;
  heartElement.addEventListener("click", () => {
      // Add id + Calculer compteur media + compteur artist
      const index = state.userlike.state_idMedia.indexOf(id);
      if (index > -1) {
        // Si id est déjà dans le tableau, le retirer
        state.userlike.state_idMedia.splice(index, 1);
        count--; // Je retire mon like
        countElement.setAttribute('data-count', count);
        countElement.textContent = count;
        heartElement.classList.remove("fas");
        heartElement.classList.add("fa-classic");
        colorg(`Retiré un like : ${icount}`, "Red");
        

      } else {
        // Sinon, l'ajouter
        state.userlike.state_idMedia.push(id);
        count++;
        heartElement.classList.remove("fa-classic");
        heartElement.classList.add("fas");
        countElement.setAttribute('data-count', count);
        countElement.textContent = count;
        colorg(`Ajouté  un like : ${count}`, "#c0392b");
        colorg(`Ajouté : ${id}`, "Lime");
      }
      colorg(`État mis à jour : ${state.userlike.state_idMedia}`, "Gold");
      //localStorage.setItem
      localStorage.setItem('iCount', count);
      return count;
  });
  colorg(`Ajout de like ${iCount} au LocalStorage`, "green");
  colorg (`Ciblage du coeur ${heartTarget}`, "pink");
  
}
*/
// DISPLAY ARTIST HEADER ---------------------------------------------//
FetchIDartist.forEach((arrayArtist) => {
  artistName.innerHTML = arrayArtist.name;
  artistCity.innerHTML = arrayArtist.city + ", " + arrayArtist.country;
  artistTagline.innerHTML = arrayArtist.tagline;
  artistImage.src = `/assets/photographers/${arrayArtist.portrait}`;
  artistPrice.innerHTML = arrayArtist.price + "€/Jour";
});
// DISPLAY ARTIST HEADER ----------------------------------------END--//

/* ICI EST LA BOUCLE D'AFFICHAGE DES CARDS */
// DISPLAY MEDIA -----------------------------------------------------//
const mediaIndex = (cibleID, importMedia) => {
  //---------------------//
  const forTwo = importMedia; 
  let article_media =+ "";
  importMedia.forEach((item) => {
    //console.log(item);
    articleDisplay(item);
    console.log(articleDisplay(item));
    let article_media =+ articleDisplay(item);
    return article_media;
  });
  //---------------------//
  const cible = document.getElementById(cibleID);
  cible.innerHTML = article_media;
  //---------------------//
  /*
  forTwo.forEach((item) => {
      userlike(`article-${item.id}`);
  });
  */
  
}
mediaIndex("carrousel", FetchIDmedia);
/* ICI EST LA BOUCLE D'AFFICHAGE DES CARDS */

// TEST SUR LA BOUCLE //
//colorg(`Ciblage MEDIA TEST ${FetchIDmedia[0].id}`, "violet");
//userlike("media-623534343");
//userlike(`media-${FetchIDmedia[0].id}`);


// LIGHTBOX CLICK ============================================
const lightbox_target = document.querySelectorAll(".article_media a");
const lightbox_pop = document.getElementById("media");

//console.log(selectSort);
// DISPLAY LIKE COUNTER -------------------------------------//
counterLike(FetchIDmedia);

// DISPLAY SORT ---------------------------------------------//
selectSort("filterSelect", FetchIDmedia, "carrousel", () => {
  lightboxClick(lightbox_pop, lightbox_target);
});

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
