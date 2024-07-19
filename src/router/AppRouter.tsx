import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import PortfolioPage from "../practices/portfolio/PortfolioPage.tsx";
import App from "../pages/App.tsx";
import AppLayout from "../components/layouts/AppLayout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import NFTPage from "../practices/NFTMarketplace/NFTPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<App />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/nft" element={<NFTPage />} />
      </Route>
    </Route>
  )
);

function AppRouter() {
  return <RouterProvider router={router} />;
}
export default AppRouter;
