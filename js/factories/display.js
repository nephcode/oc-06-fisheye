//======= ∵ ƸӜƷ ∴ ============================ NEPHA =========//
//======================= ∵ NPƸӜƷL1M ∴ =======================//
//================================================ 2024 ======//

class FactoryArtist{
    constructor(artistId, artistName){
        this._artistId = artistId;
        this._artistName = artistName;
      }
}

class ArtistProfil extends FactoryArtist{
    constructor()

}

class FactoryMedia{
    constructor(data){
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.date = new Date(data.date);
        this.price = data.price;
    }

	render() {
    	// Méthode générique pour rendre un média; à spécialiser dans les sous-classes
        console.log('Render not implemented for base Media class.');
    }
}

class MediaImage extends FactoryMedia {
    constructor(data) {
        super(data);
        this.image = data.image;
    }

	render() {
        // Rendu spécifique pour les images
        return `<img src="/path/to/images/${this.image}" alt="${this.title}" title="${this.title}" />`;
    }
}

class MediaVideo extends factoryMedia{
        constructor(data) {
        super(data);
        this.video = data.video;
    }

    render() {
        // Rendu spécifique pour les vidéos
        return `<video controls>
                    <source src="/path/to/videos/${this.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
    }
}

//======= ∵ ƸӜƷ ∴ ============================================//
//======================= ∵ NPƸӜƷL1M ∴ =======================//
//=== SINCE PYRAMIDS ============================= 2024 ======//