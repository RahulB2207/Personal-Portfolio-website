import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import {DiCssdeck} from "react-icons/di";
import { Link as LinkR } from "react-router-dom";
import HeroBgAnimation from '../HeroBgAnimation'

const Container = styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
  background:#232333;
`;

const Wrapper = styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
display:flex;
flex-direction:column;
gap:100px;
justify-content:center;
align-items:center;
animation:zoom 10s infinity;

`;

const SubContainer = styled.div`
width: 500px;
border-radius: 10px;
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
padding: 12px 16px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
border:1px solid #854CE6;
gap: 12px;
transition: all 0.3s ease-in-out;
&:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
}
@media only screen and (max-width: 768px){
    padding: 12px;
    gap: 8px;
    width: 350px;
}
background: #232333;

`;
const Span = styled.span`
  color:white;
  font-weight:500;
`;

const ExploreButton = styled.button`
  width:100px;
  background:linear-gradient(141.27deg, rgba(204, 0, 187, 0.15) 50%, rgba(201, 32, 184, 0.15) 100%),linear-gradient(141.27deg, rgba(0, 70, 209, 0.15) 50%, rgba(0, 70, 209, 0.15) 100%);
  border: 2px solid #854CE6;
  border-radius:10px;
  color:white;
  padding:8px 2px;
  font-size: 15px;
  font-weight: 600;
  &:hover{
    cursor:pointer;

  }
  @media (max-width:768px){
    padding:5px 2px;
    font-size: 14px;
  }
`
const Conditions = styled.p`
  color:#ababab;
  font-size:14px;
  }
`;
const NavLogo = styled.a`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    margin:7px 12px;
    @media screen and (max-width: 640px) {
      padding: 0 0px;
  }
`;


const Intro = ({func}) =>{
    const val = true;
    return(
        <Container>
          
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
        <Wrapper>
           <SubContainer>
          
          <Span>
           <Typewriter 
              options={{
              strings:`<span style="color:#800080">import</span>  <span style="color:#318CE7">React</span> <span style="color: #800080">from</span> <span style="color:#318CE7">'react'</span>;</span><br/>const <span style="color:#FEBE10"> Portfolio </span> = <span style="color:#FEBE10">()</span> => <span style="color:#FEBE10">{</span> <br/> &nbsp <span style="color:#800080"> return ( </span><br/>   &nbsp &nbsp &nbsp  Welcome to my PortFolio  </br> <span style="color:#800080"> )</span>;</br> <span style="color:#FEBE10">} </span></br> export default <span style="color:#FEBE10"> Portfolio </span>; </br></br> <span style="color:#854CE6">Let's Explore My Journey! </span>`,
              autoStart:true,
              delay: 20,
              loop:false,                   
              }}/>
             </Span>
           <ExploreButton onClick={()=>func.check(val)}>Explore </ExploreButton>
           </SubContainer>
            <Conditions>&copy; 2023 Rahul Bhosale, All rights reserved.</Conditions> 
        </Wrapper>
          
        </Container>
    );
}

export default Intro;