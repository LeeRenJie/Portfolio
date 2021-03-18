import React from 'react';
import styles from './InfoCard.module.css'
import CardTitle from './CardTitle'
import TypeWriter from './TypeWriter'

const InfoCard = () => {
    return(

    <div className={styles['info-card']}>
    <div className={styles['info-card-position']}>
        <CardTitle/>
        <TypeWriter/>
    </div>
    </div>
            )
}

export default InfoCard;