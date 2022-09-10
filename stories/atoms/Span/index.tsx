import classNames from "classnames";
import styles from "./Span.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
  color?: "black" | "white";
  size: "small" | "medium" | "large";
  bold?: boolean;
};

export default function Span({
  children,
  className,
  color = "black",
  size = "small",
  bold = false,
}: Props) {
  return (
    <span
      className={classNames(
        styles["atom-span"],
        styles[`atom-span__${color}`],
        styles[`atom-span__${size}`],
        {
          [styles[`atom-span__bold`]]: bold,
        },
        className
      )}
    >
      {children}
    </span>
  );
}
