
import './App.css';
// import * as d3 from "d3"
// import {arc} from "d3"

import { Face } from './components/face/Face';

const width=960;
const height=500; 

const strokeWidth = 10 
const radius = height / 2 - strokeWidth / 2





function App() {    
  return (
    <div className="App">
      <header className="App-header">
      <h2>For using ARC go to D3-shape.</h2>
      <a href="https://github.com/d3/d3-shape">d3-shape</a>
      <p>Grouped elements by g for using arc</p>
      <Face 
        width={width}
        height={height}
        centerX={width / 2} 
        centerY={height / 2}
        // r={radius} 
        strokeWidth={10}
        eyeOffsetX={90} 
        eyeOffsetY={100} 
        eyeRadius={40}
        mouthWidth={20} 
        mouthRadius={140}
      />
      </header>
    </div>
  );
}

export default App;
