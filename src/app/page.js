'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import styles from './page.module.css'
const page = () => {
  const [reactionCount, setReactionCount]= useState(0)
  const isLiked = reactionCount ===1
  const handleReactionChange=()=> {
   setReactionCount(isLiked ? 0 : 1)
  }

  return (
    <div>
      <button
      onClick={handleReactionChange}
      className={isLiked ? styles.unlikeBtn : styles.likeBtn}>
        <GrLike />
        {isLiked ? 'Unlike': 'Like'}
      </button>
    </div>
  )
}
export default page