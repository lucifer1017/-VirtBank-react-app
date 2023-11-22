import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMediaWrap,SocialIconLink,SocialLogo,SocialMedia,WebsiteRights,SocialIcons } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiX } from "react-icons/si";
import { animateScroll as scroll} from 'react-scroll';
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
      }
  return (
    
    <FooterContainer>
        <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                    
                    <FooterLink to='/signin'>How it works</FooterLink>
                    <FooterLink to='/signin'>Careers</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Terms of Service</FooterLink>
                
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    
                    <FooterLink to='/signin'>Contact</FooterLink>
                    <FooterLink to='/signin'>Support</FooterLink>
                    <FooterLink to='/signin'>Locations</FooterLink>
                    <FooterLink to='/signin'>Sponsors</FooterLink>
                    
                
            </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Dollafluence</FooterLinkTitle>
                    
                    <FooterLink to='/signin'>Submit Video</FooterLink>
                    <FooterLink to='/signin'>Ambassadors</FooterLink>
                    <FooterLink to='/signin'>Agency</FooterLink>
                    <FooterLink to='/signin'>Influencers</FooterLink>
                    
                
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Socials</FooterLinkTitle>
                    
                    <FooterLink to='/signin'>Instagram</FooterLink>
                    <FooterLink to='/signin'>Facebook</FooterLink>
                    <FooterLink to='/signin'>Youtube</FooterLink>
                    <FooterLink to='/signin'>X</FooterLink>
                    
                
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        

        <SocialMedia> 
            <SocialMediaWrap>
        <SocialLogo to='/' onClick={toggleHome}>
        dolla
        </SocialLogo>
        <WebsiteRights>dolla © {new Date().getFullYear()+" "}    

        All rights reserved.</WebsiteRights>
        <SocialIcons>
        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
        <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Instagram"> 
        <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
        <FaYoutube/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="X">
        <SiX />
        </SocialIconLink>
        </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia> 
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer