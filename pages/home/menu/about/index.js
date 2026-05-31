import React from "react";
import styles from "../../../../styles/about.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import AboutImage from "@/Components/templates/about/aboutImage/AboutImage";
import Aboutresturant from "@/Components/templates/about/aboutresturant/Aboutresturant";
import ContactInfo from "@/Components/templates/about/contactInfo/ContactInfo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function about() {
  const { t } = useTranslation();
  return (
    <div className={styles.about}>
      <Menuheader title={t("About the Resturant")} />
      <AboutImage />
      <Aboutresturant />
      <ContactInfo />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
