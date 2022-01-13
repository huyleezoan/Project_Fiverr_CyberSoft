import React, { useEffect } from "react";
import { Fragment } from "react";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import LogoTrustedHome from "../../components/LogoTrustedHome/LogoTrustedHome";
import ProServiceSliderHome from "../../components/ProServiceSliderHome/ProServiceSliderHome";

export default function Home(props) {
  return (
    <Fragment>
      <CarouselHome /> 
      <LogoTrustedHome />
      <ProServiceSliderHome />
    </Fragment>
  );
}
