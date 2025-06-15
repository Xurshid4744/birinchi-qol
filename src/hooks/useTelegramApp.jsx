import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import useUserStore from "@/store/user";

const useTelegramApp = () => {
  const updateUserState = useUserStore((state) => state.updateUserState);
  const [isTelegram, setIsTelegram] = useState(true);

  useEffect(() => {
    if (!window.Telegram?.WebApp) {
      setIsTelegram(true);
      return;
    } else {
      setIsTelegram(true);
    }
    WebApp.ready();
    const initDataUnsafe = WebApp.initDataUnsafe;
    const user = initDataUnsafe.user;
    if (user) {
      updateUserState("id", user?.id);
      updateUserState("is_bot", user?.is_bot);
      updateUserState("first_name", user?.first_name);
      updateUserState("last_name", user?.last_name);
      updateUserState("username", user?.username);
      updateUserState("language_code", user?.language_code);
      updateUserState("allows_write_to_pm", user?.allows_write_to_pm);
      updateUserState("photo_url", user?.photo_url);
    }
  }, []);

  return isTelegram;
};

export default useTelegramApp;
