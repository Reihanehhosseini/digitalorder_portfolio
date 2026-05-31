import React from "react";
import styles from "./LoginForm.module.css";
import Link from "next/link";

export default function LoginForm({children}) {
  return (
    <div className={styles.loginform}>
{children}
    </div>
  );
}
