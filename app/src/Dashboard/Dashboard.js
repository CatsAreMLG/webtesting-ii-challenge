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
        style={score.strikes === 3 || score.balls === 4 ? disabled : null}
        onClick={score.strikes === 3 || score.balls === 4 ? null : handleClick}>
        Hit
      </div>
      <div
        className="button"
        style={score.strikes === 3 || score.balls === 4 ? disabled : null}
        onClick={score.strikes === 3 || score.balls === 4 ? null : handleClick}>
        Foul
      </div>
      <div
        className="button"
        style={score.strikes === 3 || score.balls === 4 ? disabled : null}
        onClick={score.strikes === 3 || score.balls === 4 ? null : handleClick}>
        Strike
      </div>
      <div
        className="button"
        style={score.strikes === 3 || score.balls === 4 ? disabled : null}
        onClick={score.strikes === 3 || score.balls === 4 ? null : handleClick}>
        Ball
      </div>
      <div className="button" onClick={handleReset}>
        Next Batter
      </div>
    </div>
  )
}

export default Dashboard
