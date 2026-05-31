import React from "react";
import styles from "./Cardcategorie.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Cardcategorie({ name, images, onclick, isActive }) {
  const {t} = useTranslation()
  return (
    <div
      className={`${styles.cardcategorie} flex_center`}
      onClick={onclick}
      style={{ backgroundColor: isActive ? "#FFD27C" : "#f6f6f6" }}
    >
      <Image
        src={(images)
        }
        width={44}
        height={44}
        crossOrigin="anonymous"
        alt={name}
      />
      {/* <img src={images} alt="" /> */}
      <span>{t(name)}</span>
    </div>
  );
}
