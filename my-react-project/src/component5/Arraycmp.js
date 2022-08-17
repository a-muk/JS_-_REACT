import React from 'react'
import {useState} from 'react'

function Arraycmp() {
    const[items,setItems]=useState([{id:0,val:5}])
    function addElement()
    {
        setItems([...items,{id:items.length,val:Math.floor(Math.random()*10)}])
    }
  return 
  (
    <div>
        <button onClick={addElement}>Add Item</button>
        <ul>
            {items.map((item)=><li key={item.id}>value={item.val}</li>)}
        </ul>
    </div>
  )
}

export default Arraycmp