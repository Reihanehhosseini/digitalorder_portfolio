import React from "react";
import styles from "./Footercart.module.css";

export default function Footercart({ color = "#fff", children }) {
  return (
    <div className={styles.footercart} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}
