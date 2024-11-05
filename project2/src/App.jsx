import { useState } from 'react'
import './App.css'
import RandomCard from './Components/RandomCard'
import RandomCommander from './Components/RandomCommander'
import CompareCards from './Components/CompareCards'
import SetCards from './Components/SetCards'
import {Routes, Route, Link} from 'react-router-dom'


function App() {



  return (
    <div className = "menu">
    <Link className = "link" to='/randomCard'><button className = "linkButton" type = "button">Random Card</button></Link>
    <Link className = "link" to='/randomCommander'><button className = "linkButton"  type = "button">Random Commander</button></Link>
    <Link className = "link" to='/compareCards'><button className = "linkButton"  type = "button">Compare Cards</button></Link>
    <Link className = "link" to ='/setCards'><button type = "button" className = "linkButton">Sets of Cards</button></Link>
    <div className = "break"></div>
    <Routes>
      <Route>
      <Route path='/randomCard' element={<RandomCard />} />
      <Route path='/randomCommander' element={<RandomCommander />} />
      <Route path='/compareCards' element={<CompareCards />} />
      <Route path ='/setCards' element={<SetCards />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
