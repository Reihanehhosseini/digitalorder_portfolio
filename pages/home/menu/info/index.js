import React from "react";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import styles from "../../../../styles/Info.module.css";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import Menuprofile from "@/Components/templates/menu/Menuprofile/Menuprofile";
import InfoBox from "@/Components/templates/info/InfoBox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function info() {
  const {t} = useTranslation()
  return (
    <div className={styles.info}>
      <Menuheader title={t("Personal Info")}>
        <Link href="/home/menu/info/edit" className={styles.edit}>
          <FiEdit />
        </Link>
      </Menuheader>
      <Menuprofile />
      <InfoBox />
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