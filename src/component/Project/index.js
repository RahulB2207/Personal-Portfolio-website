import react from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard.js';
import { projects } from '../../data/constants';
const Container = styled.div`
background:linear-gradient(
   343.07deg,
   rgba(132,59,206,0.06)5.71%,
   rgba(132,59,206,0)64.83% 
);
   display:flex;
   flex-direction:column;
   justify-content:center;
   position:relative;
   z-index:1;
   align-items:center;
  clip-path:polygon(0 0,100% 0,100% 100%,100% 98%, 0 100%);
   
 `;

 const Wrapper = styled.div`
 max-width:1300px;
 position:relative;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 width:100%;
 gap:12px;
padding:10px 0px 100px 0;
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
 const CardContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 28px;
 flex-wrap: wrap;
`;

const Projects = () =>{
    return(
      <Container id="projects">
         <Wrapper>
         <Heading>Projects</Heading>
            <Desc>
                I have worked on wide range of Web Projects.Here are some of my projects.
            </Desc>
            
                 <CardContainer>
                 {projects.map((project)=>( 
                <ProjectCard project ={project} key={project.id}/>
                ))}
                </CardContainer>
            
         </Wrapper>
      </Container>
    );
}

export default Projects;