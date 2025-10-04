import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModalOpened, setIsAuthModalOpened] = React.useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpened((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
          {t("Login")}
        </Button>
      </div>

      <Modal isOpen={isAuthModalOpened} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna
        </p>
      </Modal>
    </div>
  );
};
