import React from 'react'
import styles from '../../app/page.module.css'
const page = (props) => {
  return (
    <div className={styles.card} style={{backgroundColor:props.currentPick== props.id ? 'red' : null}}>
        {props.item}
    </div>
  )
}

export default page