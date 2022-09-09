import classNames from "classnames";
import React from "react";
import './styles.scss';

type Props = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
};

export default function Heading({
  type = "h1",
  className = "",
  children,
}: Props) {
  return (
    <>
      {type === "h1" && (
        <h1 className={classNames("atom-heading__h1", className)}>
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2 className={classNames("atom-heading__h2", className)}>
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3 className={classNames("atom-heading__h3", className)}>
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4 className={classNames("atom-heading__h4", className)}>
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5 className={classNames("atom-heading__h5", className)}>
          {children}
        </h5>
      )}
      {type === "h6" && (
        <h6 className={classNames("atom-heading__h6", className)}>
          {children}
        </h6>
      )}
    </>
  );
}
