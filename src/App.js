
import './App.css';
// import * as d3 from "d3"
// import {arc} from "d3"
import {BackgroundCircle} from "./components/BackgroundCircle"
import {Eyes} from "./components/Eyes"
import {Mouth} from "./components/Mouth"

const width=960;
const height=500; 
const centerX = width / 2
const centerY = height / 2
const strokeWidth = 10 
const radius = height / 2 - strokeWidth / 2

const eyeOffsetX = 90
const eyeOffsetY = 100
const eyeRadius = 40

const mouthWidth = 20
const mouthRadius = 140


function App() {  
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>For using ARC go to D3-shape</h2>
      <a href="https://github.com/d3/d3-shape">d3-shape</a>
      <p>Grouped elements by g for using arc</p>
       <svg width={width} height={height}>
         <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle r={radius} strokeWidth={strokeWidth}/>
            <Eyes 
              eyeOffsetX={eyeOffsetX} 
              eyeOffsetY={eyeOffsetY} 
              eyeRadius={eyeRadius}
            />
            <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius}/>
         </g>
       </svg>
      </header>
    </div>
  );
}

export default App;
