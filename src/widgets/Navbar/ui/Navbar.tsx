import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { navbarConfig } from "@/shared/config/navbarConfig/navbarConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        {Object.values(navbarConfig).map(
          ({ to, theme, children, className }) => (
            <AppLink
              key={to.toString()}
              to={to}
              theme={theme}
              className={className}
            >
              {children}
            </AppLink>
          )
        )}
      </div>
    </div>
  );
};
