import React from "react";

interface StatisticsDetail {
  title: string;
  text: string;
  img: string;
}

export const StatisticsDetail = ({ title, text, img }: StatisticsDetail) => {
  return (
    <article>
      <img src={img} alt="icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
