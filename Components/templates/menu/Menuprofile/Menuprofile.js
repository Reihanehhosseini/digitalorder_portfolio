import React from "react";
import styles from "./Menuprofile.module.css";
import Image from "next/image";

export default function Menuprofile({children}) {
  return (
    <div className={styles.menuprofile}>
      <div className={`${styles.profile_pic} flex_center`}>
        <Image src="/images/profile.jpeg" alt="profile-pic" width={150} height={150}/>
      </div>
      <div className={styles.profile_info}>
        <h2>Reihaneh Hosseini</h2>
        {children}
      </div>
    </div>
  );
}
