'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";

const page = () => {
  const [reactionCount, setReactionCount]= useState(0)
  const handleReactionChange=()=> {
   setReactionCount(reactionCount+1)
  }
  return (
    <div>
      <button>
        {reactionCount}
        <GrLike onClick={handleReactionChange}/>
      </button>
    </div>
  )
}
export default page