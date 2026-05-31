import React, { useEffect } from "react";
import styles from "./Bell.module.css";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Bell() {
  const { t } = useTranslation("common");

  const [clickBell, setClickBell] = useState(false);
 
  const ringBell = ()=>{
    setClickBell(true)

    setTimeout(() => {
      setClickBell(false)
    }, 4000);
  }

  return (
    <div
      className={`${styles.bell} flex_center`}
      onClick={ringBell}
      style={{ backgroundColor: clickBell ? "#FFD27C" : "#f6f6f6" }}
    >
      <span>{t("Hey")} !</span>
      <span className={styles.bellicon}>
        <Image
          src={clickBell ? "/images/bell.gif" : "/images/Ringg.png"}
          width={23}
          height={23}
          alt="bell"
        />
      </span>
    </div>
  );
}
