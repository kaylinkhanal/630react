'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import styles from './page.module.css'
const page = () => {
  const answer = ['JAVASCRIPT', 'REACT', 'NEXT']
  const question = ['JA AS RI T', 'R A T', 'N X ']
  const randomList = Math.floor(Math.random()*3)
  const randomName = question[randomList]
  return (
    <div>
      {randomName.split('').map((item)=>{
        return <input value={item}/>
      })}
    </div>
  )
}
export default page