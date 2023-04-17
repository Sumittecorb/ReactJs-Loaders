import React from 'react'
  
const LoadingBar = ({state}) => {
        
    return (
        <Progress isAnimating={state.isAnimating} key={state.key} />
    )
}
  
export default LoadingBar;