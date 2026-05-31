import React from 'react'
import styles from "../../../../styles/order.module.css"
import Menuheader from '@/Components/templates/menu/Menuheader/Menuheader'
import Ordertop from '@/Components/templates/order/Ordertop'

export default function order() {
  return (
    <div className={styles.order} >
      <Menuheader title="My Orders"/>
      <Ordertop/>
    </div>
  )
}
