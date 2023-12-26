import React from 'react'

const page = (props) => {
  return (
    <div style={{backgroundColor:'red', padding:'30px'}}>
     <button onClick={()=>props.increment()}>increment</button>


      </div>
  )
}

export default page