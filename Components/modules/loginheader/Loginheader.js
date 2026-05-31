import React from "react";
import styles from "./Loginheader.module.css";

export default function Loginheader({title , desc}) {
  return (
    <div className={styles.loginheader}>
      <h1>{title}</h1>
      <span>{desc}</span>
    </div>
  );
}
