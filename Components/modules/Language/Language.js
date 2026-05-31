import React from "react";
import styles from "./Language.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Language() {
  const { t } = useTranslation();
  const router = useRouter();

  const switchLanguage = (lang) => {
    router.push(router.asPath, router.asPath, { locale: lang });
    console.log(router, lang, "hiiiiiiiiiii");
  };
  return (
    <div>
      <div className={styles.Language}>
        <label htmlFor="English">
          <Image src="/images/English.png" alt="" width={30} height={20} />
          <input
            type="radio"
            name="language"
            id="English"
            hidden
            onChange={() => switchLanguage("en")}
          />
          <span>{t("English")}</span>
        </label>
        <label htmlFor="farsi">
          <Image src="/images/Iran.png" alt="" width={30} height={20} />
          <input
            type="radio"
            name="language"
            id="farsi"
            hidden
            onChange={() => switchLanguage("fa")}
          />
          <span>{t("Farsi")}</span>
        </label>
      </div>
    </div>
  );
}
