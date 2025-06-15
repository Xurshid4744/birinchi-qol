import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import useUserStore from "@/store/user";

const useTelegramApp = () => {
  const updateUserState = useUserStore((state) => state.updateUserState);
  const [isTelegram, setIsTelegram] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    // if (!window.Telegram?.WebApp) {
    //   setIsTelegram(true);
    //   return;
    // } else {
    //   setIsTelegram(true);
    // }
    // WebApp.ready();
    // const initDataUnsafe = WebApp.initDataUnsafe;
    // const userr = initDataUnsafe.user;
    // setUser(userr);
    // // if (user) {
    // //   updateUserState("id", user?.id);
    // //   updateUserState("is_bot", user?.is_bot);
    // //   updateUserState("first_name", user?.first_name);
    // //   updateUserState("last_name", user?.last_name);
    // //   updateUserState("username", user?.username);
    // //   updateUserState("language_code", user?.language_code);
    // //   updateUserState("allows_write_to_pm", user?.allows_write_to_pm);
    // //   updateUserState("photo_url", user?.photo_url);
    // // }
    // if (!window.Telegram?.WebApp) {
    //   setIsTelegram(false);
    //   return;
    // }

    WebApp.ready();

    const userData = WebApp.initDataUnsafe?.user;
    if (!userData) {
      setIsTelegram(false);
      return;
    }

    setUser(userData);
  }, []);

  return (
    <>
      {user ? (
        <div>
          <h1>id:{user?.id}</h1>
          <h1>is_bot:{user?.is_bot}</h1>
          <h1>first_name:{user?.first_name}</h1>
          <h1>last_name:{user?.last_name}</h1>
          <h1>username:{user?.username}</h1>
          <h1>language_code:{user?.language_code}</h1>
          <h1>allows_write_to_pm:{user?.allows_write_to_pm}</h1>
          <h1>photo_url:{user?.photo_url}</h1>
        </div>
      ) : (
        <h1>USER YOQ</h1>
      )}
    </>
  );
  // return isTelegram;
};

export default useTelegramApp;
