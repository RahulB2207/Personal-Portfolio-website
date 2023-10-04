import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color:#191924;
  height:80px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1rem;
  position:sticky;
  top:0;
  z-index:10;
  @media screen and (max-width:960px){
    transition:0.8s all ease;
  }
`;

const Span = styled.div`
   padding:0 4px;
   font-weight:bold;
   font-size:18px;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 640px) {
      padding: 0 0px;
  }
`;

 const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #F2F3F4;
  }
`;

 const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

 const NavLink = styled.a`
    color: #F2F3F4;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: #854CE6;
    }

    &.active {
      border-bottom: 2px solid #854CE6;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
background-color:transparent;
  border: 1.8px solid #854CE6;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: #854CE6;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: #854CE6;
      color: #FFFFFF;     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 85px;
    color:white;
    width: 96%;
    padding: 12px 40px 24px 40px;
    background: linear-gradient(141.27deg, rgba(204, 0, 187, 0.15) 50%, rgba(201, 32, 184, 0.15) 100%),linear-gradient(141.27deg, rgba(0, 70, 209, 0.15) 50%, rgba(0, 70, 209, 0.15) 100%);
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    border: 0.1px solid #306EE8;
    border-radius: 20px 20px 20px 20px;
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};
    @media (min-width:768px){
      visibility:hidden;
      opacity:0;
    }
`;

 const MobileMenuLink = styled(LinkR)`
  color: #F2F3F4;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #854CE6;
  }
`;






const Navbar = () =>{
    const [open,setOpen] = React.useState(false);

    

     
    
    return(
    <Nav>
        < NavbarContainer>

            <NavLogo to="/"><a href="#"
                   style={{
                     display:"flex",
                     alignItems:"center",
                     color:"white",
                     marginBottom:"20",
                     cursor:"pointer",
                     textDecoration:"none"
                   }}>
                      <DiCssdeck size="3rem" /> <Span>Rahul</Span>
                </a></NavLogo>
            <MobileIcon>
                <FaBars onClick={()=>{
                    setOpen(!open);
                }}/>
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#education">Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
            </ButtonContainer>
            </NavbarContainer>
       
        {
            open && (
            <MobileMenu open={open}>
            <MobileMenuLink href="#about"  onClick={() => {
              setOpen(!open)}}>
                 About
            </MobileMenuLink>

            <MobileMenuLink href='#skills' onClick={() => {
              setOpen(!open)}}>
                Skills
            </MobileMenuLink>

            <MobileMenuLink href='#experience' onClick={() => {
              setOpen(!open)}}>
                Experience
            </MobileMenuLink>

            <MobileMenuLink href='#projects' onClick={() => {
              setOpen(!open)}}>
              Projects
            </MobileMenuLink>

            <MobileMenuLink href='#education' onClick={() => {
              setOpen(!open)}}>
              Education
            </MobileMenuLink>

            <GitHubButton style={{padding: '10px 16px',borderColor:'#171721',background:`#854CE6`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>  
        )}
 
    </Nav>
    );
}

export default Navbar;