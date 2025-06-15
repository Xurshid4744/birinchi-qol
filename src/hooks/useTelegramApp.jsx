import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

const useTelegramApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = WebApp.initDataUnsafe.user;
    setUser(userData);
  }, []);

  return { user };
};

export default useTelegramApp;
