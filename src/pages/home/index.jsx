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
      {/* <Header />
      HomePage
      {products?.map((item) => (
        <ProductCard product={item} key={item?.id} />
      ))}
      {orders?.map((item) => (
        <h1 key={item.id}>{item?.name}</h1>
      ))} */}
      <h1>id:{user?.id}</h1>
      <h1>is_bot:{user?.is_bot}</h1>
      <h1>first_name:{user?.first_name}</h1>
      <h1>last_name:{user?.last_name}</h1>
      <h1>username:{user?.username}</h1>
      <h1>language_code:{user?.language_code}</h1>
      <h1>allows_write_to_pm:{user?.allows_write_to_pm}</h1>
      <h1>photo_url:{user?.photo_url}</h1>
    </div>
  );
};

export default HomePage;
