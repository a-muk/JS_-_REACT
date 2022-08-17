import React from 'react'

function FunctionalProp(props) {
  return (
    <div>
        <button onClick={()=>props.showname("Attreyee")
        }>Show my name</button>
    </div>
  )
}

export default FunctionalProp