import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./PageError.module.scss";
import { Button } from "@/shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t("SomethingWentWrong")}</p>
      <Button onClick={reloadPage}>{t("ReloadPage")}</Button>
    </div>
  );
};
