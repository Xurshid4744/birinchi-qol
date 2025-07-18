import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";
import useUserStore from "@/store/user";
import { useOrderStore } from "@/store/order";
import { formatAmount } from "@/utils/amountConvertor";
import { DELEVERY_AMOUNT } from "@/constants/common";
import useDebtsStore from "@/store/debts";

const AllInfo = ({ orderForm }) => {
  const user = useUserStore((state) => state.user);
  const getTotalSum = useOrderStore((s) => s.getTotalSum);
  const user_name = `${(user?.first_name && user?.first_name) || ""} ${
    (user?.last_name && user?.last_name) || ""
  }`.trim();
  const debts = useDebtsStore((s) => s.debts);

  const totalAmount = useMemo(() => {
    const totalSum = getTotalSum();
    const debtAmount = Number(debts?.amount) || 0;

    if (orderForm?.orderType === 1) {
      return formatAmount(DELEVERY_AMOUNT + totalSum + debtAmount);
    }
    return formatAmount(totalSum + debtAmount);
  }, [orderForm?.orderType, getTotalSum, debts]);

  return (
    <div className="checkout-all-info">
      <h6 className="checkout-all-info-title">Umumiy</h6>
      <div>
        <div class="dot-between">
          <p class="left">👤 Buyurtmachi:</p>
          <p class="right">{user_name.length === 0 ? "N/A" : user_name}</p>
        </div>
        <div class="dot-between">
          <p class="left">🛍️ Buyurtmalarim:</p>
          <p class="right">{formatAmount(getTotalSum())} UZS</p>
        </div>

        {
          <div class="dot-between">
            <p class="left">🚚 Yetkazib berish:</p>
            <p class="right">
              {orderForm?.orderType == 1 ? formatAmount(DELEVERY_AMOUNT) : 0}{" "}
              UZS
            </p>
          </div>
        }

        <div class="dot-between">
          <p class="left">💰 Qarzdorlik:</p>
          <p class="right">
            {debts ? `${formatAmount(debts?.amount)} UZS` : `0 UZS`}
          </p>
        </div>

        <div class="dot-between">
          <p class="left">🪙 Jami summa:</p>
          <p class="right">{`${totalAmount} UZS`}</p>
        </div>
      </div>
    </div>
  );
};

export default AllInfo;
{
  /* <h1>👤 Telegram Foydalanuvchisi</h1>
      <ul>
        <li>ID: {user?.id}</li>
        <li>Ism: {user?.first_name}</li>
        {user?.last_name && <li>Familiya: {user?.last_name}</li>}
        {user?.username && <li>Username: @{user?.username}</li>}
        <li>Tili: {user?.language_code}</li>
        {user?.photo_url && (
          <li>
            Avatar:{" "}
            <img src={user?.photo_url} width="80" height="80" alt="avatar" />
          </li>
        )}
      </ul> */
}
