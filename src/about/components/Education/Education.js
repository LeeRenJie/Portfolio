import React from 'react';
import EducationList from './EducationList'
import style from './Education.module..css'

const Education = () => {
    return(
        <>
            <div className={style['title-container']}>
                <h1 className={style.title}>
                My Education Pathway
                </h1>
            </div>
            <EducationList/>
        </>
        )
}

export default Education;