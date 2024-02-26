import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;

    const randomNumber = Math.floor(Math.random() * memesArray.length);

    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div>
          <label className="form_label">
            {" "}
            Top Text:
            <input
              type="text"
              className="form_input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="form_label">
            {" "}
            Bottom Text:
            <input
              type="text"
              className="form_input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="form_button" onClick={getMemeImage}>
          Get a New Meme Image!
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme_image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
