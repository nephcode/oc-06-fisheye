//============================================= OC-06 FiS!!EyE =======//
// MEDIA =============================================================//
//==================================== By Neah =================2024==//

export const mediaTemplate = data => {
    const { id, photographerId, title, image, video, likes, date, price } = data

    const source = `/assets/artist-assets/${photographerId}/${image || video}`

    const getMediaCardDOM = () => {
        const article = document.createElement('article');
        article.id = `article-${id}`
        article.setAttribute('data-article-media', id)
        article.classList.add('article_media')
        article.setAttribute('aria-label', 'photo')

        const figure = document.createElement('figure')

        const a = document.createElement('a')
        a.role = 'button'
        a.ariaLabel = "Ouvrir l'image en grand"

        const media = document.createElement(image ? 'img' : 'video')
        media.src = source

        const figcaption = document.createElement('figcaption')
        figcaption.setAttribute('aria-labelledby', `media-${photographerId}`)
        figcaption.textContent = title

        const divHeartMedia = document.createElement('div')
        divHeartMedia.classList.add('heartMedia')

        const divHeartMediaCount = document.createElement('div')
        divHeartMediaCount.setAttribute('data-idmediacount', id)
        divHeartMediaCount.setAttribute('data-count', likes)
        divHeartMediaCount.classList.add('heartMediaCount')
        divHeartMediaCount.textContent = likes

        const div = document.createElement('div')
        const i = document.createElement('i')
        i.setAttribute('data-idheart', id)
        i.classList.add('fa-classic', 'fa-heart', 'icone__Coeur')

        article.appendChild(figure)
        figure.appendChild(a)
        a.appendChild(media)

        figure.appendChild(figcaption)

        figure.appendChild(divHeartMedia)
        divHeartMedia.appendChild(divHeartMediaCount)
        divHeartMedia.appendChild(div)
        div.appendChild(i)

        return article
    }

    return { getMediaCardDOM }
}

// MEDIA =============================================================//