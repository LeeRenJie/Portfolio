import React, { Component } from 'react';
import './ParticlesBack.css'

import Particles from 'react-particles-js';
import particlesConfig from '../../config/configParticles';

class Background extends Component {
    render(){
        return (
            <Particles id="particles" params={particlesConfig} />
        )
    }
};

export default Background;
