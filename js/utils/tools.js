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
// LIKE ======================================================//

export const userlike = (likeTarget) => {
  console.log(likeTarget);
  // Cibler le media
  const domMedia = document.getElementById(likeTarget);
  if (domMedia === null) {
    console.error(`Element with id '${likeTarget}' does not exist.`);
    return;
  }
  console.dir(domMedia);
  console.dir(domMedia.id);
  //const idMedia = parseInt(likeTarget.match(/media-(\d+)/)[1], 10);
  const idMedia = parseInt(domMedia.id.match(/media-(\d+)/)[1], 10);
  //const idMedia = parseInt(likeTarget, 10);
  console.log(`line 138 ${idMedia}`);
  
      
  // Cibler le coeur et le compteur 
  const heartElement = domMedia.querySelector('[data-idheart]');
  const countElement = domMedia.querySelector('[data-idmediacount]');
  //const count = parseInt(domMedia.querySelector('[data-count]'), 10);
  console.dir(heartElement);
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





//======= ∵ ƸӜƷ ∴ ============================================//
