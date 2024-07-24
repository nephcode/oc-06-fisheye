//============================================= OC-06 FiS!!EyE =======//
// DATA CLASS ========================================================//
//==================================== By Neah =================2024==//

export class dataAccess {
    async LoadData() {
      let url = "assets/data/Photographers.json";
      let response = await fetch(url);
      let data = await response.json();
  
      const artist = data.photographers;
      const medias = data.media;
  
      return {
        artist: photographers,
        media: medias,
      };
    }
  }

  