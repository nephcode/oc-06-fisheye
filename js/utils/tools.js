//======= ∵ ƸӜƷ ∴ ============================================//
//======================= ∵ NƸAH ∴ ===========================//
//================================================ 2024 ======//

//= CAPTURE GET V1.0 =========================================//
export const idCapture = (source) => {
  const url = source;
  const params = new URLSearchParams(url.split("?")[1]);
  const id = params.get("id");
  return id;
};
// amélioration possible : récupérer le paramètre de l'url avec un nom
// faire une boucle pour récupérer tous les paramètres de l'url

//= TRI SELECTOR ============================================//
export const selectSort = (array, selector, target) => {
  const selectSortList = document.getElementById(selector);
  selectSortList.addEventListener("change", (event) => {
    const option = event.target.value;
    array.sort((a, b) => b.option - a.option).filter(
      (media) => media.photographerId == id_GET_ARTIST
    );  
    const testSort = document.getElementById(target);
    const testDiv = document.createElement("div");
    testDiv.id = "test";
    testSort.appendChild(testDiv);
    testDiv.innerHTML = option;
    // ca marche >> reste plus qu'a injecter le tri dans le DOM.
  });
}

// LIGHTBOX CLICK ============================================
export const lightboxClick = (target, listener) => {
  listener.forEach((element) => {
    element.addEventListener("click", () => {
      target.togglePopover();
      console.log("Lightbox Click");
    });
  });
};

// FERMER ESC ================================================
export const closeEsc = (target) => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      target.hidePopover();
      console.log("Fermeture ESC");
    }
  });
};
// FERMER CLICK ==============================================
export const closeClick = (target, listener) => {
  const cleanForm = target.firstElementChild;
  //console.log(cleanForm);
  listener.addEventListener("click", () => {
    target.hidePopover();
    //console.log("Fermeture BUTTON FORM");
  });
};
// TOGGLE POPOVER ============================================
export const popClick = (target, listener) => {
  listener.addEventListener("click", () => {
    target.togglePopover();
    console.log("Popover HIDE");
  });
};
// COUNTERLIKE ===================================================
export function counterLike(importMedia) {
  let likeCounterOut = 0;
  //---------------------//
  importMedia.forEach((arrayMedia) => {
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

//======= ∵ ƸӜƷ ∴ ============================================//
