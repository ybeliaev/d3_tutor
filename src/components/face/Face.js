import React from 'react'
import {FaceContainer} from './FaceContainer'
import {BackgroundCircle} from './BackgroundCircle'
import {Eyes} from './Eyes'
import {Mouth} from './Mouth'

export const Face = ({width, height, centerX, centerY,radius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthWidth, mouthRadius}) => {
    return (
        <React.Fragment>
            <h2>For using ARC go to D3-shape.</h2>
            <a href="https://github.com/d3/d3-shape">d3-shape</a>
            <p>Grouped elements by g for using arc</p>
            <FaceContainer
                width={width} 
                height={height} 
                centerX={centerX} 
                centerY={centerY}
            >            
            <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
                <Eyes 
                    eyeOffsetX={eyeOffsetX} 
                    eyeOffsetY={eyeOffsetY} 
                    eyeRadius={eyeRadius}
                />
                <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius}/>
            </FaceContainer>
        </React.Fragment>
    )
}