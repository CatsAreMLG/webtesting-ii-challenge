import React from 'react'

const Dashboard = props => {
  const handleClick = e => {
    const name = e.target.innerText.toLowerCase()
    props.handlePitch(name)
  }
  return (
    <div>
      <div onClick={handleClick}>Hit</div>
      <div onClick={handleClick}>Foul</div>
      <div onClick={handleClick}>Strike</div>
      <div onClick={handleClick}>Ball</div>
    </div>
  )
}

export default Dashboard
