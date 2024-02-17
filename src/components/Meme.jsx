import React from "react";
import memesData from "../memesData";



export default function Meme() {

const [meme, setMeme] = React.useState ({
    topText:'',
    bottomText:'',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
})

const [allMemeImages, setAllMemeImages] = React.useState(memesData);

function getMemeImage() {
    const memesArray = allMemeImages.data.memes

    const randomNumber = Math.floor(Math.random() * memesArray.length)

    const url = memesArray[randomNumber].url

    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }));
}

  return (
    <main>
      <div className="form">

<div>
    <label className="form_label"> Top Text: 
        <input 
        type="text"
        className="form_input" 
        />
        </label>
</div>

<div>
    <label className="form_label"> Bottom Text: 
        <input 
        type="text"
        className="form_input" 
        />
        </label>
</div>

        <button 
        className="form_button"
        onClick={getMemeImage}
        > 
        Get a New Meme Image! 
        </button>

      </div>

    <img 
    src={meme.randomImage} 
    className="meme_image"
    />

    </main>
  );
}
