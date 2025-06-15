import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      id={styles.LangSwitcher}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
};
