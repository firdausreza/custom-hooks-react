import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('')

    const fetchGif = async (tagName = tag) => {
        const { data } = await axios.get(tagName ? `${url}&tag=${tagName}` : url)
        const imgSrc = data.data.images.downsized_large.url;
        setGif(imgSrc);
    }

    useEffect(() => {
        console.log(apiKey, 'url')
        fetchGif(tag)
    }, [tag])

    return [gif, fetchGif];
}

export default useGif;