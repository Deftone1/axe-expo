import React from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />

      <HeroContent>
        <HeroItems>
          <HeroH1>AXE EXPO</HeroH1>
          <HeroP>GUITARS + AMPLIFIERS</HeroP>
          <HeroBtn>start here</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
