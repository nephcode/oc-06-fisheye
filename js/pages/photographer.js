//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//
//import { dataAccess } from "../factories/data.js";
import { idCapture } from "/js/utils/tools.js";

// ID FROM URL GET ----------------------------------------------------//
const url = window.location.href;
const id_GET_ARTIST = idCapture(url);
//console.log(id_GET_ARTIST);  


const response = await fetch("/data/Photographers.json");
const data = await response.json();
const artist = data.photographers;
const medias = data.media;

const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);
console.log(FetchIDartist);

const FetchIDmedia = medias.filter((media) => media.photographerId == id_GET_ARTIST);
console.log(FetchIDmedia);


// DISPLAY ARTIST  ---------------------------------------------------//

FetchIDartist.forEach(arrayArtist => {
    const artistName = document.getElementById("ArtistName");
    console.log(artistName);
    artistName.innerHTML = arrayArtist.name;
    
    const artistCity = document.getElementById("ArtistCity");
    artistCity.innerHTML = arrayArtist.city + ", " + arrayArtist.country;
    const artistTagline = document.getElementById("ArtistTagline");
    artistTagline.innerHTML = arrayArtist.tagline;
    const artistImage = document.getElementById("ArtistPortrait");
    console.log(artistImage);
    console.log(arrayArtist.portrait);
    artistImage.src = `/assets/photographers/${arrayArtist.portrait}`;
    
});


//==================================== By Nepha =================2024==//