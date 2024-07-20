//============================================= OC-06 FiS!!EyE =======//
// API CONNEXION =====================================================//
//==================================== By Neah =================2024==//
const URL = "/data/photographers.json"

export const getPhotographers = () => {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.photographers)
}

export const getPhotographerById = id => {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.find(photographer => photographer.id === id))
}

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