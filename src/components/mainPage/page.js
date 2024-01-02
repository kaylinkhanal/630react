import React from 'react'

const page = ({children}) => {
  return (
    <div>
        <div>Navbar</div>
        <div>Sidebar</div>
        
        <div>footer</div>
        {children}
        </div>
  )
}

export default page