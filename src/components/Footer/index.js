import React from 'react'
import {FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialLogo
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const  toggleHome = () => {
        scroll.scrollToTop()
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to='/signin'>What we do</FooterLink>
                            <FooterLink to='/Check1'>Investors</FooterLink>
                            <FooterLink to='/partners'>partners</FooterLink>
                            <FooterLink to='/Testimonials'>Testimonials</FooterLink>
                            <FooterLink to='/careers'>careers</FooterLink>
                            <FooterLink to='/Terms'>Terms of services</FooterLink>
                            <FooterLink to='/Privacy-Policy'>Privacy Policy</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/Check1'>Support</FooterLink>
                            <FooterLink to='/partners'>Destinations</FooterLink>
                            <FooterLink to='/Testimonials'>Sponsorships</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos </FooterLinkTitle>
                            <FooterLink to='/signin'>Submit videos</FooterLink>
                            <FooterLink to='/Check1'>Ambassadors</FooterLink>
                            <FooterLink to='/partners'>Agency</FooterLink>
                            <FooterLink to='/Testimonials'>Influencers</FooterLink>
                        
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social media </FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/Check1'>Youtube</FooterLink>
                            <FooterLink to='/partners'>Meta(Facebook)</FooterLink>
                            <FooterLink to='/Testimonials'>Twitter</FooterLink>
                            <FooterLink to='/careers'>LinkedIn</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>Nirman Easy</SocialLogo>
                    <WebsiteRights>Powered by Nirman Easy © {new Date().getFullYear()} {" "}
                    All rights reserved</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer