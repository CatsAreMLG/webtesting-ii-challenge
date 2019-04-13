import React from 'react'

const Dashboard = ({ score, handlePitch, handleReset }) => {
  const disabled = {
    background: `rgba(0, 0, 0, 0.1)`,
    cursor: 'not-allowed'
  }
  const handleClick = e => {
    const name = e.target.innerText.toLowerCase()
    handlePitch(name)
  }
  return (
    <div className="buttonContainer">
      <div
        className="button"
        style={score.struckOut || score.walked || score.hit ? disabled : null}
        onClick={
          score.struckOut || score.walked || score.hit ? null : handleClick
        }>
        Hit
      </div>
      <div
        className="button"
        style={score.struckOut || score.walked || score.hit ? disabled : null}
        onClick={
          score.struckOut || score.walked || score.hit ? null : handleClick
        }>
        Foul
      </div>
      <div
        className="button"
        style={score.struckOut || score.walked || score.hit ? disabled : null}
        onClick={
          score.struckOut || score.walked || score.hit ? null : handleClick
        }>
        Strike
      </div>
      <div
        className="button"
        style={score.struckOut || score.walked || score.hit ? disabled : null}
        onClick={
          score.struckOut || score.walked || score.hit ? null : handleClick
        }>
        Ball
      </div>
      <div className="button" onClick={handleReset}>
        Next Batter
      </div>
    </div>
  )
}

export default Dashboard
