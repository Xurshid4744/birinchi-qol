import { useState, useMemo, useEffect, useRef } from "react";
import { useOrderStore } from "@/store/order";
import { useDebounceFn } from "@/hooks/useDebounceFn";
import { deepEqual } from "@/utils/equal";

export const useProductLogic = (product) => {
  const { name, unit_price, block_price, id, category_id, img, status} = product;

  const typeOptions = useMemo(() => {
    const options = [];
    if (block_price != null) options.push("BLOK");
    if (unit_price != null) options.push("DONA");
    return options;
  }, [block_price, unit_price]);

  const isTypeLocked = typeOptions.length === 1;

  const existingOrder = useOrderStore(
    (s) => s.orders.find((o) => o.id === id),
    (a, b) => deepEqual(a, b)
  );

  const [count, setCount] = useState(existingOrder?.count || 0);
  const [type, setType] = useState(() => {
    const savedType = existingOrder?.type;
    return typeOptions.includes(savedType) ? savedType : typeOptions[0];
  });

  const addOrder = useOrderStore((s) => s.addOrder);

  const price = useMemo(() => {
    if (type === "BLOK") {
      return block_price ?? unit_price ?? 0;
    } else {
      return unit_price ?? block_price ?? 0;
    }
  }, [type, block_price, unit_price]);

  const total = useMemo(() => price * count, [price, count]);

  const orderData = useMemo(
    () => ({ name, price, id, total, type, count, block_price, category_id, img, status,  unit_price}),
    [name, price,  id, total, type, count, block_price, category_id, img, status, unit_price]
  );

  const prevOrderRef = useRef(null);

  const debouncedAddOrder = useDebounceFn((newOrder) => {
    addOrder(newOrder);
  }, 300);

  useEffect(() => {
    const prev = prevOrderRef.current;
    if (!deepEqual(prev, orderData)) {
      prevOrderRef.current = orderData;
      debouncedAddOrder(orderData);
    }
  }, [orderData, debouncedAddOrder]);

  const inc = () => setCount((c) => c + 1);
  const dic = () => setCount((c) => Math.max(0, c - 1));
  const toggleType = (newType) => {
    if (typeOptions.includes(newType)) {
      setType(newType);
    }
  };

  return {
    count,
    total,
    type,
    dic,
    inc,
    toggleType,
    price,
    typeOptions,
    isTypeLocked
  };
};
