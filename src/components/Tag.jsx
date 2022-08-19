import React, {useState} from "react";
import useGif from "../utils/useGif";

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const [gif, fetchGif] = useGif(tag);

    const handleClick = () => {
        fetchGif(tag);
    }

    return (
        <div className="container">
            <h1>Random {tag} gif</h1>
            <img width="500" src={gif} alt="Random gif"/>
            <input type="text" onChange={(e) => setTag(e.target.value)}/>
            <button onClick={handleClick}>GET RANDOM GIF</button>
        </div>
    )
}

export default Tag;