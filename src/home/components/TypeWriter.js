import React from 'react';
import styles from './TypeWriter.module.css';
import Typewriter from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.css';

const TypeWriter = () => {
  const allWords= [
  'CS Student.',
  'Web Developer.',
  'Block Chain Enthusiast.',
  'Blogger.'
];

  return (
    <div className={styles["tw-div"]}>
      <h5 className={styles.typewriter}>
        I am a {' '}
        <span className={styles['tw-span']}>
          <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
            words={allWords}
          />
        </span>
      </h5>
    </div>
  );
};

export default TypeWriter;