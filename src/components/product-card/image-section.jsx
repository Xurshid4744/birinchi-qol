const ImageSection = ({ img, name }) => (
  <div className="product-card-img">
    <img src={img} alt={name} />
  </div>
);

export default ImageSection;
