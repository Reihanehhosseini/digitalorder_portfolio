import React, { useState } from "react";
import styles from "./LanguageList.module.css";
import { MdLanguage } from "react-icons/md";
import Language from "@/Components/modules/Language/Language";
import { useTranslation } from "next-i18next";

export default function LanguageList() {
  const { t } = useTranslation();
  const [showLanguage, setShowLanguage] = useState(false);

  const showLanguageFunc = () => {
    setShowLanguage((prev) => !prev);
  };

  return (
    <div className={styles.LanguageList}>
      <div className={styles.LanguageListHeader} onClick={showLanguageFunc}>
        <span className={styles.LanguageListIcon}>
          <MdLanguage />
        </span>
        <span>{t("Language")}</span>
      </div>

      <div
        className={`${
          showLanguage ? styles.showLanguage : styles.hiddenLanguage
        } ${styles.LanguageListSelect}`}
      >
        <Language />
      </div>
    </div>
  );
}
