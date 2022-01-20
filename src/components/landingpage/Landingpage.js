import React, { useState } from "react";
import Typeeffect from "../typeeffect/Typeeffect";
import {
  Herocontainer,
  Herobg,
  Videobg,
  Herocontent,
  Heroh1,
  HeroP,
  Herobtnwrapper,
  Btnwrapper,
  ArrowForward,
  ArrowRight,
} from "./Landingpage_style";
import video from "../../video/video1.mp4";
import { Button_main } from "../../Globalstyle";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Herocontainer>
      <Herobg>
        <Videobg autoPlay loop muted src={video} type="video/mp4" />
      </Herobg>
      <Herocontent>
        <Heroh1>
          <Typeeffect />
        </Heroh1>
        <HeroP>Video games as never seen before</HeroP>

        <Herobtnwrapper>
          <Btnwrapper to="/about">
            <Button_main
              to="/about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              About us {hover ? <ArrowForward /> : <ArrowRight />}
            </Button_main>
          </Btnwrapper>
        </Herobtnwrapper>
      </Herocontent>
    </Herocontainer>
  );
};

export default Hero;
