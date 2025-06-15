import { Link, LinkProps } from "react-router-dom";
import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = ({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
