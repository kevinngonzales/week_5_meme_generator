import React from "react";
import { useQuery } from "@tanstack/react-query";

  

    async function fetchMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes')

      if (!res.ok) {
        throw new Error('Network Response Was Not Ok');
      }
      return res.json();
    }




export default function Meme() {
// utilize useQuery hook from react-query to fetch data and handle loading, error, and success
  const {data, isLoading, isError} = useQuery({queryKey: 'memes', queryFn: fetchMemes});

  const [meme, setMeme] = React.useState({
    topText: "me troubleshooting",
    bottomText: "y u no work!?!?",
    randomImage: "https://i.kym-cdn.com/entries/icons/original/000/004/006/YUNO.jpg" 
})



  function getMemeImage() {
    const memesArray = data.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
  }
  
  function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
      }))
  }

if (isLoading) {
  return <div> Loading... </div>;
}

if (isError) { 
  return <div> Error Fetching Data </div>;
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







  






