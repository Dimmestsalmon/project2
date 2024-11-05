import React, { useEffect, useState} from 'react'


const RandomCard = () => {
  const [randomCard, setRandomCard] = useState(undefined)
  useEffect(()=> {
    fetch('https://api.scryfall.com/cards/random')
    .then(res => res.json())
    .then(data => setRandomCard(data))
  }, [])

  if(!randomCard){
    return (
      <h1>Still Loading</h1>
    )
  } else{
      return(
        <div className = "cardImage">
        <img src ={randomCard.image_uris.png} alt = {randomCard.name} />
        </div>
      )
  }
}

export default RandomCard;