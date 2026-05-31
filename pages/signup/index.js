import React, { useState } from "react";
import styles from "@/styles/signup.module.css";
import Menuheader from "@/Components/templates/menu/Menuheader/Menuheader";
import Loginheader from "@/Components/modules/loginheader/Loginheader";
import LoginForm from "@/Components/templates/loginpage/LoginForm";
import Ellipse from "@/Components/modules/Ellipse/Ellipse";
import Link from "next/link";

export default function signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const adduser = async (event) => {
    event.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      username,
      password,
      role: "691c4965c03a91288798bd4a"
    };

    const res = await fetch("https://digital-order.liara.run/v1/users",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpZ2l0YWxfb3JkZXJfYWRtaW4iLCJpYXQiOjE3NjQ0ODM4MjMsImV4cCI6MTc4NjA4MzgyM30.wES8d9xFv_KVR58e71I_V3NP58AL9xlOIIlREFmPRdU`
      },
      body:JSON.stringify(newUser)
    })
    console.log(res);
    
    const data = await res.json()

    if(data.token){
      localStorage.setItem("jwtToken" , data.token)
    }
    
    
  };

  return (
    <div className={styles.signup}>
      <Ellipse />
      <div className={styles.menuheader_login}>
        <Menuheader />
      </div>
      <Loginheader title="Sign Up" desc="Please sign up to get started" />
      <LoginForm>
        <form action="" onSubmit={adduser}>
          <div className={styles.form_input}>
            <span>FIRSTNAME</span>
            <input type="text" placeholder="username" value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>
          </div>
          <div className={styles.form_input}>
            <span>LASTNAME</span>
            <input type="text" placeholder="username" value={lastName} onChange={(event)=>setLastName(event.target.value)}/>
          </div>
          <div className={styles.form_input}>
            <span>EMAIL</span>
            <input type="text" placeholder="username" value={email} onChange={(event)=>setEmail(event.target.value)}/>
          </div>
          <div className={styles.form_input}>
            <span>USERNAME</span>
            <input type="text" placeholder="username" value={username} onChange={(event)=>setUsername(event.target.value)} />
          </div>
          <div className={styles.form_input}>
            <span>PASSWORD</span>
            <div className={styles.input_password}>
              <input type="password" name="" id="" placeholder="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
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
          {/* <div className={styles.form_input}>
            <span>RE-TYPE PASSWORD</span>
            <div className={styles.input_password}>
              <input type="password" name="" id="" placeholder="password" />
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
          </div> */}
          <button className={styles.formbutton}>SIGN UP</button>
        </form>
      </LoginForm>
    </div>
  );
}
