import React from "react";
import styles from "../../../../styles/verify.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Loginheader from "@/Components/modules/loginheader/Loginheader";
import LoginForm from "@/Components/templates/loginpage/LoginForm";
import Ellipse from "@/Components/modules/Ellipse/Ellipse";

export default function verify() {
  const verifyhandler = (event) => {
    event.preventDefault();
  };
  const resendhandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.verify}>
      <Ellipse/>
      <div className={styles.menuheader_login}>
        <Menuheader />
      </div>
      <Loginheader
        title="Verification"
        desc="We have sent a code to your phone number"
      />

      <LoginForm>
        <form action="">
          <div className={styles.form_input}>
            <div className={styles.codesend}>
              <span>CODE</span>
              <div>
                <button onClick={resendhandler} className={styles.resend}>Resend</button>
                <span>in.50sec</span>
              </div>
            </div>
            <div className={styles.verify_input}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <button className={styles.formbutton} onClick={verifyhandler}>
            VERIFY
          </button>
        </form>
      </LoginForm>
    </div>
  );
}
