import { useTranslation } from "react-i18next";
import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { navbarConfig } from "@/shared/config/navbarConfig/navbarConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        {Object.values(navbarConfig).map(
          ({
            to, theme, children, className,
          }) => (
            <AppLink
              key={to.toString()}
              to={to}
              theme={theme}
              className={className}
            >
              {t("navigation.".concat(children as string))}
            </AppLink>
          ),
        )}
      </div>
    </div>
  );
};
