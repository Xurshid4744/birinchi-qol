import Layout from "@/layout";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));
const OrderPage = lazy(() => import("@/pages/order"));

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
        element: <h1>Cart</h1>,
      },
    ],
  },
]);

export default router;
