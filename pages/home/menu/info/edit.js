import React from "react";
import styles from "../../../../styles/edit.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Form from "@/Components/templates/edit/Form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


export default function edit() {
  const {t} = useTranslation()
  return (
    <div className={styles.edit}>
      <Menuheader title={t("Edit Profile")} />
      <Form />
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