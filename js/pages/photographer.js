//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//

// SASS ==============================================================//
import '../../sass/artist.scss';

// DOMLINKER =========================================================//
import {
  clickContact, modalContact, h2name, formTarget,
  artistName, artistCity, artistTagline, artistImage, artistPrice, artistLikeCount,
  lightbox_pop, imgLightbox, videoLightbox, titleLightbox, btnPrevLightbox, btnNextLightbox,
  mediaContainer, selectSortMedias
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
//import { articleDisplay, likeCounterDisplay } from "../factories/display";

import { likeCounterDisplay } from "../factories/display";

import { getPhotographerById, getMediasByPhotographerId } from '../utils/api';

import { mediaTemplate } from '../templates/media';
import { photographerTemplate } from '../templates/photographer';
import { state } from '../factories/state';

let slideIndex = 0 // current position index of lightbox media
const url = new URL(window.location.href)
const id = parseInt(url.searchParams.get('id'))
console.log('id:', id)

const updateMedias = data => {
  mediaContainer.innerHTML = ''


  // Display card for each media
  data.forEach(item => {
    const mediaModel = mediaTemplate(item)
    const article = mediaModel.getMediaCardDOM()
    mediaContainer.appendChild(article)

    userlike(`article-${item.id}`)

    // Display lightbox
    article.addEventListener('click', () => {
      lightbox_pop.togglePopover()

      // set current slide index
      slideIndex = state.medias.indexOf(item)

      updateSlide()
    })

  })
}

getMediasByPhotographerId(id).then(data => {

  state.medias = data

  console.table(state.medias)

  // Display medias
  updateMedias(data)

  // DISPLAY COUNTER ---------------------------------------------------//
  likeCounterDisplay(counterLike(data), artistLikeCount);
  localStorage.setItem('iCountGlobal', counterLike(data));

})

getPhotographerById(id).then(data => {
  console.table(data)

  h2name.innerHTML = "Contactez-moi " + data.name;

  // DISPLAY ARTIST HEADER ---------------------------------------------//
  photographerTemplate(data).setProfileDOM()
})


//// LIGHTBOX /////

const updateSlide = () => {
  const data = state.medias[slideIndex]
  const source = `/assets/artist-assets/${data.photographerId}/${data.image || data.video}`
  imgLightbox.style.display = data.image ? 'block' : 'none'
  imgLightbox.src = source
  videoLightbox.style.display = data.image ? 'none' : 'block'
  videoLightbox.src = source
  videoLightbox.style.width = "100%"
  videoLightbox.controls = true
  titleLightbox.textContent = data.title
}

const navigate = sens => {
  if (sens === -1 && slideIndex === 0) {
    slideIndex = state.medias.length - 1
  } else if (sens === 1 && slideIndex === (state.medias.length - 1)) {
    slideIndex = 0
  } else {
    slideIndex = slideIndex + sens
  }

  updateSlide()
}

btnPrevLightbox.addEventListener('click', () => navigate(-1))
btnNextLightbox.addEventListener('click', () => navigate(1))


///// SORT MEDIAS //////

export const sortMedia = (data, sortBy) => {
  switch (sortBy) {
    case 'likes':
      return data.sort((a, b) => b.likes - a.likes)
    case 'date':
      return data.sort((a, b) => new Date(b.date) - new Date(a.date))
    case 'title':
      return data.sort((a, b) => a.title > b.title)
    default:
      return data
  }
}

selectSortMedias.addEventListener('change', () => {
  const sortBy = selectSortMedias.value
  state.medias = sortMedia(state.medias, sortBy)
  updateMedias(state.medias)
})


// // ID FROM URL GET ---------------------------------------------------//
// const id_GET_ARTIST = idCapture(window.location.href);
// //colorg(id_GET_ARTIST, "yellow");
// const response = await fetch("/data/photographers.json");
// const data = await response.json();
// const artist = data.photographers;
// const medias = data.media;
// const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);

// // ID MEDIA -----------------------------------------------------------//
// const FetchIDmedia = medias.filter(
//   (media) => media.photographerId == id_GET_ARTIST
// );
// console.table(FetchIDmedia);
// // ID MEDIA ----------------------------------------------------END---//

// // DISPLAY ARTIST HEADER ---------------------------------------------//
// FetchIDartist.forEach((arrayArtist) => {
//   artistName.innerHTML = arrayArtist.name;
//   artistCity.innerHTML = arrayArtist.city + ", " + arrayArtist.country;
//   artistTagline.innerHTML = arrayArtist.tagline;
//   artistImage.src = `/assets/photographers/${arrayArtist.portrait}`;
//   artistPrice.innerHTML = arrayArtist.price + "€/Jour";
// });
// // DISPLAY ARTIST HEADER ---------------------------------------END---//

// // DISPLAY COUNTER ---------------------------------------------------//
// //counterLike(FetchIDmedia);
// likeCounterDisplay(counterLike(FetchIDmedia), artistLikeCount);
// localStorage.setItem('iCountGlobal', counterLike(FetchIDmedia));
// // DISPLAY COUNTER ---------------------------------------------END---//



// // DISPLAY MEDIA -----------------------------------------------------//
// /* ICI EST LA BOUCLE D'AFFICHAGE DES CARDS ---------------------------*/
// const mediaIndex = (cibleID, importMedia) => {
//   //---------------------//
//   let article_media = "";
//   importMedia.forEach((item) => {
//     article_media += articleDisplay(item);
//   });
//   //---------------------//
//   const cible = document.getElementById(cibleID);
//   cible.innerHTML = article_media;
//   //---------------------//
//   importMedia.forEach((item) => {
//     userlike(`article-${item.id}`);
//   });
// }
// mediaIndex("carrousel", FetchIDmedia);
// /* ICI EST LA BOUCLE D'AFFICHAGE DES CARDS ---------------------------*/
// // DISPLAY MEDIA -----------------------------------------------END---//


// // LIGHTBOX CLICK ============================================


// //console.log(selectSort);
// // DISPLAY LIKE COUNTER -------------------------------------//
// //counterLike(FetchIDmedia);

// // DISPLAY SORT ---------------------------------------------//
// selectSort("filterSelect", FetchIDmedia, "carrousel", mediaIndex("carrousel", FetchIDmedia));





// // CONTACT MODAL ==============================================
// // =============== NEAH GAME =================== 2024 =========
// // ============================================================
// /*
// const clickContact = document.getElementById("contactButton");
// const modalContact = document.getElementById("contact_modal");
// const closer = document.getElementById("closecontact");
// const close = document.querySelector(".close");
// const h2name = document.querySelector("#contact_modal header h2");
// const formTarget = document.getElementById("contactForm");
// */
// h2name.innerHTML = "Contactez-moi " + FetchIDartist[0].name;
// // OUVRIR =====================================================


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
