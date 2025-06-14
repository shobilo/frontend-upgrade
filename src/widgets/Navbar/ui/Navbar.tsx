import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { AppRoutes, RoutePath } from "@/shared/config/routeConfig/routeConfig";
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
