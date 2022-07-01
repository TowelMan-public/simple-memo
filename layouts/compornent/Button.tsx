import type { NextPage } from "next";
import { ReactNode } from "react";
import styles from "../../styles/Button.module.css";

type Props = {
  children: ReactNode;
};

class Button {
  public static comannd: NextPage<Props> = function ({
    children,
    ...props
  }: Props) {
    return (
      <div {...props} className={styles.comannd_button}>
        <div className={styles.text}>{children}</div>
      </div>
    );
  };

  public static yes: NextPage<Props> = function ({
    children,
    ...props
  }: Props) {
    return (
      <div {...props} className={styles.yes_button}>
        <div className={styles.text}>{children}</div>
      </div>
    );
  };

  public static no: NextPage<Props> = function ({ children, ...props }: Props) {
    return (
      <div {...props} className={styles.no_button}>
        <div className={styles.text}>{children}</div>
      </div>
    );
  };
}

export default Button;
