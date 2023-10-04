import React from "react";
import styled from "styled-components";
 import { skills } from "../../data/constants";

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

  @media (max-width:768px){
    font-size:16px;
 }
 `;

 const SkillsContainer = styled.div`
   width:100%;
   display:flex;
   flex-wrap:wrap;
   margin-top:30px;
   justify-content:center;
   gap:30px;
  
 `;

 const SkillName = styled.div`
   width:380px;
   height:400px;
   background-color:#171721;
   border:1px  solid #854CE6;
   border-radius:10px;
   padding:18px 36px;
   @media (max-width:768px){
    max-width:400px;
    padding:12px 36px;
 }
 @media (max-width:500px){
    max-width:330px;
    height:350px;
    padding:10px 36px;
 }
 `;

 const SkillTitle  = styled.h2`
   font-size:28px;
   font-weight:600;
   color:#F2F3F4;
   margin-bottom:20px;
   text-align:center;
 `;
 
 const List = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:12px;
  margin-bottom:20px;
 `;

 const SkillItem = styled.div`
   display:flex;
   align-items:center;
   gap:8px;
   justify-content:center;
   font-size:16px;
   color:#F2F3F4;
   border:1px solid #854CE6;
   box-shadow:1px 1px 5px  #854CE6;
   border-radius:12px;
   padding:12px 16px;
   font-weight:400;

   @media (max-width:768px){
    font-size:14px;
    padding:8px 12px;
 }
 @media (max-width:500px){
    font-size:14px;
    padding:6px 12px;
 }
 `;

 const SkillImage = styled.img`
   height:20px;
   width:20px;
 `
 


const Skills = () =>{
    return(
        <Container id="skills">
          <Wrapper>
            <Heading>Skills</Heading>
            <Desc>
                 Here are some of my skills on which I have been working on for the past 2 years.
            </Desc>
            <SkillsContainer>
                {skills.map((item)=>(
                 <SkillName>
                    <SkillTitle>{item.title}</SkillTitle>
                     <List>
                        {
                           item.skills.map((skill)=>(
                                <SkillItem>
                                    <SkillImage src={skill.image }/>{skill.name}
                                </SkillItem>
                            ))
                        }
                       
                    </List> 
                 </SkillName>
               ) )}
            </SkillsContainer> 
          </Wrapper>
        </Container>   
    );
}

export default Skills;