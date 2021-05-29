import React from 'react'

export const Eyes = ({eyeOffsetX, eyeOffsetY,eyeRadius}) => (
    <React.Fragment>
        <circle
            cx={- eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
            fill="black"
        />
        <circle
            cx={eyeOffsetX} 
            cy={- eyeOffsetY}
            r={eyeRadius}
            fill="black"
        />
    </React.Fragment>
)