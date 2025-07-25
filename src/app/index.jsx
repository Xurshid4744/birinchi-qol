import { RouterProvider } from "react-router-dom";
import { useTelegramApp } from "@/hooks";
import router from "@/routes";
import { useEffect } from "react";
import useCategoryStore from "@/store/category";
import useProductsStore from "@/store/products";
import useDebtsStore from "@/store/debts";
import useSettingStore from "@/store/settings";

function App() {
  const { user } = useTelegramApp();
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const fetchDebts = useDebtsStore((state) => state.fetchDebts);
  const fetchSettings = useSettingStore((state) => state.fetchSettings);

  // useEffect(() => {
  //   if (!user) return;
  //   fetchCategories();
  //   fetchProducts();
  //   fetchDebts(user?.id);
  //   fetchSettings();
  // }, [user]);

   useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchDebts(1);
    fetchSettings();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
