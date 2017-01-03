import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return (
      <button onClick={this.handleClick}>button</button>
    )
  }
}


module.exports = CoordinatesButton
