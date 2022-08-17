import React from 'react'
import Personshow from './Personshow'

function Listcomp() {
    const persons=[
        {name: 'Attreyee', rn:31, id:'1'},
        {name:'abc', rn:1, id:'2'},
        {name:'def', rn:4, id:'3'}
    ]
    const personlist=persons.map((person,index)=> <Personshow key={index} personn={person} ></Personshow>)

  return (
    <div>{personlist}</div>
  )
}

export default Listcomp