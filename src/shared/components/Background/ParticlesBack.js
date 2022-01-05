import React from 'react';
import styles from './ParticlesBack.module.css'

import Particles from 'react-tsparticles';
import particlesConfig from '../../config/configParticles';

const Background = () =>  {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            className={styles.particles}
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />
    )
};

export default Background;
