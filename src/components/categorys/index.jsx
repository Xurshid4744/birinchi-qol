import React, { useState } from "react";
import "./index.scss";

const Categorys = () => {
  const categorys = [
    { title: "Ichimliklar", id: 1 },
    { title: "Coca-cola", id: 2 },
    { title: "Salqin ichimliklar", id: 3 },
    { title: "Un va shakar", id: 4 },
    { title: "Sabzavotlar", id: 5 },
    { title: "Mevalar", id: 6 },
    { title: "Ichimliklar", id: 7 },
    { title: "Coca-cola", id: 8 },
    { title: "Salqin ichimliklar", id: 9 },
    { title: "Un va shakar", id: 10 },
    { title: "Sabzavotlar", id: 11 },
    { title: "Mevalar", id: 12 },
    { title: "Ichimliklar", id: 13 },
    { title: "Coca-cola", id: 14 },
    { title: "Salqin ichimliklar", id: 15 },
    { title: "Un va shakar", id: 16 },
    { title: "Sabzavotlar", id: 17 },
    { title: "Mevalar", id: 18 },
  ];

  const [active, setActive] = useState(categorys[0]?.id);
  return (
    <div className="categorys">
      {categorys?.map((item) => (
        <span
          className="category"
          data-active={active == item?.id}
          onClick={() => setActive(item?.id)}
        >
          {item?.title}
        </span>
      ))}
    </div>
  );
};

export default Categorys;
