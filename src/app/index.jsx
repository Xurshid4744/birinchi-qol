// src/App.tsx
import { useTelegramApp } from "@/hooks";
import React from "react";

const App = () => {
  const { user } = useTelegramApp();

  if (!user) {
    return <p>❌ Iltimos, Telegram WebApp orqali kiring.</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>👤 Telegram Foydalanuvchisi</h1>
      <ul>
        <li>ID: {user.id}</li>
        <li>Ism: {user.first_name}</li>
        {user.last_name && <li>Familiya: {user.last_name}</li>}
        {user.username && <li>Username: @{user.username}</li>}
        <li>Tili: {user.language_code}</li>
        {user.photo_url && (
          <li>
            Avatar: <img src={user.photo_url} width="80" height="80" alt="avatar" />
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
