import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwircher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { navbarConfig } from "@/shared/config/navbarConfig/navbarConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { t } = useTranslation("translation");

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={() => setIsCollapsed((prev) => !prev)}
        theme={ButtonTheme.BACKGROUND}
        isSquare
        size={ButtonSize.L}
      >
        {isCollapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        {Object.values(navbarConfig).map(
          ({
            to, theme, children, icon: Icon,
          }) => (
            <AppLink
              to={to}
              theme={theme}
              className={styles.item}
              key={to.toString() as string}
            >
              <Icon className={styles.icon} />
              <p className={classNames("", {
                [styles.collapsed]: isCollapsed,
              })}
              >
                {t("navigation.".concat(children as string))}
              </p>
            </AppLink>
          ),
        )}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} />
      </div>
    </div>
  );
};
