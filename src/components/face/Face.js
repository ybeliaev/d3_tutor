
import {FaceContainer} from './FaceContainer'
import {BackgroundCircle} from './BackgroundCircle'
import {Eyes} from './Eyes'
import {Mouth} from './Mouth'

export const Face = ({width, height, centerX, centerY,radius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthWidth, mouthRadius}) => {
    return (
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
    )
}