import React from 'react';
import Education from '../components/Education'
import MyInfo from '../components/MyInfo'
import Skills from  '../components/Skills'
// import Footer from "../../shared/components/Footer/Footer"

const About = () => {
    return(
        <div>
            <MyInfo/>
            <Skills/>
            <Education/>
            {/* <Footer/> */}
        </div>
        )
};

export default About;