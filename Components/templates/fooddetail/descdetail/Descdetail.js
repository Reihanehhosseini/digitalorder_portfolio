"use client"
import React, { useState } from "react";
import styles from "./Descdetail.module.css";

export default function Descdetail() {
  const [active, setActive] = useState(1);
  
  return (
    <div className={styles.descdetail}>
      <h1>BURGER BISTRO</h1>
      <div className={styles.descdetail_rate}>
        <span>
          <img src="/images/Star.png" alt="" />
          4.7
        </span>
        <span>
          <img src="/images/Delivery.png" alt="" />
          Free
        </span>
        <span>
          <img src="/images/Clock.png" alt="" />
          20 min
        </span>
      </div>
      <p>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Integer
        posuere erat a ante venenatis dapibus posuere velit aliquet.
      </p>
      <div className={styles.descdetail_size}>
        <span>SIZE:</span>
        <span
          className={active === 1 ? styles.active : styles.size}
          onClick={() => {
            console.log("hiiiiiiiiiii");
            
            setActive(1);
          }}
        >
          10”
        </span>
        <span
          className={active === 2 ? styles.active : styles.size}
          onClick={() => {
            setActive(2);
          }}
        >
          14”
        </span>
        <span
          className={active === 3 ? styles.active : styles.size}
          onClick={() => {
            setActive(3);
          }}
        >
          16”
        </span>
      </div>
    </div>
  );
}
