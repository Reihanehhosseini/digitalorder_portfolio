import React from 'react'
import styles from "../../../../styles/order.module.css"
import Menuheader from '@/Components/templates/menu/Menuheader/Menuheader'
import Ordertop from '@/Components/templates/order/Ordertop'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function order() {
  const {t} = useTranslation()
  return (
    <div className={styles.order}>
      <Menuheader title={t("My Orders")} />
      <Ordertop />
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
