import React from "react";
import styles from "./Feedback.module.css";
import Stars from "@/Components/modules/Stars/Stars";
import { useTranslation } from "next-i18next";


export default function Feedback() {
  const {t} = useTranslation()
  const comments = [
    {
      id: 1,
      name: "sara",
      date: "20/12/2020",
      shortcomment: t("Awesome and Nice"),
      rate: 4,
      longcomment: t(
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
      ),
    },
    {
      id: 2,
      name: "jooki",
      date: "11/08/2025",
      shortcomment: t("Awesome and Nice"),
      rate: 3.5,
      longcomment: t(
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
      ),
    },
    {
      id: 3,
      name: "happy",
      date: "17/03/2024",
      shortcomment: t("Awesome and Nice"),
      rate: 1,
      longcomment: t(
        "This Food so tasty & delicious. Breakfast so fast Delivered in my place.",
      ),
    },
  ];
  return (
    <div className={styles.feedback}>
      <h1>User Feedback</h1>
      {comments.map((comment) => (
        <div className={styles.feedbacks_comments}>
          <div className={styles.users_logo}>
            <img src="" alt="" />
          </div>
          <div className={styles.users_comment}>
            <div className={styles.comment_left}>
              <span className={styles.name}>{comment.name}</span>
              <span className={styles.date}>{comment.date}</span>
              <span className={styles.short_comment}>
                {comment.shortcomment}
              </span>
              <span>
                <Stars rate={comment.rate}/>
              </span>
              <p className={styles.full_comment}>{comment.longcomment}</p>
            </div>
            <div className={styles.comment_right}>
              <svg
                width="20"
                height="4"
                viewBox="0 0 20 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="2.38529"
                  cy="2"
                  rx="2.13456"
                  ry="2"
                  fill="#9C9BA6"
                />
                <ellipse
                  cx="9.85624"
                  cy="2"
                  rx="2.13456"
                  ry="2"
                  fill="#9C9BA6"
                />
                <ellipse
                  cx="17.3272"
                  cy="2"
                  rx="2.13456"
                  ry="2"
                  fill="#9C9BA6"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
