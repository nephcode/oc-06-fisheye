//============================================= OC-06 FiS!!EyE =======//
// DOMLINKER =========================================================//
//==================================== By Neah =================2024==//

// VARIABLE PROGZ
export const formData = document.querySelectorAll(".formData");
export const submitButton = document.getElementById("FinalBtn");
export const selectSortList = document.getElementById("filterSelect");

// VARIABLE REGEX
export const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;
export const messageRegEx = /^[\s\S]{30,400}$/;

// VARIABLE FIELD FORM
export const verifList = [
  { id: "first", regex: stringRegEx },
  { id: "last", regex: stringRegEx },
  { id: "email", regex: emailRegEx },
  { id: "message", regex: messageRegEx },
];

// DISPLAY ARTIST
export const artistSection = document.getElementById('artistSection')
export const artistName = document.getElementById("ArtistName");
export const artistCity = document.getElementById("ArtistCity");
export const artistTagline = document.getElementById("ArtistTagline");
export const artistImage = document.getElementById("ArtistPortrait");
export const artistPrice = document.getElementById("ArtistPrice");
export const artistLikeCount = document.getElementById("likeCount");

// MEDIAS
export const mediaContainer = document.getElementById('carrousel')

// MODAL CONTACT
export const clickContact = document.getElementById("contactButton");
export const modalContact = document.getElementById("contact_modal");
export const closer = document.getElementById("closecontact");
export const close = document.querySelector(".close");
export const h2name = document.querySelector("#contact_modal header h2");
export const formTarget = document.getElementById("contactForm");

// LIGHTBOX
export const modalBodyFix = document.body;
export const lightbox_target = document.querySelectorAll(".article_media a");
export const lightbox_pop = document.getElementById("media");
export const imgLightbox = document.querySelector('#lightbox img')
export const videoLightbox = document.querySelector('#lightbox video')
export const titleLightbox = document.querySelector('#lightbox figcaption')
export const btnPrevLightbox = document.querySelector('.prev-image img')
export const btnNextLightbox = document.querySelector('.next-image img')

// SORT MEDIAS
export const selectSortMedias = document.getElementById('filterSelect')

//==================================== By Neah =================2024==//