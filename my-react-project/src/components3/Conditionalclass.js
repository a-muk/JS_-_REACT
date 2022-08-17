import React, { Component } from 'react'

export class Conditionalclass extends Component {
    constructor(props){
        super(props)
        this.state={
            var:true
        }
    }
  render() {
    let isloggedin
    if(this.state.var){
        isloggedin=<div>User has logged in </div>

    }
    else{
        isloggedin=<div>User has not logged in</div>
    }
    return (
        isloggedin

    )
  }
}

export default Conditionalclass