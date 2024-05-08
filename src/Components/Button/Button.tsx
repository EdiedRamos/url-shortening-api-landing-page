import "./Button.scss";

import type { HtmlHTMLAttributes } from "react";

type Button = {
  children: React.ReactNode;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className = "", ...rest }: Button) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};
