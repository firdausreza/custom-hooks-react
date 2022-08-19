import React, {useEffect} from "react";
import useGif from "../utils/useGif";

const Random = () => {
    const [gif, fetchGif] = useGif();

    useEffect(() => {
        fetchGif()
    }, [])

    const handleClick = () => {
        fetchGif()
    }

    return (
        <div className="container">
            <h1>Random</h1>
            <img width="500" src={gif} alt="Random gif"/>
            <button onClick={handleClick}>GET RANDOM GIF</button>
        </div>
    );
}

export default Random;