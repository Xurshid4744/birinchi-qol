import React from "react";
import "./index.scss";
import Marquee from "react-fast-marquee";

const AdvertisingBanner = () => {
  return (
    <div className="advertising-banner">
      <Marquee
        speed={20}
        pauseOnClick
        pauseOnHover
        loop={0}
        gradient={false}
        className="marquee"
      >
        {[1, 2, 3]?.map((i) => (
          <div className="advertising-banner-item" key={i}>
            <img
              src="https://cdn.nur.kz/images/1200x675/02a1bfaf805ff1b0.jpeg?version=1"
              alt="banner"
              className="advertising-banner-img"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AdvertisingBanner;
