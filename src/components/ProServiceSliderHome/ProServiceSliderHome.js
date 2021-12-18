import React, { useEffect } from "react";
import "./ProServiceSliderHome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
const settingSlick = {
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
};

export default function ProServiceSliderHome(props) {
  const arrayAllServiceSliderHome = useSelector(
    (rootReducer) => rootReducer.HomeReducer.listService
  );
  console.log(arrayAllServiceSliderHome);
  return (
    <section className="pro_service container_all">
      <div className="pro_service_content">
        <h2>Popular professional services</h2>
        <Slider className="pro_service_slider" {...settingSlick}>
          {arrayAllServiceSliderHome.map((service, index) => {
            return (
              <div className="slider-item" key={index}>
                <div
                  className="slider-item-content"
                  style={{
                    backgroundImage: `url(${service.img})`,
                  }}
                >
                  <h4
                    style={
                      index == 3
                        ? {
                            padding: "16px 20px",
                          }
                        : {}
                    }
                  >
                    <small>{service.nameSmall}</small>
                    <br />
                    {service.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
