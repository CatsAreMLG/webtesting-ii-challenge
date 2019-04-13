import React from 'react'

const Dashboard = props => {
  const handleClick = e => {
    const name = e.target.innerText.toLowerCase()
    props.handlePitch(name)
  }
  return (
    <div className="buttonContainer">
      <div className="button" onClick={handleClick}>
        Hit
      </div>
      <div className="button" onClick={handleClick}>
        Foul
      </div>
      <div className="button" onClick={handleClick}>
        Strike
      </div>
      <div className="button" onClick={handleClick}>
        Ball
      </div>
      <div className="button" onClick={props.handleReset}>
        Next Batter
      </div>
    </div>
  )
}

export default Dashboard
