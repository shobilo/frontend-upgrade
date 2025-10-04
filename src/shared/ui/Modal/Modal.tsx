import React, { useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import { Portal } from "@/shared/ui/Portal/Portal";

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DURATION = 300;

const getLastAppNode = () => {
  const appNodes = document.getElementsByClassName("app");

  if (appNodes.length > 0) {
    return appNodes[appNodes.length - 1] as HTMLElement;
  }

  return null;
};

export const Modal: React.FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const lastAppNode = getLastAppNode();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DURATION);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, [closeHandler]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        window.removeEventListener("keydown", onKeyDown);
      }
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal element={lastAppNode || document.body}>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
