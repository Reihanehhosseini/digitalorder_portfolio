import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Login() {
  const {t} = useTranslation()
  return (
    <div className={`${styles.login} flex_center`}>
      <span>
        {t("Already have an account?")}
        <Link href="/Login">{t("Log in")}</Link>
      </span>
    </div>
  );
}
