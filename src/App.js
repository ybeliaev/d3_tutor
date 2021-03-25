
import './App.css';

const width=960;
const height=500;
const centerX = width / 2
const centerY = height / 2
const strokeWidth = 10 
const r = height / 2 - strokeWidth / 2

const eyeOffsetX = 90
const eyeOffsetY = 100
const eyeRadius = 40

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <svg width={width} height={height}>
         <circle 
          cx={centerX} 
          cy={centerY}
          r={r}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
          />
          <circle
          cx={centerX - eyeOffsetX} 
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
          fill="black"
          />
          <circle
          cx={centerX + eyeOffsetX} 
          cy={centerY - eyeOffsetY}
          r={eyeRadius}
          fill="black"
          />
       </svg>
      </header>
    </div>
  );
}

export default App;
