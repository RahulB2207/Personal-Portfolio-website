import react from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import { experiences } from '../../data/constants.js';
import ExperienceCard from '../Cards/ExperienceCard.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
    
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Heading = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: #F2F3F4;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: white;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
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

const Content = styled.div`

`


const Experience = () =>{
    return(
       <Container id='experience'>
        <Wrapper>
            <Heading>Experience</Heading>
            <Desc>Here are some of my internships</Desc>
            <TimeLineSection>
                <Timeline>
                      {experiences.map((experience)=>( 
                               <Content>
                                 <ExperienceCard experience = {experience}/>
                               </Content>
                     ))} 
                </Timeline>
            </TimeLineSection> 

        </Wrapper>
       </Container>
    )
};

export default Experience;
