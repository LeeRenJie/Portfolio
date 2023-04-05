import React from 'react';
import styles from './HobbyCard.module.scss';

const HobbyCard = props => {
    return (
        <div className={styles["hobbies-card"]}>
            <div className={styles["card-icon"]}>
                <>{props.icon}</>
            </div>
            <h3 className={styles["card-title"]}>
                {props.title}
            </h3>
            <p className={styles["card-text"]}>
                {props.text}
            </p>
        </div>
    )
};

export default HobbyCard;