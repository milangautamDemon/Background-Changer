
import { useState } from 'react'
import './App.css'

function App() {
  const [bgcolor, setBgcolor] = useState("LightGreen");

  const handleColor = (e) => setBgcolor(e.target.innerText);

  const colors = ["Red", "Blue", "Green", "Brown", "Gray"];

  return (
    <>
    <div className='main-container' style={{ backgroundColor: bgcolor}}>
      <h1 className='text-color'>{bgcolor}</h1>
      <div className="button-container">
        {
        colors.map((color, index) => <button className="btn" style={{backgroundColor: color}} key={index} onClick={handleColor}>{color}</button>)
        }
      </div>
    </div>
      
    </>
  )
}

export default App;
