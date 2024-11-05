import React, { useEffect, useState} from 'react'


const RandomCommander = () => {
  const [randomCommander, setRandomCommander] = useState(undefined)
  useEffect(()=> {
    fetch('https://api.scryfall.com/cards/random?q=is%3Acommander ')
    .then(res => res.json())
    .then(data => setRandomCommander(data))
  }, [])

  if(!randomCommander){
    return (
      <h1>Still Loading</h1>
    )
  }
  else {
      return(
        <div className = "cardImage">
        <img src ={randomCommander.image_uris.png} alt = {randomCommander.name} />
        </div>
      )
  }
}

export default RandomCommander;