import classNames from "classnames";
import React from "react";
import styles from "./Heading.module.scss";

type Props = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "white" | "black";
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
};

export default function Heading({
  type = "h1",
  className = "",
  children,
  color = "black",
}: Props) {
  return (
    <>
      {type === "h1" && (
        <h1
          className={classNames(
            styles["atom-heading__h1"],
            styles[`atom-heading__${color}`],
            className
          )}
        >
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2
          className={classNames(
            styles["atom-heading__h2"],
            styles[`atom-heading__${color}`],
            className
          )}
        >
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3
          className={classNames(
            styles["atom-heading__h3"],
            styles[`atom-heading__${color}`],
            className
          )}
        >
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4
          className={classNames(
            styles["atom-heading__h4"],
            styles[`atom-heading__${color}`],
            className
          )}
        >
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5
          className={classNames(
            styles["atom-heading__h5"],
            styles[`atom-heading__${color}`],
            className
          )}
        >
          {children}
        </h5>
      )}
      {type === "h6" && (
        <h6
          className={classNames(
            styles["atom-heading__h6"],
            styles[`atom-heading__${color}`],
            className
          )}
        >
          {children}
        </h6>
      )}
    </>
  );
}
