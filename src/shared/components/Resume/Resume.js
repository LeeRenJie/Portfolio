import React from 'react'
import styles from './Resume.module.css'

const Resume = () => {
    return (
            <a
            className={styles.resume}
            href="LeeRenJieResume.pdf"
            // target="_blank"
            download="LeeRenJie's Resume"
            >
                <i className={`fas fa-download ${styles.icon}`}/>
                Resume
            </a>
    )
}

export default Resume;