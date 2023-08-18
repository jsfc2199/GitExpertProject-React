/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";


const useFetchGifts = (category) => {
    const [images, setimages] = useState([]);
    const [isLoagind, setIsLoagind] = useState(true)

    const getImages = async () => {
      const newImages = await getGifts(category);   
      setimages(newImages);
      setIsLoagind(false)
    };
  
    useEffect(() => {
      // getGifts(category).then(newImgaes => setimages(newImgaes)) FORMA 1
      getImages(category); // forma 2
    }, []);

    return {
        images:images,
        isLoading: isLoagind
    }
}

export default useFetchGifts
