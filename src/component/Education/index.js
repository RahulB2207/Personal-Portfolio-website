import React from "react"; 
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   position:relative;
   z-index:1;
   align-items:center;
 `;

 const Wrapper = styled.div`
 max-width:1100px;
 position:relative;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 width:100%;
 gap:12px;

 `;

 const Heading = styled.h1`
 font-size:42px;
 font-weight:600;
 text-align:center;
 margin-top:20px;
 color:white;

 @media (max-width:768px){
    margin-top:12px;
    font-size:32px;
 }
 `;

 const Desc = styled.div`
  font-size:18px;
  max-width:600px;
  text-align:center;
  color:white;
  padding:0 20px;
  @media (max-width:768px){
    font-size:16px;
 }
 `;
 const Content = styled.div`
`;

 const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Education = () =>{
    return(
        <Container id='education'>
        <Wrapper>
            <Heading>Education</Heading>
            <Desc>My education has been a journey of self-discover and growth.My educational details are as follows.</Desc>
            <TimeLineSection>
            {education.map((education)=>( 
                               <Content>
                                  <EducationCard education = {education}/> 
                               </Content>
                     ))} 
            </TimeLineSection> 

        </Wrapper>
       </Container>
    );
}

export default Education;