'use client'
import React,{useState, useEffect} from 'react'

import Card from '../../components/card/page'
const Register = () => {
  const prizes = ['Car' , 'House', 'Jet', 'Teddy Bear']
  const [currentPick, setCurrentPick] = useState(2)

  return (
    <div>
      {prizes.map((item,id)=>{
        return <Card item={item} currentPick={currentPick} id={id}/>
      })}
      <button>Start</button>
      <button>Stop</button>

    </div>
  )
}

export default Register