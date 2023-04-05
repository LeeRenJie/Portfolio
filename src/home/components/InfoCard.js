import React from 'react';
import styles from './InfoCard.module.css';
import CardTitle from './CardTitle';
import TypeWriter from './TypeWriter';

const InfoCard = () => {
  return(
    <div className={styles['card-container']}>
      <div className={styles['info-card']}>
        <CardTitle/>
        <TypeWriter/>
      </div>
    </div>
  );
};

export default InfoCard;