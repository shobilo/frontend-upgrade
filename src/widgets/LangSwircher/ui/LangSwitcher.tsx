import { useTranslation } from "react-i18next";
import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, isShort }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      id={styles.LangSwitcher}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {isShort ? t("languageShort") : t("language")}
    </Button>
  );
};
