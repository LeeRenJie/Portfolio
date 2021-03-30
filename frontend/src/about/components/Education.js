import React from 'react';
import Timeline from './Timeline'
import style from '../../shared/styles/Title.module.scss'

const Education = () => {
    return(
        <>
            <div className={style['title-container']}>
                <h1 className={style.title}>
                My Education Pathway
                </h1>
            </div>
            <Timeline />
        </>
        )
}

export default Education;