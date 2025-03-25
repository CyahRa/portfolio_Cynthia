import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationRoute from "./NavigationRoutes";
import HomePage from "./components/Home/HomePage";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Tools from "./components/Tools/Tools";
import Home from "./pages/Home";
import PublicRequire from "./components/auth/PublicRequire";

const Router = () => {
  const location = useLocation();

  // Met à jour le titre en fonction de la route active
  useEffect(() => {
    switch (location.pathname) {
      case NavigationRoute.HOMEPAGE:
        document.title = "Home - Cynthia Rakotoarison";
        break;
      case NavigationRoute.HOME:
        document.title = "Home - Cynthia Rakotoarison";
        break;
      case NavigationRoute.PROJECTS:
        document.title = "Projets - Cynthia Rakotoarison";
        break;
      case "/tools":
        document.title = "Outils - Cynthia Rakotoarison";
        break;
      case NavigationRoute.ABOUT:
        document.title = "À propos - Cynthia Rakotoarison";
        break;
      default:
        document.title = "Mon Application";
    }
  }, [location]);

  return (
    <Routes>
      {/* Routes publiques */}
      <Route element={<PublicRequire />}>
        <Route path={NavigationRoute.HOMEPAGE} element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path={NavigationRoute.HOME} element={<HomePage />} />
          <Route path={NavigationRoute.PROJECTS}  element={<Project/>} />
          <Route path={NavigationRoute.TOOLS}  element={<Tools />} />
          <Route path={NavigationRoute.ABOUT}  element={<About  />} />

        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
