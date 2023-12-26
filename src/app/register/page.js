'use client'
import React from 'react'
import Link from 'next/link'
import Footer from '../../components/footer/page'

const Register = () => {
  const [num, setNum] = useState(10)
  const increment = ()=>{
    setNum(num + 1)
  }
  return (
    <div>
      {num}
      <Footer increment={increment}/>
    </div>
  )
}

export default Register