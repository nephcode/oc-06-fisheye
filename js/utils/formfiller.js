// ================= NEPHA CODE ========== ADAPT FOR 06 =======
// BOUCLE DE VERIF ============================================
// ============================= 2024 PATCH 😅 ================
import { verifList, emailRegEx, stringRegEx, messageRegEx } from "./domlinker";
import { formField } from "./form";

export const displayModal = () => {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

export const closeModal = () => {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


// ================= NEPHA CODE ========== ADAPT FOR 06 =======
// BOUCLE DE VERIF ============================================
// ============================= 2024 PATCH 😅 ================
export const onSkud = (inputSkud, regRuleSkud) => {
    const targetSkud = document.getElementById(inputSkud);
    const targetMit = document.getElementById("FinalBtn");
    const inputValue = targetSkud.value;
    //console.log("targetMit " + targetMit.id);
    //console.log("targetSkud " + targetSkud.value);
    const fieldData = targetSkud.parentElement;
    if (inputValue && regRuleSkud.test(inputValue)) {
      targetMit.removeAttribute("disabled");
      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("aria-invalid", "false");
      fieldData.setAttribute("aria-errormessage", `Valide`);
      //console.log(`L'input ${inputValue} est valide`);
    } else {
      fieldData.classList.remove("formDataOK");
      fieldData.setAttribute("aria-invalid", "true");
      fieldData.setAttribute(
        "aria-errormessage",
        `Votre saisie ${inputValue} n'est pas valide`
      );
      targetMit.setAttribute("disabled", "");
  
      throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);
    }
  };




// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
/**
 * @param {string} inputOnAir
 * */
export const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  const targetMit = document.getElementById("FinalBtn");
  targetAir.addEventListener(listenerOnAir, (event) => {
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (inputValue && regRuleOnAir.test(inputValue)) {
      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("aria-invalid", "false");
      fieldData.setAttribute("aria-errormessage", `Votre saisie est valide`);
      //console.log(`L'input ${inputValue} est valide`);
      verifList
        .slice()
        .reverse()
        .forEach((item) => {
          onSkud(item.id, item.regex);
          if (!onSkud) {
            targetMit.setAttribute("disabled", "");
          } else {
            targetMit.removeAttribute("disabled");
          }
        });
    } else {
      fieldData.classList.remove("formDataOK");
      fieldData.setAttribute("aria-invalid", "true");
      fieldData.setAttribute(
        "aria-errormessage",
        `Votre saisie n'est pas valide`
      );
      targetMit.setAttribute("disabled", "");
      //throw new Error(`L'élément ${inputOnAir} ${inputValue} spécifié n'est pas valide`);
    }
  });
};


export const popoverModal = (target) => {
    //console.log(target);
    target.innerHTML = formField;
    target.reset();
    try {
      onAirChange("first", "blur", stringRegEx);
      onAirChange("last", "blur", stringRegEx);
      onAirChange("email", "blur", emailRegEx);
      onAirChange("message", "blur", messageRegEx);
    } catch (Error) {
      console.log("il y'a des erreurs" + Error.message);
    }
  };