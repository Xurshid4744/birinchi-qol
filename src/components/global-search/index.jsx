import { Search } from "lucide-react";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="search-input" tabIndex={1}>
      <Search />
      <input
        type="text"
        placeholder="Mahsulotlarni qidirish..."
        className="input"
      />
    </div>
  );
};

export default GlobalSearch;
