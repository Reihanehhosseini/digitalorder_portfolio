import React from "react";
import styles from "./Plus.module.css";

export default function Plus({ bgcolor = "#ff7622" }) {
  return (
    <div
      className={`${styles.plus} flex_center`}
      style={{ backgroundColor: bgcolor }}
    >
      +
    </div>
  );
}
