import React from "react";
import {
  AdvertisingBanner,
  Categorys,
  GlobalSearch,
  MenuBar,
  SortedCategories,
} from "@/components";
import "./index.scss";
import MegaSale from "./components/mega-sale";
const HomePage = () => {
  return (
    <div className="container home">
      <GlobalSearch />
      <AdvertisingBanner />
      <MegaSale />
      <Categorys />
      <div className="home-sorted-categorys-group">
        <SortedCategories />
      </div>
      <MenuBar />

      {/* <h1>👤 Telegram Foydalanuvchisi</h1>
      <ul>
        <li>ID: {user?.id}</li>
        <li>Ism: {user?.first_name}</li>
        {user?.last_name && <li>Familiya: {user?.last_name}</li>}
        {user?.username && <li>Username: @{user?.username}</li>}
        <li>Tili: {user?.language_code}</li>
        <li>Tili: {user?.address}</li>
        <li>Tili: {user?.phone}</li>
        <li>Tili: {user?.account}</li>
        {user?.photo_url && (
          <li>
            Avatar:{" "}
            <img src={user?.photo_url} width="80" height="80" alt="avatar" />
          </li>
        )}
      </ul> */}
    </div>
  );
};

export default HomePage;
