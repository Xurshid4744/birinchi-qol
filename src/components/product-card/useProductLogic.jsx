import { useState, useMemo, useEffect } from "react";
import { useOrderStore } from "@/store/order";

export const useProductLogic = (product) => {
  const { name, img, unit_price, block_price, tags, id } = product;
  const existingOrder = useOrderStore((s) => s.orders.find((o) => o.id === id));
  const [count, setCount] = useState(existingOrder?.count || 0);
  const [type, setType] = useState(existingOrder?.type || "BLOK");
  const [tag, setTag] = useState(existingOrder?.tag || tags?.[0] || null);
  const addOrder = useOrderStore((s) => s.addOrder);
  const orders = useOrderStore((s) => s.orders);

  const price = useMemo(() => {
    if (type === "BLOK") {
      return block_price ?? unit_price ?? 0;
    } else {
      return unit_price ?? block_price ?? 0;
    }
  }, [type, block_price, unit_price]);

  const total = useMemo(() => price * count, [price, count]);

  const orderData = useMemo(
    () => ({ name, img, price, tag, id, total, type, count }),
    [name, img, price, tag, id, total, type, count]
  );

  useEffect(() => {
    addOrder(orderData);
  }, [orderData, addOrder]);

  const inc = () => {
    setCount((c) => c + 1);
  };

  const dic = () => {
    setCount((c) => Math.max(0, c - 1));
  };

  const toggleType = (newType) => {
    setType(newType);
  };

  const handleTag = (newTag) => {
    setTag(newTag);
  };

  return {
    count,
    total,
    type,
    dic,
    inc,
    toggleType,
    handleTag,
    tag,
    price,
  };
};
