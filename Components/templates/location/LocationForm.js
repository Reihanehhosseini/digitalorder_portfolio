import React from "react";
import styles from "./LocationForm.module.css";
import { useState } from "react";
import ButtonOrange from "@/Components/modules/ButtonOrange/ButtonOrange";

export default function LocationForm() {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.form}>
      <form action="">
        <div className={styles.input_form}>
          <span>ADDRESS</span>
          <div className={styles.input_address}>
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C3.13556 0 0 2.87991 0 6.42857C0 12.1429 7 20 7 20C7 20 14 12.1429 14 6.42857C14 2.87991 10.8644 0 7 0ZM7 10C6.44621 10 5.90486 9.83243 5.4444 9.51849C4.98395 9.20454 4.62506 8.75831 4.41314 8.23624C4.20121 7.71416 4.14576 7.13969 4.2538 6.58546C4.36184 6.03123 4.62851 5.52213 5.0201 5.12255C5.41169 4.72297 5.9106 4.45086 6.45375 4.34061C6.99689 4.23037 7.55988 4.28695 8.07151 4.5032C8.58315 4.71945 9.02045 5.08566 9.32811 5.55551C9.63578 6.02537 9.8 6.57777 9.8 7.14286C9.79919 7.90036 9.50393 8.62661 8.979 9.16225C8.45408 9.69789 7.74236 9.99917 7 10Z"
                fill="#6B6E82"
              />
            </svg>
            <input type="text" value="3235 Royal Ln. mesa, new jersy 34567" />
          </div>
        </div>
        <div className={styles.input_street}>
          <div className={styles.input_form}>
            <span>STREET</span>
            <input type="text" />
          </div>
          <div className={styles.input_form}>
            <span>POST CODE</span>
            <input type="text" />
          </div>
        </div>
        <div className={styles.input_form}>
          <span>APPARTMENT</span>
          <input type="text" />
        </div>
        <div className={styles.input_form}>
          <span>Label as</span>
          <div className={styles.input_form_btn}>
            <button
              style={{
                backgroundColor: active === 1 ? "#F58D1D" : "#f0f5fa",
                color: active === 1 ? "#fff" : "#32343E",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActive(1);
              }}
            >
              Home
            </button>
            <button
              style={{
                backgroundColor: active === 2 ? "#F58D1D" : "#f0f5fa",
                color: active === 2 ? "#fff" : "#32343E",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActive(2);
              }}
            >
              Work
            </button>
            <button
              style={{
                backgroundColor: active === 3 ? "#F58D1D" : "#f0f5fa",
                color: active === 3 ? "#fff" : "#32343E",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActive(3);
              }}
            >
              Other
            </button>
          </div>
        </div>
        <ButtonOrange title="SAVE LOCATION"/>
      </form>
    </div>
  );
}
