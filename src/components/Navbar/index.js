import React,{useState,useEffect} from 'react'
import {Nav, NavContainer, NavLogo, MobileIcon,NavMenu,NavItem,NavLinks, NavBtn,NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll'
const Navbar
 = ({toggle}) => {
  const [scrollNav,SetScrollNav]=useState(false)
  const changeNav=()=>{
    if(window.scrollY>=80)
    SetScrollNav(true)
  else
  SetScrollNav(false)
  }
  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to='/' onClick={toggleHome}>
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
            </MobileIcon >
            <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin' >Sign In</NavBtnLink>
            </NavBtn>
        </NavContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
