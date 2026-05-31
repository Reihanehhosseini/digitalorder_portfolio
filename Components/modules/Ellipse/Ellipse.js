import React from "react";
import styles from "./Ellipse.module.css";
import Image from "next/image";

export default function Ellipse() {
  return (
    <>
      <Image
        src="/images/Ellipse 10057.png"
        alt="ellipse top"
        className={styles.img_ellipse10057}
        width={149}
        height={130}
      />
      <Image
        src="/images/Vector 142.png"
        alt=""
        className={styles.img_vector}
        width={97}
        height={357}
      />
    </>
  );
}
