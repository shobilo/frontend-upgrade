import { AppLinkProps, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { AppRoutes, RoutePath } from "../routeConfig/routeConfig";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";

export enum NavbarItems {
  MAIN_PAGE = "Main Page",
  ABOUT_PAGE = "About",
}

export const navbarConfig: Record<NavbarItems, AppLinkProps> = {
  [NavbarItems.MAIN_PAGE]: {
    to: RoutePath[AppRoutes.MAIN],
    icon: MainIcon,
    theme: AppLinkTheme.INVERTED,
    children: NavbarItems.MAIN_PAGE,
  },
  [NavbarItems.ABOUT_PAGE]: {
    to: RoutePath[AppRoutes.ABOUT],
    icon: AboutIcon,
    theme: AppLinkTheme.INVERTED,
    children: NavbarItems.ABOUT_PAGE,
  },
};
