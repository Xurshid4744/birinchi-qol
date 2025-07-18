import { RouterProvider } from "react-router-dom";
import { useTelegramApp } from "@/hooks";
import router from "@/routes";
import { useEffect } from "react";
import useCategoryStore from "@/store/category";
import useProductsStore from "@/store/products";
import useDebtsStore from "@/store/debts";

function App() {
  const { user } = useTelegramApp();
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const fetchDebts = useDebtsStore((state) => state.fetchDebts);
  return (
    <h1>{JSON.stringify(user)}</h1>
  )

  useEffect(() => {
    // if (!user) return;
    fetchCategories();
    fetchProducts();
    fetchDebts(user?.id);
  }, [user]);

  return <RouterProvider router={router} />;
}

export default App;
