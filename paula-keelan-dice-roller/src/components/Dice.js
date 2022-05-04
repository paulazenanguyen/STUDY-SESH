import React, { Component } from 'react'

class Dice extends Component{
    render(){
      return(
        <div>
            <h1>{this.props.singleRoll}</h1>
            <button onClick={this.props.logger}>Click to roll!</button>
        </div>
      )
    }
  }
  export default Dice