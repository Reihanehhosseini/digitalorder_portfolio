import React from "react";
import styles from "../../../styles/cart.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import SelectProduct from "@/Components/templates/shoppingcart/selectproduct/SelectProduct";
import Description from "@/Components/templates/shoppingcart/description/Description";
import Delivery from "@/Components/templates/shoppingcart/delivery/Delivery";
import Footercart from "@/Components/modules/footercart/Footercart";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


export default function Cart() {
  const {t} = useTranslation()
  return (
    <div className={styles.cart}>
      <Menuheader
        title={t("Cart")}
        bgcolor="#32343E"
        svgcolor="#fff"
        colorfont="#fff"
      />
      <SelectProduct />
      <Description />
      <Delivery />
      <Footercart>
        <div className={`${styles.total} flex_center`}>
          <span>{t("total")}</span>
          <span>$96</span>
        </div>
        <div className={styles.placeorder}>
          <button>{t("PLACE ORDER")}</button>
        </div>
      </Footercart>
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
