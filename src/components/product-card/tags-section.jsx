import React from "react";

const TagsSection = ({ tags, handleTag, tag }) => {
  return (
    <div className="product-card-tags">
      {tags?.map((item) => (
        <p
          className="product-card-tag"
          key={item}
          onClick={() => handleTag(item?.toLowerCase())}
          data-active={tag?.toLowerCase() === item?.toLowerCase()}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default TagsSection;
