//============================================= OC-06 FiS!!EyE =======//
// ARTIST APP ========================================================//
//==================================== By Neah =================2024==//
//import { dataAccess } from "../factories/data.js";
import { idCapture } from "/js/utils/tools.js";

// ID FROM URL GET ----------------------------------------------------//
console.log("====================================");
console.log("=============== GET ================");
console.log("====================================");

const url = window.location.href;
const id_GET_ARTIST = idCapture(url);


console.log(id_GET_ARTIST);  


const response = await fetch("/data/photographers.json");
const data = await response.json();
const artist = data.photographers;
const medias = data.media;

const FetchIDartist = artist.filter((artist) => artist.id == id_GET_ARTIST);
console.log(FetchIDartist);

const FetchIDmedia = medias.filter((media) => media.photographerId == id_GET_ARTIST);
console.log(FetchIDmedia);


// DISPLAY ARTIST  ---------------------------------------------------//
console.log("====================================");
console.log("============== ARTIST ==============");
console.log("====================================");


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
    const artistPrice = document.getElementById("ArtistPrice");
    artistPrice.innerHTML = arrayArtist.price + "€/Jour";
});

// DISPLAY MEDIA -----------------------------------------------------//
console.log("====================================");
console.log("============== MEDIA ===============");
console.log("====================================");

function mediaIndex(importMedia) {
    //let article_media = `<section id="artistSection" class="photographer_section">`;
    let article_media = "";
    //---------------------//  
    importMedia.forEach(arrayMedia => {
        //const mediaImage = document.getElementById("MediaImage");
        
        //console.log(mediaImage);
        console.log("ID: " + arrayMedia.id);
        console.log("PRICE: " + arrayMedia.price);
        console.log("IMAGE: " + arrayMedia.image);
        console.log("VIDEO: " + arrayMedia.video);
        console.log("TITLE: " + arrayMedia.title);
        console.log("DATE: " + arrayMedia.date);
        console.log("LIKES: "+ arrayMedia.likes);    
        

     
      article_media += `<article class="article_media">
      <a href="#lightbox?id=${arrayMedia.id}">`;
      if (arrayMedia.image == null) {    
        article_media +=`<video src="/assets/artist-assets/${arrayMedia.photographerId}/${arrayMedia.video}" alt="${arrayMedia.title}"></video>`;
      }
      else {
        article_media +=`<img src="/assets/artist-assets/${arrayMedia.photographerId}/${arrayMedia.image}" alt="${arrayMedia.title}">`;
        }
        article_media +=  `<p>${arrayMedia.title}</p>
      </a>
      </article>`;
    
    });    
    //---------------------//
    //article_media += `</section>`;
    const cible = document.getElementById("carrousel");
    cible.innerHTML = article_media;
  }
  mediaIndex(FetchIDmedia);

/*
FetchIDmedia.forEach(arrayMedia => {
    //const mediaImage = document.getElementById("MediaImage");
    
    //console.log(mediaImage);
    console.log(arrayMedia.id);
    console.log(arrayMedia.price);
    console.log(arrayMedia.image);
    console.log(arrayMedia.video);
    console.log(arrayMedia.title);
    console.log(arrayMedia.date);
    console.log(arrayMedia.likes);    
    
    mediaImage.src = `/assets/${arrayMedia.image}`;
    const mediaVideo = document.getElementById("MediaVideo");
    
    /*
    mediaVideo.src = `/assets/${arrayMedia.video}`;
    const mediaTitle = document.getElementById("MediaTitle");
    mediaTitle.innerHTML = arrayMedia.title;
    const mediaDate = document.getElementById("MediaDate");
    mediaDate.innerHTML = arrayMedia.date;
    const mediaLikes = document.getElementById("MediaLikes");
    mediaLikes.innerHTML = arrayMedia.likes;
    const mediaPrice = document.getElementById("MediaPrice");
    mediaPrice.innerHTML = arrayMedia.price + "€";
    const mediaDescription = document.getElementById("MediaDescription");
    mediaDescription.innerHTML = arrayMedia.description;*/


//==================================== By Nepha =================2024==//