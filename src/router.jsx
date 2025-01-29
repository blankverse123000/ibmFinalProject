import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProductList",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
