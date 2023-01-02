import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <a-scene>
      <a-text value="HAPPY NEW YEAR!" color="gold" scale="2 2 1" position="-3 1.6 -2" rotation="0 45 0"></a-text>
      <a-text value="<Code> 2023! <Code/>" color="green" scale="2 2 1" position="-3.3 1 -2" rotation="0 45 0"></a-text>
      
      <a-text value="HAPPY NEW YEAR!" color="gold" scale="2 2 1" position="3 1.6 6" rotation="0 180 0"></a-text>
      <a-text value="<Code> 2023! <Code/>" color="green" scale="2 2 1" position="3.3 1 6" rotation="0 180 0"></a-text>
      <a-text value="so que atras" color="green" scale="2 2 1" position="2.5 0.4 6" rotation="0 180 0"></a-text>

    </a-scene>
    </div>
  )
}

export default App
