import { useState } from 'react'    //Here is the point where we are calling Hooks (useState, useEffect, useCallback etc.)
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //let counter = 10;
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    console.log('Add value button clicked. Counter is: ', counter)
    if(counter >=20){
      alert('Value can\'t exceed 20!')
      return;
    }
    counter += 2
    setCounter(counter)
  }

  const subtractValue = () => {
    //counter -=2
    if(counter <=0) {
      alert('Value can\'t decrease more than 0!')
      return;
    }
    setCounter(counter - 2)
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <button type="button" className="counter">
          Count is {counter}
        </button>
      </section>

      <div className="ticks"></div>
        
      <section id="next-steps">
        <div id="docs">
          <button type="button" className="counter" onClick={addValue}>Increase Value</button>  
        </div>
        <div id="social">
          <button type="button" className="counter" onClick={subtractValue} disabled={counter === 0}>Decrease Value</button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
