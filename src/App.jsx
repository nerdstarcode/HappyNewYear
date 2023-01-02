import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <a-scene>
      <a-box color="blue" position="-2.6 1.5 -2" width="0.5" height="2" rotation="0 30 0"></a-box>
      <a-text value="HAPPY NEW YEAR!" color="gold" scale="4 4 1" position="-2 1.8 -2" rotation="0 30 0"></a-text>
      <a-text value="<Code> 2023! <Code/>" color="green" scale="4 4 1" position="-2.3 1 -2" rotation="0 30 0"></a-text>
      <a-box color="blue" position="6 1.5 -7" width="0.5" height="2" rotation="0 30 0"></a-box>
      <a-box color="blue" position="3 0.5 -6" width="0.5" height="15" rotation="50 31 90"></a-box>
      <a-box color="blue" position="3 2.5 -6" width="0.5" height="15" rotation="-50 31 90"></a-box>
      
      <a-text value="HAPPY NEW YEAR!" color="gold" scale="2 2 1" position="3 1.6 6" rotation="0 180 0"></a-text>
      <a-text value="<Code> 2023! <Code/>" color="green" scale="2 2 1" position="3.3 1 6" rotation="0 180 0"></a-text>
      <a-text value="so que atras" color="green" scale="2 2 1" position="2.5 0.4 6" rotation="0 180 0"></a-text>

    </a-scene>
    </div>
  )
}

export default App
