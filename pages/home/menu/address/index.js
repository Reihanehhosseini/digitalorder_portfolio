import React from "react";
import styles from "../../../../styles/address.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import AddressPanel from "@/Components/templates/address/AddressPanel";
import ButtonOrange from "@/Components/modules/ButtonOrange/ButtonOrange";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function address() {
  const {t} = useTranslation()
  const router = useRouter();

  const clickOnBtnOrange = () => {
    router.push("address/location")
  };
  return (
    <div className={styles.address}>
      <Menuheader title={t("My Address")} />
      <AddressPanel />
      <ButtonOrange
        title={t("ADD NEW ADDRESS")}
        clickOnBtnOrange={clickOnBtnOrange}
      />
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
