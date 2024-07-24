// =============== GAME öN ========= NEPHA CODE ===============
// IMPORT  ====================================================
// =============================================== 2023 =======
import { formField, formFinish } from "/js/utils/form.js";

// =============== GAME öN ========= NEPHA CODE ===============
// VARIABLES ==================================================
// =============================================== 2023 =======
const modal = document.querySelector(".bground");
const modalBtn = document.getElementById("contact_modal");
const formData = document.querySelectorAll(".formData");
// VARIABLE PROGZ
const cguDown = document.getElementById("checkboxcgu");
const btnSub = document.getElementById("FinalBtn");
const gameTournoi = 'input[name="location"]';
// VARIABLE REGEX
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;
const dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const tourRegEx = /^\d{1,4}$/;
// CLOSER
const formOC = document.getElementById("ocform");

// ============================================================
// CLOSE CROIX ================================================
// ============================================================
const close = document.querySelector(".close");
//const modal = document.querySelector(".bground");
close.addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementById("ocform").reset();
  formOC.innerHTML = formField;
  console.log("Fermeture Croix et Clean modale");
});

// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
/**
 * @param {string} inputOnAir
 * */
const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  const targetCgu = document.getElementById(cguDown.id);
  const targetMit = document.getElementById(btnSub.id);
  targetAir.addEventListener(listenerOnAir, (event) => {
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (inputValue && regRuleOnAir.test(inputValue)) {
      targetCgu.removeAttribute("disabled");

      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("data-error-visible", "false");
      fieldData.setAttribute(
        "data-error",
        `Votre saisie ${inputValue} est valide`
      );
      console.log(`L'input ${inputValue} est valide`);
      console.log("Active checkbox : " + cguDown.id);
    } else {
      fieldData.classList.remove("formDataOK");
      fieldData.setAttribute("data-error-visible", "true");
      fieldData.setAttribute(
        "data-error",
        `Votre saisie ${inputValue} n'est pas valide`
      );
      targetMit.setAttribute("disabled", "");
      targetCgu.checked = false;
      targetCgu.setAttribute("disabled", "");
      throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);

      //const btnSuppr = document.getElementById("FinalBtn");
      //const cguDown = document.getElementById("checkbokcgu");
      //btnSuppr.setAttribute("disabled", "");
      //const checkSuppr = document.getElementById("FinalBtn");
    }
  });
};

// ============================================================
// FONCTION RGPD =================== NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string } inputRgpd
 */
const rgpd = (inputRgpd, listenerRgpd) => {
  let elementInput = document.getElementById(inputRgpd);
  elementInput.addEventListener(listenerRgpd, (event) => {
    //console.log(elementInput);
    let retro = elementInput.checked;
    if (retro) {
      console.log("Droits RGDP : OUI \n" + retro);
      //console.log(retro);
    } else {
      console.log("Droits RGDP : NON \n" + retro);
      //console.log(retro);
      throw new Error(`Le bouton ${inputRgpd} des PUBs n'est pas coché`);
    }
  });
};

// ================= NEPHA CODE ===============================
// BOUCLE DE VERIF ============================================
// ============================= 2024 PATCH 😅 ================
const verifList = [
  { id: "first", regex: stringRegEx },
  { id: "last", regex: stringRegEx },
  { id: "email", regex: emailRegEx },
  { id: "birthdate", regex: dateRegEx },
  { id: "quantity", regex: tourRegEx },
];

const onSkud = (inputSkud, regRuleSkud) => {
  const targetSkud = document.getElementById(inputSkud);
  const targetCgu = document.getElementById(cguDown.id);
  const targetMit = document.getElementById(btnSub.id);
  const inputValue = targetSkud.value;

  console.log(targetSkud.value);
  const fieldData = targetSkud.parentElement;
  if (inputValue && regRuleSkud.test(inputValue)) {
    targetCgu.removeAttribute("disabled");
    fieldData.classList.add("formDataOK");
    fieldData.setAttribute("data-error-visible", "false");
    fieldData.setAttribute(
      "data-error",
      `Votre saisie ${inputValue} est valide`
    );
    console.log(`L'input ${inputValue} est valide`);
    console.log("Active checkbox : " + cguDown.id);
  } else {
    fieldData.classList.remove("formDataOK");
    fieldData.setAttribute("data-error-visible", "true");
    fieldData.setAttribute(
      "data-error",
      `Votre saisie ${inputValue} n'est pas valide`
    );
    targetMit.setAttribute("disabled", "");
    targetCgu.checked = false;
    targetCgu.setAttribute("disabled", "");
    throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);
  }
};



/// Peut-on nommer les item d'un tableau item[1] >> item[regex]

// ============================================================
// FONCTION DISAMIT ================ NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string } inputDisamit
 */
const disamit = (inputDisamit, targetDisamit, listenerDisamit) => {
  let elementInput = document.getElementById(inputDisamit);
  let submitProtect = document.getElementById(targetDisamit);

  let retro = elementInput.checked;
  elementInput.addEventListener(listenerDisamit, (event) => {
    retro = elementInput.checked;
    if (retro) {
      // BOUCLE PATCH VERIF DES CHAMPS
      verifList.forEach((item) => {
        onSkud(item.id, item.regex);
        //console.log(`Champ: ${item.id}, Expression régulière: ${item.regex}`);
      });
      // FIN DE LA VERIF
      console.log("Conditions générales acceptées : Oui");
      console.log(submitProtect);
      submitProtect.removeAttribute("disabled");
    } else {
      submitProtect.setAttribute("disabled", "");
      throw new Error(`Le bouton ${inputDisamit} des CGU n'est pas coché`);
    }
  });
};

// ============================================================
// FONCTION RATIOCHECK ============= NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string} inputRadioIn
 * @param {string} listenerRadio
 **/
const radioCheck = (inputRadioIn, listenerRadio) => {
  const inputRadio = document.querySelectorAll(inputRadioIn);
  let location = "";
  for (let i = 0; i < inputRadio.length; i++) {
    inputRadio[i].addEventListener(listenerRadio, (event) => {
      if (inputRadio[i].checked) {
        location = inputRadio[i].value;
        console.log("Tournoi sélectionné : " + location);
      } else {
        location = inputRadio[0].value;
        console.log("Tournoi par défaut : " + location);
      }
    });
  }
};

// RADIOCHECK END ================================ 2023 =======

// ============================================================
// MODAL ACTION ===============================================
// ============================================================
function launchModal() {
  formOC.reset();
  formOC.innerHTML = formField;
  modal.style.display = "block";
  console.log("Ouverture de la modale");

  try {
    onAirChange("first", "blur", stringRegEx);
    onAirChange("last", "blur", stringRegEx);
    onAirChange("email", "blur", emailRegEx);
    onAirChange("birthdate", "blur", dateRegEx);
    onAirChange("quantity", "blur", tourRegEx);
    /////
    disamit(cguDown.id, btnSub.id, "change");
    rgpd("checkboxads", "change");
    /////
    radioCheck(gameTournoi, "click");
  } catch (Error) {
    console.log("il y'a des erreurs" + Error.message);
  }
}

modalBtn.forEach((contact_button) => {
  contact_button.addEventListener("click", launchModal);
});

// =================== GAMe öN ============== ATHENA PRACTICE =
// OC FORM SUBMIT ================== NEPHA CODE ===============
// =============================================== 2023 =======

formOC.addEventListener("submit", (event) => {
  event.preventDefault();
  formOC.innerHTML = formFinish;
  //const closeValid = document.getElementById("clozerClean");
  console.log("Inscription OK");
  // ============================================================
  // CLOSE BUTTON ===============================================
  // ============================================================
  const closeFinal = document.getElementById("BtnInscriptionClozer");

  closeFinal.addEventListener("click", () => {
    modal.style.display = "none";
    formOC.reset();
    formOC.innerHTML = formField;
    console.log("Fermeture Final et Clean modale");
  });
});
// END =============== GAMe öN ================================
