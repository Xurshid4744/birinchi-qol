import { RouterProvider } from "react-router-dom";
import { useTelegramApp } from "@/hooks";
import router from "@/routes";
import { useEffect } from "react";
import useCategoryStore from "@/store/category";
import useProductsStore from "@/store/products";

function App() {
  const { user } = useTelegramApp();
  // if (!user) return <h1>Not Found</h1>;
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
