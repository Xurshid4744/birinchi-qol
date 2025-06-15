import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));
const OrderPage = lazy(() => import("@/pages/order"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
]);

export default router;
