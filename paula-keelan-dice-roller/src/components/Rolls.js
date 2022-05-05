import React, { Component } from 'react'

class Rolls extends Component{
    render(){
      return(
        <div>
          <h1>Previous rolls</h1>
          {this.props.arrayLogger.map((number, index) => {
            return <p key={index}>{number}</p>
          })}
        </div>
      )
    }
  }
  export default Rolls
