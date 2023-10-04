import React from 'react';
import { Box, ThemeProvider} from '@mui/material';
import './App.css';
import styled from 'styled-components';
import { darkTheme } from './utils/Themes.js';
import Navbar from './component/Navbar';
import Hero from './component/HeroSection';
import Skills from './component/Skills';
import Education from './component/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './component/Experience';
import Projects from './component/Project';
import Contact from './component/Contact/contact';
import Footer from './component/Footer';
import Intro from './component/Intro';

const Body = styled(Box)(({theme})=>({
  backgroundColor:'#232333',
  width: '100%',
  overflowX: 'hidden',
 
}))

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;



function App() {
  const[status,setStatus] = React.useState(false);

 const check = (data) =>{
    if(data == true){
      setStatus(true);
    }
 }

  
  return (
    
    <ThemeProvider theme={darkTheme}>
    {
      status ? 
      <Router>  
      <Navbar/>
       <Body>
         <Hero/>
         <Wrapper>
          <Skills/>
          <Experience/>
         </Wrapper>
         <Projects/>
         <Wrapper>
          <Education/>
          <Contact/>
         </Wrapper>
         <Footer/>
       </Body>
      </Router>
      :
      <Intro func={{check}}/>
    }
    </ThemeProvider>
  );
}

export default App;
