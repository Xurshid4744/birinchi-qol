import React from "react";
import ProductCard from "@/components/product-card";
import { Header } from "@/components";
import { products } from "@/server/products";
import { useOrderStore } from "@/store/order";
import useUserStore from "@/store/user";

const HomePage = () => {
  const orders = useOrderStore((state) => state.orders);
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <Header />
      HomePage
      {products?.map((item) => (
        <ProductCard product={item} key={item?.id} />
      ))}
      {orders
        ?.slice()
        .sort((a, b) => a?.index - b?.index)
        .map((item) => (
          <h1 key={item?.id}>{item?.name}</h1>
        ))}
      <h1>👤 Telegram Foydalanuvchisi</h1>
      <ul>
        <li>ID: {user.id}</li>
        <li>Ism: {user.first_name}</li>
        {user.last_name && <li>Familiya: {user.last_name}</li>}
        {user.username && <li>Username: @{user.username}</li>}
        <li>Tili: {user.language_code}</li>
        {user.photo_url && (
          <li>
            Avatar:{" "}
            <img src={user.photo_url} width="80" height="80" alt="avatar" />
          </li>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
