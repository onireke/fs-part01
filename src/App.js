

// const { useState } = require("react")

import { useState } from "react";

// function App(){

//   const[clicks, setClicks]= useState({
//     left: 0, right: 0
//   })

//   function handleLeftClicks(){
//      const newClicks = {
//        left: clicks.left + 1,
//        right: clicks.right
//      }
//      setClicks(newClicks)
//   }


//   function handleRightClicks(){
//      const newClicks = {
//        left: clicks.left,
//        right: clicks.right + 1
//      }
//      setClicks(newClicks)
//   }
//   return(
//     <div className="App">

//       {clicks.left}
//       <button onClick={handleLeftClicks}>Left</button>
//       <button onClick={handleRightClicks}>Right</button>
//       {clicks.right}

//     </div>
//   )
// }
// export default App


// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

import History from "./components/History";
import Button from "./components/Button";
function App(){
const[left, setLeft]= useState(0)
const[right, setRight] = useState(0)
const[allClicks, setAllClicks]= useState([])

function handleLeftClick(){

  setAllClicks(allClicks.concat('L'))
  setLeft(left + 1)
}

function handleRightClick(){
  setAllClicks(allClicks.concat('R'))
  setRight(right + 1)
}
  return(

    <div className="App">
      {left}
      <Button handleClick={handleLeftClick} text = 'LEFT' />
      <Button handleClick={handleRightClick} text = 'RIGHT' />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}




export default App


















