import React from 'react'

const width = 960
const height= 960
const circleX = width/2
const circleY = height/2
const circleRadius = 30
export default function Follower() {
    return (
        <svg width={width} height={height}>
            <circle
                cx={circleX}
                cy={circleY}
                r={circleRadius}
            />
        </svg>
    )
}
