import { RouterProvider } from "react-router";
import { router } from "./routes";
import SiteLoader from "./components/ui/SiteLoader";

export default function App() {
  return (
    <>
      <SiteLoader />
      <RouterProvider router={router} />
    </>
  );
}
