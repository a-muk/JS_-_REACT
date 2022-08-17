import React, { Component } from 'react'

export class Classcompstate extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
        //    message:'hello'
        count:0
        }
      }
    //   backclick(){
    //     this.setState({
    //         message:'hello'
    //     })
    //   }

    changecount(){
        this.setState({
            count:this.state.count+1
        })//if we try to call two functions together, react tries to call all together 


    }

    //previous state 

    incrementCount(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))

    }
      changeName()
      {
          this.setState({
              message:'bye'
              
          })
        //   return this.backclick();
         
      }
    render() {
      
    return (
      <div>
          <div>
              {this.state.count}
          </div>
          <button onClick={()=>
        {this.incrementCount()}}>increment</button>
      </div>
    )
  }
}

export default Classcompstate