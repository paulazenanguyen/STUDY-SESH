import React, { Component } from "react";
import Dice from "./components/Dice";
import Rolls from "./components/Rolls";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollLog:[],
      rollValue:[
        1, 
        2, 
        3, 
        4, 
        5, 
        6
      ],
      rollDefault: 1
    };
  }

  handleRoll = () => {
    let nextRoll = Math.floor(1 + Math.random() * this.state.rollValue.length)
    console.log(`Your roll was ${nextRoll}`)
    this.setState({ rollDefault: nextRoll })
    // let rollTracker = this.state.rollLog.push(nextRoll)
    this.setState({ rollLog: [...this.state.rollLog, nextRoll] })
    // this.setState({ myArray: [...this.state.myArray, 'new value'] })
    console.log(this.state.rollLog)
  }

  render() {
    return (
      <div>
        <h1>Paula & Keelan's Dice Roller</h1>
        <Dice 
        singleRoll={ this.state.rollDefault }
        logger={ this.handleRoll }
        />
        <Rolls 
        logger={ this.handleRoll }  
        />
      </div>
    );
  }
}
export default App;
