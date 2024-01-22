//============================================= OC-06 FiS!!EyE =======//
// GLOBAL APP ========================================================//
//==================================== By Neah =================2024==//

const url = await fetch("/data/photographers.json");
const data = await url.json();
const photographers = data.photographers;
console.log(photographers);

//const artist = photographers[0];
//console.log(artist);
function artistIndex(artist) {
  let article_artist = `<section id="artistSection" class="photographer_section">`;
  for (let i = 0; i < photographers.length; i++) {
    const artist = photographers[i];
    article_artist += `<article class="article_artist">
    <a href="/pages/photographer.html?id=${artist.id}">
        <img src="/assets/photographers/${artist.portrait}" alt="Portrait de ${artist.name}">
        <h2>${artist.name}</h2>
    </a>
    <p class="artist artist--city">${artist.city}, ${artist.country}</p>
    <p class="artist artist--tagline">${artist.tagline}</p>
    <p class="artist artist--price">${artist.price}€/jour</p>
</article>`;
  }
  article_artist += `</section>`;
  const cible = document.getElementById("main");
  cible.innerHTML = article_artist;
}
artistIndex(photographers);

/*
async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    let photographers = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },
    ]
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers, ...photographers, ...photographers]})
}

async function displayData(photographers) {
    console.log(photographers);
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
*/
