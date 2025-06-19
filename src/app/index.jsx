import { RouterProvider } from "react-router-dom";
import { useTelegramApp } from "@/hooks";
import router from "@/routes";

function App() {
  const { user } = useTelegramApp();
  if (!user) return <h1>Not Found</h1>;
  return <RouterProvider router={router} />;
}

export default App;
