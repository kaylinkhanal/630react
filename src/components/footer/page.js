import React from 'react'
import RightSide from '../rightside/page'
const page = (props) => {
  return (
    <div style={{backgroundColor:'red', padding:'30px'}}>
     <RightSide increment={props.increment}/>
      </div>
  )
}

export default page