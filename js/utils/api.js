//============================================= OC-06 FiS!!EyE =======//
// API CONNEXION =====================================================//
//==================================== By Neah =================2024==//
const URL = "/data/photographers.json"


const get = () => fetch(URL).then(response => response.json())

export const getPhotographers = () => get().then(data => data.photographers)

export const getPhotographerById = id => getPhotographers().then(data => data.find(photographer => photographer.id === id))

export const getMedias = () => get().then(data => data.media)

export const getMediasByPhotographerId = id => getMedias().then(data => data.filter(media => media.photographerId === id))

export const getMediaById = id => getMedias().then(data => data.find(media => media.id === id))
/*
// Version avec Async/Await (plus lisible)
const URL_ASYNC = "/data/photographers.json";

export const getPhotographersAsync = async () => {
    const response = await fetch(URL_ASYNC);
    const data = await response.json();
    return data.photographers;
};

export const getPhotographerByIdAsync = async (id) => {
    const response = await fetch(URL_ASYNC);
    const data = await response.json();
    return data.photographers.find(photographer => photographer.id === id);
};
*/