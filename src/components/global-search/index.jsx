import { Search } from "lucide-react";
import React from "react";
import "./index.scss";
const GlobalSearch = () => {
  return (
    <div className="search-input" tabIndex={1}>
      <Search className="search-input-icon" strokeWidth={1} />
      <input
        type="text"
        placeholder="Mahsulotlarni qidirish..."
        className="input"
      />
    </div>
  );
};

export default GlobalSearch;
