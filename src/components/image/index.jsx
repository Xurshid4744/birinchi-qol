import React from "react";

const Image = ({ src, alt }) => {
  const IMG_URL = import.meta.env.VITE_APP_IMG_URL;
  //   const IMG_SRC = `${IMG_URL}/${src}`;
  const IMG_SRC = src ? `${IMG_URL}${src}` : "/assets/image/no-image.png";
  return <img src={IMG_SRC} alt={alt} />;
};

export default Image;
