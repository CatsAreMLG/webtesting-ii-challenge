import React from 'react'

const Display = ({ score }) => {
  return (
    <div>
      <span>Strikes: {score.strikes || 0}</span>,{' '}
      <span>Balls: {score.balls || 0}</span>
      {score.hit ? <div>Hit!</div> : null}
      {score.walked ? <div data-testid="walked">Walked!</div> : null}
      {score.struckOut ? <div data-testid="strikeout">Struck Out!</div> : null}
    </div>
  )
}

export default Display
