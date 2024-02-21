//======= ∵ ƸӜƷ ∴ ============================================//
//======================= ∵ NƸAH ∴ ===========================//
//================================================ 2024 ======//


//= CAPTURE GET V1.0 =========================================//
export const idCapture = (source) => {
    const url = source;
    const params = new URLSearchParams(url.split('?')[1]);
    const id = params.get('id'); 
    return id;
  }
  // amélioration possible : récupérer le paramètre de l'url avec un nom
  // faire une boucle pour récupérer tous les paramètres de l'url

// FERMER ESC ================================================
export const closeEsc = (target) => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      //target.style.display = "none";
      target.togglePopover();
      console.log(target);
      console.log("Fermeture ESC");
    }
  });
}

// FERMER CLICK ==============================================
export const closeClick = (target, listener ) => {
  console.log(listener);  
  listener.addEventListener("click", () => {
    preventDefault();
    target.hidePopover();
    //document.getElementById("contactForm").reset();
    //contactForm.innerHTML = formField;
    console.log("Fermeture Croix et Clean modale"); 
  });
}
// TOGGLE POPOVER ============================================
export const popClick = (target, listener ) => {
  console.log(listener);  
  listener.addEventListener("click", () => {
    target.togglePopover();
    //const formOC = document.getElementById("ocform");
    //formOC.reset();
    //contactForm.innerHTML = formField;
    console.log("Popover HIDE"); 
  });
}
// COUNTERLIKE ===================================================
export function counterLike(importMedia) {
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

//======= ∵ ƸӜƷ ∴ ============================================//