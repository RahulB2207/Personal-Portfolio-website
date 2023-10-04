import react from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const Card = styled.a`
    width: 330px;
    height: 460px;
    background-color: #171721;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 14px;
    margin-top:12px;
    text-decoration:none;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    
`; 

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 10px;
    object-fit:cover;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;
const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #854CE6;
    background-color: #373741;
    padding: 2px 8px;
    border-radius: 10px;
`;
const Heading = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #b1b2b3;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: #b1b2b3;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Desc = styled.div`
    font-weight: 400;
    color: #b1b2b3;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;
const ViewButton = styled.a`
width: 80%;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #F2F3F4;
    padding: 10px 14px;
    border-radius: 8px;
    background-color: transparent;
    border:1px solid  #854CE6;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: #854CE6;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ProjectCard = ({project}) =>{
return(
  <Card href={project.github} target='_blank'>
      <Image src={project.image}/>
      <Tags>
           {project.tags.map((tag)=>(
              <Tag key={tag}>{tag}</Tag>
           ))}
      </Tags>
      <Details>
        <Heading>{project.title}</Heading>
        <Date>{project.date}</Date>
        <Desc>{project.description}</Desc>
      </Details>
      <ViewButton href={project.github} target="_blank">View Code</ViewButton>
  </Card>
)
};

export default ProjectCard;