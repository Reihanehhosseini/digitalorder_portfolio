import React from "react";
import styles from "../../../styles/forgetpassword.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Loginheader from "@/Components/modules/loginheader/Loginheader";
import Ellipse from "@/Components/modules/Ellipse/Ellipse";
import LoginForm from "@/Components/templates/loginpage/LoginForm";
import { useRouter } from "next/router";

export default function forgetpassword() {
  const rout = useRouter()
  const sendcode = (event) => {
    event.preventDefault();
    rout.push("forgetpassword/verify")
  };
  return (
    <div className={styles.forgetpassword}>
      <Ellipse/>
      <div className={styles.menuheader_login}>
        <Menuheader />
      </div>
      <Loginheader
        title="Forgot Password"
        desc="Please sign in to your existing account"
      />
      <LoginForm>
        <form action="">
          <div className={styles.form_input}>
            <span>USERNAME</span>
            <input type="text" placeholder="username" />
          </div>
          <button className={styles.formbutton} onClick={sendcode}>SEND CODE</button>
        </form>
      </LoginForm>
    </div>
  );
}
