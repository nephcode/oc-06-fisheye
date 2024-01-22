const url = await fetch("/data/photographers.json");
const data = await url.json();
const photographers = data.photographers;
console.log(photographers);

//const artist = photographers[0];
//console.log(artist);
const artistCard = () => {
  const articleDOM = document.createElement("article");
  articleDOM.classList.add("article_artist");
  //  Link
  const linkDOM = document.createElement("a");
  linkDOM.href = `/pages/photographer.html?id=` + artist.id;
  //  Name
  const nameDOM = document.createElement("h2");
  nameDOM.innerText = artist.name;
  //  Photo
  const photoDOM = document.createElement("img");
  photoDOM.src = `/assets/photographers/` + artist.portrait;
  photoDOM.alt = `Portrait de ` + artist.name;
  console.log(photoDOM.src);
  //  City
  const cityDOM = document.createElement("p");
  cityDOM.innerText = artist.city + `, ` + artist.country;
  //  Tagline
  const taglineDOM = document.createElement("p");
  taglineDOM.innerText = artist.tagline;
  //  Price
  const priceDOM = document.createElement("p");
  priceDOM.innerText = artist.price + `€/jour`;

  const cible = document.querySelector(".photographer_section");
  cible.appendChild(articleDOM);
  articleDOM.appendChild(linkDOM);
  const cibleLink = document.querySelector(".article_artist a");
  const cibleArticle = document.querySelector(".article_artist");
  cibleLink.appendChild(photoDOM);
  cibleLink.appendChild(nameDOM);
  cibleArticle.appendChild(cityDOM);
  cibleArticle.appendChild(taglineDOM);
  cibleArticle.appendChild(priceDOM);
};
// Article


photographers.forEach(artistCard);  

    
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
