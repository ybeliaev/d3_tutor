import React from 'react'

const width = 960
const height= 960
const circleX = width/2
const circleY = height/2
const circleRadius = 30

const handleMouseMove = (event) => {
    const {clientX, clientY} = event
    console.log({clientX, clientY});
}

function Follower() {
    return (
        <svg 
        width={width} 
        height={height}
        onMouseMove={handleMouseMove}
        >
            <circle
                cx={circleX}
                cy={circleY}
                r={circleRadius}
            />
        </svg>
    )
}
export default  Follower
