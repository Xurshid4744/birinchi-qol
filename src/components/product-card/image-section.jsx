import Image from "../image";

const ImageSection = ({ img, name }) => (
  <div className="product-card-img">
    <Image src={img} alt={name} />
  </div>
);

export default ImageSection;
