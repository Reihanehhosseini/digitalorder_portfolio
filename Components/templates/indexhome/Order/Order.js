import React, { useEffect, useState } from "react";
import styles from "./Order.module.css";
import Bell from "@/Components/modules/Bell/Bell";
import { useTranslation } from "next-i18next";


export default function Order() {
  const { t } = useTranslation("common");

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 5 && time < 12) {
      setGreeting(t("Good Morning"));
    } else if (time >= 12 && time < 18) {
      setGreeting(t("Good Afternoon"));
    } else if (time >= 18 && time < 20) {
      setGreeting(t("Good Evening"));
    } else {
      setGreeting(t("Good Night"));
    }
  }, []);

  return (
    <div className={styles.order}>
      <div className={styles.good_time}>
        <span>{t("Hey")} !</span>
        <span>{t(greeting)}</span>
      </div>
      <Bell />
    </div>
  );
}
