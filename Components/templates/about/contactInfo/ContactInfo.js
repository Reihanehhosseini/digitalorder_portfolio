import React from "react";
import styles from "./ContactInfo.module.css";
import { useTranslation } from "next-i18next";

export default function ContactInfo() {
  const {t} = useTranslation()
  return (
    <div className={styles.contactInfo}>
      <h1>{t("Contact Information")}</h1>
      <div className={styles.contactInfo_section}>
        <div className={styles.contactInfo_section_item}>
          <span>📍 Address:</span>
          <p>
            Taste of Home Restaurant125 Rosewood Avenue,Springfield, CA 90210,
            USA
          </p>
        </div>
        <div className={styles.contactInfo_section_item}>
          <span>📞 Phone Numbers:</span>
          <div>+1 (555) 123-4567</div>
          <div>+1 (555) 765-4321</div>
        </div>
        <div className={styles.contactInfo_section_item}>
          <span>📧 Email:</span>
          <p>
            info@tasteofhome-restaurant.com <br />
            reservations@tasteofhome-restaurant.com
          </p>
        </div>
      </div>
    </div>
  );
}
