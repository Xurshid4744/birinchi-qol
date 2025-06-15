import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

const useTelegramApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!window.Telegram?.WebApp) return;

    WebApp.ready();

    const telegramUser = WebApp.initDataUnsafe?.user;
    if (telegramUser) {
      setUser(telegramUser);
      console.log("Telegram user data:", telegramUser);
    } else {
      console.warn("Foydalanuvchi ma'lumotlari topilmadi. WebApp initData bo'sh.");
    }
  }, []);

  return user;
};

export default useTelegramApp;
