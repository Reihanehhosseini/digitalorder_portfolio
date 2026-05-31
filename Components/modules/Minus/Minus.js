import React from "react";
import styles from "./Minus.module.css";

export default function Minus({ bgcolor = "#ff7622" }) {
  return (
    <div
      className={`${styles.minus} flex_center`}
      style={{ backgroundColor: bgcolor }}
    >
      -
    </div>
  );
}
