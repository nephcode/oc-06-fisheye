// =================================== FISH EYE ===============
// FORM FIELD =================================================
// ============================= NEPHA CODE ==== 2024 =========
let txtBtn = "Fermer";
let classChg = "btn-submit";
let idButton = "BtnInscriptionClozer";

// ================================= NEPHA CODE ===============
// FORM FINISH ================================================
// ============================================= 2024 =========

export const formFinish = `<form 
      name="reserve"
      action="/index.html"
      method="get" 
      id="contactForm" 
      novalidate>
      <div class="form-data squareNeph">Merci pour <br/>votre message</div>
      <div>
      <button 
        id="BtnInscriptionClozer" 
        class="btn-submit"
        type="button">Fermer</button>
        </div>
    </form>`;

// ================================= NEPHA CODE ===============
// FORM FIELD =================================================
// ============================================= 2024 =========

export const formField = `<form
  id="ocform"
  name="reserve"
  action="/index.html"
  method="get" 
  id="contactForm"
  novalidate>
  <div
    class="formData"
    aria-invalid="false" 
    aria-errormessage="Champ Prénom invalide">                
      <label for="first">Prénom</label>
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
    <label for="last">Nom</label>
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
    <label for="email">E-mail</label>
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
    <label for="message">Votre message</label>
    <textarea
    id="message"
    name="message" 
    placeholder="Votre message ici"
    required></textarea>
  </div>
  <div>
  <button 
  id="FinalBtn" 
  class="btn-submit"
  type="submit"
  class="button"
  disabled>Envoyer</button>
  </div>
  </form>`;
 

// ================================= NEAH GAME ================
