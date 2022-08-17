import React from 'react'

function Personshow(props) {
  return (
    <div>
        My name is {props.personn.name} and my roll number is {props.personn.rn}
    </div>
  )
}

export default Personshow