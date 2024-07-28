import { artistName, artistCity, artistTagline, artistImage, artistPrice, artistLikeCount } from "../utils/domlinker";

export const photographerTemplate = data => {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `/assets/photographers/${portrait}`;

    const getUserCardDOM = () => {
        const article = document.createElement('article');
        article.setAttribute('class', 'article_artist')

        const a = document.createElement('a')
        a.href = `/photographer.html?id=${id}`

        const img = document.createElement('img');
        img.src = picture
        img.alt = `Portrait de ${name}`

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const pCity = document.createElement('p')
        pCity.setAttribute('class', 'artist artist--city')
        pCity.textContent = `${city}, ${country}`

        const pTagline = document.createElement('p')
        pTagline.setAttribute('class', 'artist artist--tagline')
        pTagline.textContent = `${tagline}`

        const pPrice = document.createElement('p')
        pPrice.setAttribute('class', 'artist artist--price')
        pPrice.textContent = `${price}€/jour`

        article.appendChild(a);
        a.appendChild(img)
        a.appendChild(h2)
        article.appendChild(pCity)
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        console.log(article)

        return (article);
    }

    const setProfileDOM = () => {
        artistName.innerHTML = name;
        artistCity.innerHTML = city + ", " + country;
        artistTagline.innerHTML = tagline;
        artistImage.src = `/assets/photographers/${portrait}`;
        artistPrice.innerHTML = price + "€/Jour";
    }

    return { name, picture, getUserCardDOM, setProfileDOM }
}