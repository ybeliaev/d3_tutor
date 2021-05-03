import React, {useState, useCallback} from 'react'

const width = 960
const height= 560

const circleRadius = 30
const initialPosition = {
    x: width/2,
    y: height/2
}


function Follower() {
    const [mousePosition, setMousePosition ] = useState(initialPosition)
    const handleMouseMove = (event) => {
        const {clientX, clientY} = event
        
        setMousePosition({
            x: clientX,
            y: clientY
        })
    }
    console.log(mousePosition);
    return (
        <svg 
        width={width} 
        height={height}
        onMouseMove={handleMouseMove}
        >
            <circle
                cx={mousePosition.x}
                cy={mousePosition.y}
                r={circleRadius}
            />
        </svg>
    )
}
export default  Follower
