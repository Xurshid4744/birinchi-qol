import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import useUserStore from "@/store/user";
import axios from "axios";

const useTelegramApp = () => {
  const [user, setUser] = useState(null);
  const updateUserState = useUserStore((state) => state.updateUserState);

  const loginWithTelegram = async (telegramId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/auth/telegram-login`,
        {
          telegramId,
        }
      );

      const { user, access_token } = response?.data;

      if (access_token) {
        localStorage.setItem("token", access_token);
        setUser(user);
      }
    } catch (error) {
      console.error("Telegram login failed", error);
    }
  };

  useEffect(() => {
    WebApp.ready();
    const tgUser = WebApp.initDataUnsafe?.user;
    if (tgUser) {
      loginWithTelegram(String(tgUser?.id));
      // setUser(tgUser || null);
      // updateUserState("id", tgUser?.id);
      // updateUserState("is_bot", tgUser?.is_bot);
      // updateUserState("first_name", tgUser?.first_name);
      // updateUserState("last_name", tgUser?.last_name);
      // updateUserState("username", tgUser?.username);
      // updateUserState("language_code", tgUser?.language_code);
      // updateUserState("allows_write_to_pm", tgUser?.allows_write_to_pm);
      // updateUserState("photo_url", tgUser?.photo_url);
    }
  }, []);

  return { user };
};

export default useTelegramApp;
