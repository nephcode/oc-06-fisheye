export const mediaTemplate = data => {
    const { id, photographerId, title, image, video, likes } = data

    const source = `/assets/artist-assets/${photographerId}/${image || video}`

    const getMediaCardDOM = () => {
        const article = document.createElement('article');
        article.id = `article-${id}`
        article.setAttribute('data-article-media', id)
        article.setAttribute('class', 'article_media')
        article.setAttribute('aria-label', 'photo')
        article.setAttribute('tabindex', 0)

        const figure = document.createElement('figure')

        const a = document.createElement('a')
        a.role = 'button'
        a.ariaLabel = "Ouvrir l'image en grand"

        const media = document.createElement(image ? 'img' : 'video')
        media.src = source
        media.alt = title

        const figcaption = document.createElement('figcaption')
        figcaption.setAttribute('aria-labelledby', `article-${id}`)
        figcaption.textContent = title

        const divHeartMedia = document.createElement('div')
        divHeartMedia.setAttribute('class', 'heartMedia')

        const divHeartMediaCount = document.createElement('div')
        divHeartMediaCount.setAttribute('data-idmediacount', id)
        divHeartMediaCount.setAttribute('data-count', likes)
        divHeartMediaCount.setAttribute('class', 'heartMediaCount')
        divHeartMediaCount.textContent = likes

        const div = document.createElement('div')
        const i = document.createElement('i')
        i.setAttribute('data-idheart', id)
        i.setAttribute('class', 'fa-classic fa-heart icone__Coeur')
        i.setAttribute('tabindex', 0)

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