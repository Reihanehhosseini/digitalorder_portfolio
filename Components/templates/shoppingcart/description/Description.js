import React from "react";
import styles from "./Description.module.css";
import { useTranslation } from "next-i18next";

export default function Description() {
  const {t} = useTranslation()
  return (
    <div className={styles.description}>
      <textarea
        name=""
        id=""
        className={styles.textarea}
        placeholder={t("Description")}
      ></textarea>
    </div>
  );
}
