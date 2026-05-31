import React from "react";
import styles from "../../styles/login.module.css";
import Loginheader from "@/Components/modules/loginheader/Loginheader";
import LoginForm from "@/Components/templates/loginpage/LoginForm";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Ellipse from "@/Components/modules/Ellipse/Ellipse";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (event) => {
    event.preventDefault();

    const res = await fetch("https://digital-order.liara.run/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(res);
  };
  return (
    <div className={styles.loginpage}>
      <Ellipse />
      <div className={styles.menuheader_login}>
        <Menuheader />
      </div>
      <Loginheader
        title="Log In"
        desc="Please sign in to your existing account"
      />
      <LoginForm>
        <form action="">
          <div className={styles.form_input}>
            <span>USERNAME</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className={styles.form_input}>
            <span>PASSWORD</span>
            <div className={styles.input_password}>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <svg
                width="21"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4251 9C10.9903 9 11.5324 8.78929 11.9321 8.41421C12.3318 8.03914 12.5563 7.53043 12.5563 7C12.5563 6.46957 12.3318 5.96086 11.9321 5.58579C11.5324 5.21071 10.9903 5 10.4251 5C9.85983 5 9.31774 5.21071 8.91805 5.58579C8.51837 5.96086 8.29382 6.46957 8.29382 7C8.29382 7.53043 8.51837 8.03914 8.91805 8.41421C9.31774 8.78929 9.85983 9 10.4251 9Z"
                  fill="#B4B9CA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.256958 7C1.61456 2.943 5.65328 0 10.4252 0C15.197 0 19.2357 2.943 20.5933 7C19.2357 11.057 15.197 14 10.4252 14C5.65328 14 1.61456 11.057 0.256958 7ZM14.6877 7C14.6877 8.06087 14.2386 9.07828 13.4392 9.82843C12.6398 10.5786 11.5556 11 10.4252 11C9.29467 11 8.21048 10.5786 7.41111 9.82843C6.61174 9.07828 6.16265 8.06087 6.16265 7C6.16265 5.93913 6.61174 4.92172 7.41111 4.17157C8.21048 3.42143 9.29467 3 10.4252 3C11.5556 3 12.6398 3.42143 13.4392 4.17157C14.2386 4.92172 14.6877 5.93913 14.6877 7Z"
                  fill="#B4B9CA"
                />
              </svg>
            </div>
          </div>
          <div className={styles.remember}>
            <div className={styles.checkbox}>
              <input type="checkbox" name="" id="" />
              <span>Remember me</span>
            </div>
            <div>
              <Link href="/Login/forgetpassword">Forget Password</Link>
            </div>
          </div>
          <button className={styles.formbutton} onClick={login}>
            LOG IN
          </button>
        </form>
        <div className={styles.account}>
          <span>
            Don’t have an account??<a href="/signup">Sign Up</a>
          </span>
        </div>
      </LoginForm>
    </div>
  );
}
