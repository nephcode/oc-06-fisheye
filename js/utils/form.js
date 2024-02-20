//import { injectArtistName } from '../pages/photographer.js';
// =================================== FISH EYE ===============
// FORM FIELD =================================================
// ============================= NEPHA CODE ==== 2024 =========


let txtBtn = "Fermer";
let classChg = "btn-submit";
let idButton = "BtnInscriptionClozer";


let injectArtistName = "artistNames";

export const contactForm = `
<div class="modal">
<header>  
  <h2>Contactez-moi ${injectArtistName} </h2>
  <img src="/assets/icons/close.svg" alt="fermer la fenetre" id="closecontact" class="close">
</header>
<form
  id="ocform"
  name="reserve"
  action="/index.html"
  method="get" id="contactForm" novalidate>
  <div
    class="formData"
    aria-invalid="false" 
    aria-errormessage="Champ Prénom invalide">                
      <label>Prénom</label>
      <input
        class="text-control"
        type="text"
        id="first"
        name="first"
        required>
  </div>
  <div
  class="formData"
  aria-invalid="false" 
  aria-errormessage="Champ Nom invalide">
    <label>Nom</label>
    <input
    class="text-control"
    type="text"
    id="last"
    name="last"
    required>
  </div>
  <div
  class="formData" 
  aria-invalid="false" 
  aria-errormessage="Champ Email invalide">
    <label>E-mail</label>
    <input
    class="text-control"
    type="email"
    id="email"
    name="email"
    required>
  </div>
  <div
  class="formData" 
  aria-invalid="false" 
  aria-errormessage="Champ Message vide">
    <label>Votre message</label>
    <textarea
    id="message"
    name="message" 
    placeholder="Votre message ici"
    required></textarea>
  </div>
  <!--<div
  class="formData" 
  aria-errormessage="false">
    <input
    class="checkbox-input"
    type="checkbox"
    id="checkboxcgu" 
    required>
    <label class="checkbox2-label" for="checkboxcgu">
    <span class="checkbox-icon"></span>
    J'ai lu et accepté les conditions d'utilisation.
    </label>
  </div>-->
  <div>
  <button 
  id="FinalBtn" 
  class="btn-submit"
  type="submit"
  class="button"
  disabled>Envoyer</button>
  </div>
  </form>
  </div>`;

// ================================= NEPHA CODE ===============
// FORM FINISH ================================================
// ============================================= 2024 =========

export const finishForm = `<form 
      name="reserve"
      action="/index.html"
      method="get" 
      id="contactForm" 
      novalidate>
      <div class="form-data squareNeph">Merci pour <br/>votre inscription</div>
      <bouton 
        id="${idButton}" 
        class="${classChg}"
        type="submit">${txtBtn}</bouton>
    </form>`;

// ================================= NEAH GAME ================
