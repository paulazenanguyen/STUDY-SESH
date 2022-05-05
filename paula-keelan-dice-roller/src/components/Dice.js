import React, { Component } from 'react'
import side1 from '../assets/side1.svg.png'
import side2 from '../assets/side2.svg.png'
import side3 from '../assets/side3.svg.png'
import side4 from '../assets/side4.svg.png'
import side5 from '../assets/side5.svg.png'
import side6 from '../assets/side6.svg.png'

class Dice extends Component{
    render(){
      return(
        <div>
            <h1>{this.props.singleRoll}</h1>
            <button id="dice-button1" onClick={this.props.logger}>Click to roll!</button>
            <button onClick={this.props.resetter}>Press to Start Over!</button>
        </div>
      )
    }
  }
  export default Dice
