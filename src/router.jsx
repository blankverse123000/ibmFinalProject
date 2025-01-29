import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProductList",
    element: <ProductList />,
  },
]);

export default router;
