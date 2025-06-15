import { RouterProvider } from "react-router-dom";
import { useTelegramApp } from "@/hooks";
import router from "@/routes";

function App() {
  const user = useTelegramApp();
  // if (!isTelegram) return <h1>Not Found</h1>;

  return (
    <>
      APP
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
        <h1>USER NOT !</h1>
      )}
    </>
  );
}

export default App;
