import { createBrowserRouter } from "react-router";
import Shell from "./components/layout/Shell";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Achievements from "./pages/Achievements";
import About from "./pages/About";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import Recruitment from "./pages/Recruitment";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Shell,
    children: [
      { index: true, Component: Home },
      { path: "research", Component: Research },
      { path: "achievements", Component: Achievements },
      { path: "about", Component: About },
      { path: "partnership", Component: Partnership },
      { path: "contact", Component: Contact },
      { path: "recruitment", Component: Recruitment },
      { path: "*", Component: NotFound },
    ],
  },
]);
