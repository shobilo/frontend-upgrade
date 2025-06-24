import React, { useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwircher";
import { Button } from "@/shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

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
        className={styles.langSwitcher}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        |||
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
