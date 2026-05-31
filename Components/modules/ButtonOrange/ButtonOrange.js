import React from 'react'
import styles from "./ButtonOrange.module.css"

export default function ButtonOrange({title , clickOnBtnOrange}) {
  
  return (
    <button className={styles.ButtonOrange} onClick={clickOnBtnOrange}>
      {title}
    </button>
  )
}
