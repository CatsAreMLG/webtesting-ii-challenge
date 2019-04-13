import React from 'react'

class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        Strikes: {this.props.strikes}, Balls: {this.props.balls}
        {this.props.hit ? this.props.hit : null}
      </div>
    )
  }
}

export default Display
