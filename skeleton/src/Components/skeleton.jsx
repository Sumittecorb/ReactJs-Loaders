import React from 'react'
import Skeleton from "react-loading-skeleton";
import '../../src/App.css';
import 'react-loading-skeleton/dist/skeleton.css'

export const Skeleton_Card = () => {
  return (
    <div className='card' >
      <div className='card-image'>
        <Skeleton height="100%" width="100%" />
      </div>
      <h2>
        <Skeleton text-align="center" font-size="1.5rem" margin-bottom="8px" />
      </h2>
      <p>
        <Skeleton font-size="1rem" />
      </p>
    </div>
  )
}

// export default SpinerLoader