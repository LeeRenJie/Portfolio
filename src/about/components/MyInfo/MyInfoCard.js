import React from 'react';
import styles from './MyInfoCard.module.scss'

const aboutInfo = "My name is Lee Ren Jie. I am aspiring to be a Web/Block Chain Developer! "+
                "I am a computer science student studying at Asia Pacific University. I am also a passionate and curious person. "+
                "I write articles on Hashnode and do self-learning to keep myself updated with the cutting-edge technologies. " +
                "I love sports, music, and sushi 🍣! "

const MyInfoCard = () => {
    return(
        <div>
            <div className={styles["styled-div"]}></div>
            <div className={styles["about-container"]}>
                <div className={styles["avatar-container"]}>
                    <img className={styles.avatar} src={process.env.PUBLIC_URL + "/images/Splash.jpg"} alt="Avatar"/>
                </div>
                    <p className={styles["about-info"]}>{aboutInfo}</p>
            </div>
        </div>
        )
};

export default MyInfoCard;