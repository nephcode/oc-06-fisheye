// =================================== FISH EYE ===============
// FORM FIELD =================================================
// ============================= NEPHA CODE ==== 2024 =========
let txtBtn = "Fermer";
let classChg = "btn-submit";
let idButton = "BtnInscriptionClozer";
export const formField = `<form
              name="reserve"
              action="/index.html"
              method="get" id="contactForm" novalidate>
              <div
                class="formData"
                aria-invalid="false" 
                data-error="Champ Prénom invalide"
              >                
                <label>Prénom</label><br>
                <input
                  class="text-control"
                  type="text"
                  id="first"
                  name="first"
                ><br>
              </div>
              <div
                class="formData"
                aria-invalid="false" 
                data-error="Champ Nom invalide"
              >
                <label>Nom</label><br>
                <input
                  class="text-control"
                  type="text"
                  id="last"
                  name="last"
                ><br>
              </div>
              <div
                class="formData" 
                aria-invalid="false" 
                data-error="Champ Email invalide"
              >
                <label>E-mail</label><br>
                <input
                  class="text-control"
                  type="email"
                  id="email"
                  name="email"
                ><br>
              </div>
              <div
                class="formData" data-error="false">
                <input
                  class="checkbox-input"
                  type="checkbox"
                  id="checkboxcgu" 
                  required                 
                >
                <label class="checkbox2-label" for="checkboxcgu" >
                  <span class="checkbox-icon"></span>
                  J'ai lu et accepté les conditions d'utilisation.
                </label>
              
              </div>
              <button id="FinalBtn" class="btn-submit"
              type="submit"
              class="button" disabled>Envoyer</button>
            </form>

`;

// ================================= NEPHA CODE ===============
// FORM FINISH ================================================
// ============================================= 2024 =========

export const formFinish = `<form 
      name="reserve"
      action="/index.html"
      method="get" 
      id="contactForm" 
      novalidate
    >
      <div class="form-data squareNeph">Merci pour <br/>votre inscription</div>
      <bouton 
        id="${idButton}" 
        class="${classChg}"
        type="submit"
        >${txtBtn}
      </bouton>
    </form>
     `;
