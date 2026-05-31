import React from 'react'
import styles from "./Imgdetail.module.css"
import Image from 'next/image'

export default function Imgdetail() {
  return (
    <div className={styles.imgdetail}>
      <Image src="/images/food/bistro.jpg" alt="" width={200} height={300}/>
    </div>
  )
}
