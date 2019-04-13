import React from 'react'

const Display = ({ score }) => {
  return (
    <div>
      <span>Strikes: {score.strikes || 0}</span>,{' '}
      <span>Balls: {score.balls || 0}</span>
      {score.hit ? <div>Hit!</div> : null}
      {score.walked ? <div>Walked!</div> : null}
      {score.struckOut ? <div>Struck Out!</div> : null}
    </div>
  )
}

export default Display
