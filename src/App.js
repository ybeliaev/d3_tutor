import React from 'react'

import './App.css';
// import * as d3 from "d3"
// import {arc} from "d3"

// import components
import Face  from './components/face';
import FetchCSV from './components/csv_data';
import Follower from './components/mouse_follower';

// data constant
const width=160;
const height=160; 

function App() {    
  return (
    <div className="App">
      <header className="App-header">      
        <Face 
          width={160}
          height={160}
          centerX={width / 2} 
          centerY={height / 2}        
          strokeWidth={10}
          eyeOffsetX={30} 
          eyeOffsetY={30} 
          eyeRadius={10}
          mouthWidth={10} 
          mouthRadius={40}
        />
        <hr/>
        <FetchCSV />
        <hr/>
        <Follower />
        <hr/>
        <p>Time finish: 4:26</p>
      </header>
    </div>
  );
}

export default App;
