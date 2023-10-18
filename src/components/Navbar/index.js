import React, {useState, useEffect} from 'react'
import {
  NavbarContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {
  FaBars
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const  changeNav = () => {
    if(window.scrollY>=80){
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)

  }, []);

  const  toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                Nirman Easy
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars></FaBars>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="product"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Products</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Vision"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Vision</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Team"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Team</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Career"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Career</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Support</NavLinks>
              </NavItem>
            </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;