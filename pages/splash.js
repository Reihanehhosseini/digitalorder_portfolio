import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./../styles/Splash.module.css";

export default function splash() {
  const [ellipse, setEllipse] = useState(false);

  const router = useRouter()

  useEffect(()=>{
    const timer = setTimeout(()=>{
      router.push("/home")
    }, 3000)

    return () => clearTimeout(timer)

  },[router])

  useEffect(() => {
    setTimeout(() => {
      setEllipse(true);
    }, 1000);
  });
  console.log(ellipse);

  return (
    <div className={styles.splash}>
      <div className={styles.ellipse_top}>
        <img
          src="/images/Ellipse 1005.png"
          alt=""
          className={
            ellipse ? `${styles.ellipse_show}` : `${styles.notvisible}`
          }
        />
      </div>

      <div className={styles.splash_logo}>
        <img src="/images/Logo.png" alt="" />
      </div>
      <div className={styles.ellipse_bottom}>
        <img
          src="/images/Ellipse 1006.png"
          alt=""
          className={
            ellipse ? `${styles.ellipse_show}` : `${styles.notvisible}`
          }
        />
      </div>
    </div>
  );
}
