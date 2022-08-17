import React from 'react'
import {useState} from 'react'

function Objectcmp() {
    const [name, setname]=useState({fname:'Attreyee',lname:'Mukherjee'})
  return (
    <div>
        <form>
            <input type="text" value={name.fname} onChange={(f)=>setname({...name,fname:f.target.value})}/>
            <input type="text" value={name.lname} onChange={(e)=>setname({...name,lname:e.target.value})}/>
            

        </form>
        <h1>My first name is:{name.fname}
        </h1>
        <h1>My last name is:{name.lname}
        </h1>
    </div>
  )
}

export default Objectcmp