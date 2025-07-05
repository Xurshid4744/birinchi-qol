import Layout from "@/layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));
const OrderPage = lazy(() => import("@/pages/order"));
const CartPage = lazy(() => import("@/pages/cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/orders",
        element: <OrderPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
