import { MouseEvent } from "react";
import styles from "./filters.module.scss";
import classnames from "classnames";

type LabelFilterProps = {
  text: string | number;
  active: boolean;
  onClick: (event: MouseEvent) => void;
  secondaryColor?: boolean;
};

export default function LabelFilter({
  text,
  active,
  onClick,
  secondaryColor = false,
}: LabelFilterProps) {
  return (
    <span
      className={classnames(styles.label, {
        [styles.active]: active,
        [styles.secondary]: secondaryColor,
      })}
      onClick={onClick}
    >
      {text}
    </span>
  );
}
