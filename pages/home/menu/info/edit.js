import React from "react";
import styles from "../../../../styles/edit.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Form from "@/Components/templates/edit/Form";

export default function edit() {
  return (
    <div className={styles.edit}>
      <Menuheader title="Edit Profile" />
     <Form/>
    </div>
  );
}
