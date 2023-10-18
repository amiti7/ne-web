import React from 'react'
import {SidebarContainer, CloseIcon, Icon,SidebarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoutes} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
          <SideBarMenu>
            <SideBarLink to="home" onClick={toggle}>About Us</SideBarLink>
            <SideBarLink to="product" onClick={toggle}>Product</SideBarLink>
            <SideBarLink to="Vision" onClick={toggle}>Vision</SideBarLink>
            <SideBarLink to="Team" onClick={toggle}>Team</SideBarLink>
            <SideBarLink to="Career" onClick={toggle}>Career</SideBarLink>
            <SideBarLink to="Contact" onClick={toggle}>Support</SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SideBarRoutes to="/signin">
              SignIn
            </SideBarRoutes>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;