//============================================= OC-06 FiS!!EyE =======//
// INDEX APP =========================================================//
//==================================== By Neah =================2024==//

// SASS ===========================================================//
import '../../sass/home.scss';

import { getPhotographers } from '../utils/api';
import { photographerTemplate } from '../templates/photographer';
import { artistSection } from '../utils/domlinker';

getPhotographers().then(data => {

  data.forEach(item => {
    const article = photographerTemplate(item).getUserCardDOM()

    artistSection.appendChild(article)
  });

})
/*
// Version avec async/await et fonction fléchée
const displayPhotographers = async () => {
  try {
    const data = await getPhotographers();
    data.forEach(item => {
      const article = photographerTemplate(item).getUserCardDOM();
      artistSection.appendChild(article);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des photographes:", error);
  }
}
*/
// Appel de la fonction
// == > displayPhotographers();