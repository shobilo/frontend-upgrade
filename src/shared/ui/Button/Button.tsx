import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  isSquare?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  theme,
  isSquare = false,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.isSquare]: isSquare,
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, mods, [className, styles[theme], styles[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
