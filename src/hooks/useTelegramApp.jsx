import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import useUserStore from "@/store/user";

const useTelegramApp = () => {
  const [user, setUser] = useState(null);
  const updateUserState = useUserStore((state) => state.updateUserState);
  useEffect(() => {
    WebApp.ready();
    const tgUser = WebApp.initDataUnsafe?.user;
    setUser(tgUser || null);

    if (tgUser) {
      updateUserState("id", tgUser?.id);
      updateUserState("is_bot", tgUser?.is_bot);
      updateUserState("first_name", tgUser?.first_name);
      updateUserState("last_name", tgUser?.last_name);
      updateUserState("username", tgUser?.username);
      updateUserState("language_code", tgUser?.language_code);
      updateUserState("allows_write_to_pm", tgUser?.allows_write_to_pm);
      updateUserState("photo_url", tgUser?.photo_url);
    }
  }, []);

  return { user };
};

export default useTelegramApp;
