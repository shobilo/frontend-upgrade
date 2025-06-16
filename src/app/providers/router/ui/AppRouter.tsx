import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

export const AppRouter: React.FC = () => {
  const { t } = useTranslation("translation");

  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
