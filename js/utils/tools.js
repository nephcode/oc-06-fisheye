//======= ∵ ƸӜƷ ∴ ============================================//
//======================= ∵ NƸAH ∴  ==========================//
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


  //======= ∵ ƸӜƷ ∴ ============================================//