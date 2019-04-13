import React from 'react'

const Display = ({ score }) => {
  return (
    <div>
      Strikes: {score.strikes || 0}, Balls: {score.balls || 0}
      {score.hit ? ' hit!' : null}
    </div>
  )
}

export default Display
