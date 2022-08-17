import React from 'react'
import '../colorstylesheets.css'
function Usecss() {
    const mycss={color:'yellow'}
  return (
    <div>
        <h1 class="changedcolor">Change my color</h1>
        <h1 style={mycss}>change to yellow</h1>
    </div>
  )
}

export default Usecss