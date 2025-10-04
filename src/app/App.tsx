import { Suspense, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { defaultTheme } from "./providers/ThemeProvider/ui/ThemeProvider";

const App: React.FC = () => {
  // set theme for body on initial render
  useEffect(() => {
    document.body.className = defaultTheme;
  }, []);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
