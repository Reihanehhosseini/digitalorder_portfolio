import React from "react";
import styles from "./BtnSeeAll.module.css";
import { useTranslation } from "next-i18next";

export default function BtnSeeAll() {
  const { t } = useTranslation("common");

  return (
    <button className={styles.btnseeall}>
      {t("See All")}
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11L6 6L1 1"
          stroke="#A0A5BA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
