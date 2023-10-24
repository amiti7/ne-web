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
} from './NavbarElements';
import {
  FaBars
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import playStoreIcon from '../../images/playStoreIcon.png'

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
              <div style={{marginTop:'0.5em'}}>
                Nirman Easy
                </div>
                <div style={{fontSize:'14px', fontWeight:'100'}}>
                Legal Name: VINIRMANTECH PRIVATE LIMITED
                </div>
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
          <img onClick={()=> window.open('https://play.google.com/store/apps/details?id=in.nirmaneasy.ecom.twa')} width={'150px'} alt='plaster king' src={playStoreIcon}></img>
          </NavBtn>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;