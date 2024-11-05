import {useState, useEffect} from 'react'

const CompareCards = () =>{
  const[cardOne, setCardOne] = useState(undefined)
  const[cardTwo, setCardTwo] = useState(undefined)
      useEffect(()=> {
      console.log("fetching one")
      fetch('https://api.scryfall.com/cards/random')
      .then(res => res.json())
      .then(data => setCardOne(data))
    }, [])
    useEffect(()=> {
      fetch('https://api.scryfall.com/cards/random')
      .then(res => res.json())
      .then(data => setCardTwo(data))
    }, [])
  if(!cardOne || !cardTwo){
    return (
      <h1>Still Loading....</h1>
    )
  } else{
  return (
    <>
    <div className = "cardImage">
        <img src ={cardOne.image_uris.png} alt = {cardOne.name} />
      </div>
      <div className = "cardImage">
        <img src ={cardTwo.image_uris.png} alt = {cardTwo.name} />
        </div>
    </>
  )
}
}



export default CompareCards