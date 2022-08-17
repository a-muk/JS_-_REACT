import React, { Component } from 'react'

export class BindingExample extends Component {
    constructor(props){
        super(props)

        this.state={
            color:"red"
        }
        this.changeTheColor=this.changeTheColor.bind(this) //it binds the 'this' keyword 
        //with the method becoz otherwise it gives an error for the fact that 'this' 
        //is not defined previously for jsx document . 
    }
    changeTheColor(){
        this.setState({color:"yellow"})
        console.log(this);

    }
  render() {
    return (
      <div>
          <div>
          {this.state.color}
          </div>
          <button onClick={this.changeTheColor}>Change color</button>
          
          
      </div>

    )
  }
}

export default BindingExample