import React from 'react'

const Display = ({ score }) => {
  return (
    <div>
      Strikes: {score.strikes || 0}, Balls: {score.balls || 0}
      {score.hit ? <div>Hit!</div> : null}
      {score.walked ? <div>Walked!</div> : null}
      {score.struckOut ? <div>Struck Out!</div> : null}
    </div>
  )
}

export default Display
