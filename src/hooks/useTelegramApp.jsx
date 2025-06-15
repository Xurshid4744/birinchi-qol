import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

const useTelegramApp = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (window.Telegram?.WebApp) {
  //     WebApp.ready();

  //     const userData = WebApp.initDataUnsafe?.user;
  //     if (userData) {
  //       setUser(userData);
  //     } else {
  //       console.warn("Foydalanuvchi ma'lumotlari yo‘q");
  //     }
  //   }
  // }, []);
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    const user = tg.initDataUnsafe?.user;
    console.log("TELEGRAM USER:", user);

    setUser(user);
  }, []);

  return { user };
};

export default useTelegramApp;
