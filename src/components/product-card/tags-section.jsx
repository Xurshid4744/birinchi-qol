const TagsSection = ({ tags, handleTag, tag, width }) => {
  const w = width === "100%" ? `${window.innerWidth - 150}px` : "225px";

  return (
    <div className="product-card-tags" style={{ width: w }}>
      {tags?.map((item) => (
        <i
          className="product-card-tag"
          key={item}
          onClick={() => handleTag(item?.toLowerCase())}
          data-active={tag?.toLowerCase() === item?.toLowerCase()}
        >
          {item}
        </i>
      ))}
    </div>
  );
};

export default TagsSection;
