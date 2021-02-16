import React from "react";
import { Link } from "react-scroll";
import {
  SidebarMenu,
  SidebarLink,
  CloseIcon,
  Icon,
  SidebarContainer,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon toggle={toggle}/>
      </Icon>
      <SidebarMenu>
        <SidebarLink>ELECTRIC</SidebarLink>
        <SidebarLink to="/">ACOUSTIC</SidebarLink>
        <SidebarLink to="/">AMPLIFIERS</SidebarLink>
        <SidebarLink to="/">PEDALS</SidebarLink>
        <SidebarLink to="/">ACCESSORIES</SidebarLink>
        <SidebarLink to="/">COMMUNITY</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">CONTACT</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
