import React from 'react'
import styles from "./BlueBox.module.css"

export default function BlueBox({children}) {
  return (
    <div className={styles.bluebox}>
      {children}
    </div>
  )
}
