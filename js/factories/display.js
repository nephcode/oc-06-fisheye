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
		// IMAGE ou VIDEO
		this.image = data.image;
        this.video = data.video;
		
	play() {
        // Méthode simplifiée pour simuler la lecture
        const mediaType = this.image ? "Image" : "Video";
        console.log(`Playing ${mediaType}: ${this.image || this.video}`);
    }

	render() {
        // Méthode pour le rendu basé sur le type de média
        if (this.image) {
            return `<img src="/path/to/images/${this.image}" alt="${this.title}" title="${this.title}" />`;
        } else if (this.video) {
            return `<video controls>
                        <source src="/path/to/videos/${this.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        } else {
            return `<p>No media found for ${this.title}</p>`;
        }
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