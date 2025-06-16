import { AppLinkProps, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { AppRoutes, RoutePath } from "../routeConfig/routeConfig";

export enum NavbarItems {
  MAIN_PAGE = "Main Page",
  ABOUT_PAGE = "About",
}

export const navbarConfig: Record<NavbarItems, AppLinkProps> = {
  [NavbarItems.MAIN_PAGE]: {
    to: RoutePath[AppRoutes.MAIN],
    theme: AppLinkTheme.INVERTED,
    children: NavbarItems.MAIN_PAGE,
  },
  [NavbarItems.ABOUT_PAGE]: {
    to: RoutePath[AppRoutes.ABOUT],
    theme: AppLinkTheme.INVERTED,
    children: NavbarItems.ABOUT_PAGE,
  },
};
