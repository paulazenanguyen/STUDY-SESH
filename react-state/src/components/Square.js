import React, { Component } from 'react'
import '../App.css'

class Square extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: ["Red", "Blue", "Green", "Purple", "White"], //an array of colors in state
      counter: 0 //this is a counter in state
    }
  }

  handleChange = () => { //the behavior of the button when clicked
    if (this.state.counter > 3){
      this.setState({counter: 0}) //allows the counter to update to zero when the counter is greater than 3
    } else {
      this.setState({counter: this.state.counter +1}) //increments the counter by one and updates the counter state
    }
  }

  render() {
    let {color, counter} = this.state //object destructuring
    return (

          <div className = "square"
          onClick = {this.handleChange} //calls on the handleChange method when clicked
          style={{backgroundColor: color[counter]}}>
          
            <h1>{color[counter]}</h1>

          </div>
    )
  }
}

export default Square
