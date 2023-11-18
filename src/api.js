// api.js
export function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?size=${size * cols}x${size * rows}`,
      srcSet: `${image}?size=${size * cols}x${size * rows}&dpr=2 2x`,
    };
  }
  const FLICKR_API_KEY = '033fd69cd3a3d923ca5974c71aeaa0bb'; // Replace with your Flickr API key
  export async function fetchRandomFlickrData() {
    try {
      const response = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=12`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch Flickr data');
      }
  
      const data = await response.json();
      const photos = data.photos.photo;
      return photos.map((photo) => ({
        img: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        title: photo.title,
        rows: 1,
        cols: 1,
      }));
    } catch (error) {
      console.error('Error fetching Flickr data:', error);
      return [];
    }
  }
  
  export async function fetchFlickrData(searchTerm) {
    try {
      let apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=12`;
  
      if (searchTerm) {
        apiUrl += `&text=${encodeURIComponent(searchTerm)}`;
      }
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch Flickr data');
      }
  
      const data = await response.json();
      const photos = data.photos.photo;
      return photos.map((photo) => ({
        img: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        title: photo.title,
        rows: 1,
        cols: 1,
      }));
    } catch (error) {
      console.error('Error fetching Flickr data:', error);
      return [];
    }
  }
  