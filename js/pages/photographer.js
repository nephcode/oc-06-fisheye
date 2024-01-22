//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//


let url = window.location.href; // Obtient l'URL de la page actuelle

// Crée un objet URLSearchParams à partir de l'URL
let params = new URLSearchParams(url.split('?')[1]);

// Récupère la valeur de 'id'
let id = params.get('id'); 

console.log(id); // Affichera '1234'
