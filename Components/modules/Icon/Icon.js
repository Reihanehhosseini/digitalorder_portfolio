import React from 'react'
import styles from "./Icon.module.css"

export default function Icon({icon}) {
  return (
    <span className={`${styles.icon} flex_center`}>
      <img src={icon} alt="icon" />
    </span>
  )
}
