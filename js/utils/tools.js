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


// DISPLAY TRI -------------------------------------------------------//
export const selectSort = (selectorId, source, carrouselId, callback) => {
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

/*
//= TRI SELECTOR ============================================//
export const selectSort = (array, selector, target) => {
  const selectSortList = document.getElementById(selector);
  selectSortList.addEventListener("change", (event) => {
    const option = event.target.value;
    return array.sort((a, b) => b[option] - a[option]).filter(
      (media) => media.photographerId == id_GET_ARTIST
    );  
    
    // ca marche >> reste plus qu'a injecter le tri dans le DOM.
  });
  /*
  const testSort = document.getElementById(target);
    const testDiv = document.createElement("div");
    testDiv.id = "test";
    testSort.appendChild(testDiv);
    testDiv.innerHTML = option;
    
}
*/
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
    colorg("Popover TOGGLE", "cyan");
  });
};
// COUNTERLIKE ===================================================
export const counterLike = (importMedia) => {
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

// COUNTERLIKE ===================================================
export const counterBack = (LikeMedia, LikeUser) => {
  const total = LikeMedia+LikeUser;

  return total;
}

// COLORG ====================================================//
export const colorg = (argument, color) =>{
  const style = `color:${color};font-weight:bold`;
  console.log(`%c%s${argument}`,`${style}`); 
}


//======= ∵ ƸӜƷ ∴ ============================================//
