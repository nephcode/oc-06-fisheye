//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//

// SASS ==============================================================//
import '../../sass/artist.scss';

// DOMLINKER =========================================================//
import {
  clickContact, modalContact, h2name, formTarget, artistLikeCount, closer,
  lightbox_pop, imgLightbox, videoLightbox, titleLightbox, btnPrevLightbox, btnNextLightbox, btnCloseLightbox,
  mediaContainer, selectSortMedias
}
  from "../utils/domlinker";

// FORM ==============================================================//
import { formField, formFinish } from "../utils/form";
import { popoverModal } from "../utils/formfiller";

// IMPORTS ===========================================================//
import {
  idCapture, closeEsc, popClick,
  closeClick, counterLike, lightboxClick,
  colorg, selectSort, userlike
} from "../utils/tools";

// FACTORY ===========================================================//
import { likeCounterDisplay } from "../factories/display";
import { getPhotographerById, getMediasByPhotographerId } from '../utils/api';
import { mediaTemplate } from '../templates/media';
import { photographerTemplate } from '../templates/photographer';
import { state } from '../factories/state';

// ID TARGET ========================================================//
let slideIndex = 0 // current position index of lightbox media
const url = new URL(window.location.href)
const id = parseInt(url.searchParams.get('id'))
console.log('id:', id)
const id_GET_ARTIST = id;
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
      btnCloseLightbox.focus()


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


// LIGHTBOX NAVIGATION  =============================================//

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


// SORT MEDIA ======

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


// KEYS NAV =====================================================
const keyPress = (event) => {
  const key = event.key || event.keyCode

  if (key === 'ArrowLeft' || key === 37) {
    navigate(-1)
  }
  if (key === 'ArrowRight' || key === 39) {
    navigate(1)
  }

  // press Escape ------------------------------------- //
  if (key === 'Escape' || key === 'Esc' || key === 27) {
    lightbox_pop.togglePopover()
    modalContact.togglePopover()
  }

  if (key === 'Enter') {
    console.log('enter pressed', event.target)

    if (event.target === btnCloseLightbox) {
      lightbox_pop.togglePopover()
    }

    if (event.target === closer) {
      modalContact.togglePopover()
    }

    if (event.target === btnPrevLightbox) {
      navigate(-1)
    }

    if (event.target === btnNextLightbox) {
      navigate(1)
    }

    if (event.target.classList.contains('icone__Coeur')) {
      event.stopPropagation()
      event.preventDefault()
      event.target.click()
    }

    if (event.target.classList.contains('article_media')) {
      event.target.click()
    }

  }
}

document.addEventListener('keydown', keyPress)


// CONTACT MODAL ==============================================
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
