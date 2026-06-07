import React from "react";
import styles from "./Form.module.css";
import ButtonOrange from "@/Components/modules/ButtonOrange/ButtonOrange";
import { useTranslation } from "next-i18next";

export default function Form() {
  const { t } = useTranslation();

  return (
    <div className={styles.form}>
      <form action="">
        <div className={`${styles.form_image} flex_center`}>
          <label htmlFor="profileImage" className={styles.profileimage}>
            <img
              src="/images/profile.jpeg"
              alt="profile-pic"
              className={styles.profileimg_img}
            />
            <span className={`${styles.penicon} flex_center`}>
              <img src="/images/pen.png" alt="" />
            </span>
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/png , image/jpeg"
          />
        </div>
        <div className={styles.input_section}>
          <span>{t("Full Name")}</span>
          <input type="text" />
        </div>
        <div className={styles.input_section}>
          <span>{t("Email")}</span>
          <input type="text" />
        </div>
        <div className={styles.input_section}>
          <span>{t("Date of birth")}</span>
          <input type="text" />
        </div>
        <div className={styles.input_section}>
          <span>{t("Phone Numbers")}</span>
          <input type="text" />
        </div>
        <div className={styles.input_section}>
          <span>{t("Gender")}</span>
          <input type="text" />
        </div>
        <div className={styles.input_section}>
          <span>{t("Password")}</span>
          <input type="password" name="" id="" />
        </div>
        <ButtonOrange title={t("SAVE")} />
      </form>
    </div>
  );
}
