import React, { useState } from "react";
import { GlobalStyle } from "../../globalStyles";
import { Modal } from "../Modal";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  
  
} from "./HeroElements";




const Hero = () => {
  //Toggle function for sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Modal Functionality
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)

  }
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>AXE EXPO</HeroH1>
          <HeroP>GUITARS + AMPLIFIERS</HeroP>
          <HeroBtn onClick={openModal}>START HERE</HeroBtn>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
