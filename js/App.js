//============================================= OC-06 FiS!!EyE =======//
// GLOBAL APP ========================================================//
//==================================== By Neah =================2024==//

const photographer = fetch(/assets/data/photographers.json);
try {
    const response = await fetch('/assets/data/photographers.json');
    const photographer = await response.json();
    // Utilisez l'objet photographer ici
    console.log(photographer);


    
} catch (error) {
    // Gérez les erreurs
    console.error(error);
}


