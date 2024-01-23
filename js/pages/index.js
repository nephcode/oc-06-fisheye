//============================================= OC-06 FiS!!EyE =======//
// INDEX APP =========================================================//
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
    <a href="/photographer.html?id=${artist.id}">
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


