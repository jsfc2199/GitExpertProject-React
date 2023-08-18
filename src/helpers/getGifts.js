export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=h6Gsj70ABeZx8uH5Ei5KUGEhy1K11F9j&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifts = data.map((gift) => {
      return {
        id: gift.id,
        title: gift.title,
        url: gift.images.downsized_medium.url,
      };
    });
   
    return gifts
  };