import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const SetCards = () => {
  const[listOfSets, setListofSets] = useState([])
  useEffect(() => {
    fetch('https://api.scryfall.com/sets/')
    .then(res => res.json())
    .then(jsonData => setListofSets(jsonData.data))
  }, [])
  if(!listOfSets){
    return (
      <h1>Still Loading...</h1>
    )
  }else {
    return (
      <>
      {listOfSets.map(set => {
        return(
        <ol>
          <Link className = "link" to ='/setCards' value = {set.code}><button type = "button" className = "linkButton">{set.name}</button></Link>
        </ol>
        )
      })}
      </>
    )
  }
}

export default SetCards