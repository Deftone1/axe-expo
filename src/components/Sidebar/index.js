import React from "react";
import {
  SidebarMenu,
  SidebarLink,
  CloseIcon,
  Icon,
  SidebarContainer,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Electric Guitars</SidebarLink>
        <SidebarLink to="/">Acoustic Guitars</SidebarLink>
        <SidebarLink to="/">Amplifiers</SidebarLink>
        <SidebarLink to="/">Pedals</SidebarLink>
        <SidebarLink to="/">Accessories</SidebarLink>
        <SidebarLink to="/">Community</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Contact</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
