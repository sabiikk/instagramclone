import { useState } from 'react'

import './App.css'
import LeftSide from './components/LeftSide'
import MiddleSide from './components/MiddleSide'
import RightSide from './components/RightSide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <div className="leftSide">
        <LeftSide/>
      </div>
      <div className="middlSide">
     <MiddleSide/>
      
      </div>
      <div className="rightSide">
        <RightSide/>
      </div>
    </div>
    </>
  )
}

export default App
