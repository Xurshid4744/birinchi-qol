const ImageSection = ({
  img,
  name,
  handleToggle,
  active,
  typeOptions,
  isTypeLocked,
}) => {
  const next = active === typeOptions[0] ? typeOptions[1] : typeOptions[0];
  const isBlock = typeOptions?.includes("BLOK");

  const handleClick = () => {
    if (!isTypeLocked) {
      handleToggle(next);
    }
  };
  return (
    <div className="product-card-img">
      <img src={img} alt={name} />
      {isBlock && (
        <p onClick={handleClick} className={`product-card-type `}>
          {active}
        </p>
      )}
    </div>
  );
};

export default ImageSection;
