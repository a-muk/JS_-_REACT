import React from 'react'
import {useState} from 'react'

function Simpleusestate() {
    const[name,changeName]=useState("Attreyee")
  return (
    <div>
        {name}
        <div><button onClick={()=>changeName("Harsh")}>Change name </button></div>
    </div>
  )
}

export default Simpleusestate