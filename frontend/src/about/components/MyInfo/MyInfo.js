import React from 'react';
import MyInfoCard from './MyInfoCard'
import Hobbies from './Hobbies/Hobbies'

import style from '../../../shared/styles/Title.module.scss'

const MyInfo = () => {
    return(
        <div>
            <div className={style["title-container"]}>
                <h1 className={style.title}>About Me</h1>
            </div>
            <MyInfoCard />
            <Hobbies />
        </div>

        )
};

export default MyInfo;