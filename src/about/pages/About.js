import React from 'react';
import Education from '../components/Education/Education';
import MyInfo from '../components/MyInfo/MyInfo';
import Skills from  '../components/Skills/Skills';
// import Footer from "../../shared/components/Footer/Footer"

const About = () => {
  return(
    <div style={{ backgroundColor: "#232323" }}>
      <MyInfo/>
      <Skills/>
      <Education/>
      {/* <Footer/> */}
    </div>
  );
};

export default About;