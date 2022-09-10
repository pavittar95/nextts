import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

type Props = {
  type?: "primary" | "secondary" | "transparent";
  loading?: boolean;
  round?: boolean;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element | JSX.Element[] | string;
  htmlType?: "submit" | "reset" | "button";
  height?: 16 | 24 | 34 | 45 | 48 | 56 | 64;
  maxWidth?: string | number;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  type = "primary",
  children,
  id,
  onClick,
  height = 48,
  maxWidth = "152px",
  round,
  htmlType = "button",
  disabled = false,
  className = "",
}: Props) {
  return (
    <button
      style={{
        maxWidth,
        height,
        borderRadius: round ? height / 2 : undefined,
      }}
      className={classNames(
        styles["atom-btn"],
        {
          [styles["atom-btn__primary"]]: type === "primary",
          [styles["atom-btn__secondary"]]: type === "secondary",
          [styles["atom-btn__transparent"]]: type === "transparent",
        },
        className
      )}
      id={id}
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
