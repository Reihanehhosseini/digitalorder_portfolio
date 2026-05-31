import React from "react";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import styles from "../../../../styles/Info.module.css";
import Link from "next/link";
import Menuprofile from "@/Components/templates/menu/Menuprofile/Menuprofile";
import InfoBox from "@/Components/templates/info/InfoBox";

export default function info() {
  return (
    <div className={styles.info}>
      <Menuheader title="Personal Info">
        <Link href="/home/menu/info/edit"  className={styles.edit}>EDIT</Link>
      </Menuheader>
      <Menuprofile/>
      <InfoBox/>
    </div>
  );
}
