import React from "react";
import styles from "./Aboutresturant.module.css";
import { useTranslation } from "next-i18next";

export default function Aboutresturant() {
  const {t} = useTranslation()
  return (
    <div className={styles.aboutresturant}>
      <h1>{t("Resturant")}</h1>
      <p>
        {t(
          "My family owns a small traditional restaurant called Taste of Home. It is located in the heart of the city and has been open for over ten years. The restaurant is known for its warm atmosphere, homemade food, and friendly service. We serve a variety of dishes, including grilled meats, stews, rice dishes, and fresh salads. One of our most popular meals is the saffron chicken with rice. All our meals are prepared daily with fresh ingredients and traditional recipes."
        )}
      </p>
      <div className={styles.aboutresturant_footer}>
        <span>
          <img src="/images/Star.png" alt="" />
          4.7
        </span>
        <span>
          <img src="/images/Delivery.png" alt="" />
          Free
        </span>
        <span>
          <img src="/images/Clock.png" alt="" />
          20 min
        </span>
      </div>
    </div>
  );
}
