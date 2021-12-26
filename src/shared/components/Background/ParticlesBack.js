import React from 'react';
import styles from './ParticlesBack.module.css'

import Particles from 'react-particles-js';
import particlesConfig from '../../config/configParticles';

const Background = () =>  {
        return (
            <Particles className={styles.particles} params={particlesConfig} />
        )
};

export default Background;
