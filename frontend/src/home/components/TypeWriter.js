import React from 'react' 
import styles from './TypeWriter.module.css'

import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

const TypeWriter = () => {
  const allWords= [
  'a Student.', 
  'a Web Developer.', 
  'an AI Enthusiast.', 
  'an Open Source Contributor.']

  return (
    <div className={styles["tw-div"]}>
      <h4 className={styles.typewriter}>
        I am {' '}
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
      </h4>
    </div>
  )
}

export default TypeWriter;