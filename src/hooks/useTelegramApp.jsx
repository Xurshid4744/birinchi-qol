import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

const useTelegramApp = () => {
  const [user, setUser] = useState(null);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    if (!window.Telegram?.WebApp) {
      console.warn("Telegram WebApp not found");
      return;
    }

    setIsTelegram(true);
    WebApp.ready();

    const userData = WebApp.initDataUnsafe?.user;

    if (userData) {
      setUser(userData);
    } else {
      console.warn("No user data from Telegram");
    }
  }, []);

  return { user, isTelegram };
};

export default useTelegramApp;
