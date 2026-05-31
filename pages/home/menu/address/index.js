import React from "react";
import styles from "../../../../styles/address.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import AddressPanel from "@/Components/templates/address/AddressPanel";
import ButtonOrange from "@/Components/modules/ButtonOrange/ButtonOrange";
import Link from "next/link";
import { useRouter } from "next/router";

export default function address() {
  const router = useRouter();

  const clickOnBtnOrange = () => {
    router.push("address/location")
  };
  return (
    <div className={styles.address}>
      <Menuheader title="My Address" />
      <AddressPanel />
      <ButtonOrange
        title="ADD NEW ADDRESS"
        clickOnBtnOrange={clickOnBtnOrange}
      />
    </div>
  );
}
