import React from 'react'
import {useState} from 'react'

function Prevstate() {
    const[count,setCount]=useState(0)
    function incerementbyfive(){
        setCount(prevCount=>prevCount+5)
    }
  return (
    <div>
        Count: {count}
        <div><button onClick={()=> setCount(0)}>Reset</button></div>
        <div><button onClick={() => setCount(prevCount=>prevCount+1)}>Increment by 1</button></div>
        <div><button onClick={incerementbyfive}>Increment by 5</button></div>
    </div>
  )
}

export default Prevstate