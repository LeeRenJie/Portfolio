import React from 'react';
import styles from './MyInfoCard.module.scss'

const aboutInfo = "Sed lobortis dignissim convallis. Nullam porttitor scelerisque sagittis. Vestibulum et rutrum nunc, quis cursus odio. Curabitur eu aliquam diam. Nullam arcu mauris, lobortis rutrum imperdiet eget, gravida non velit. Maecenas sit amet odio placerat eros malesuada vestibulum. Integer dignissim eros quis dui dictum tristique. Etiam euismod scelerisque nisi, sed finibus urna gravida et. Mauris vehicula suscipit eleifend.Sed lobortis dignissim convallis. Nullam porttitor scelerisque sagittis."

const MyInfoCard = () => {
    return(
        <div>
        <div className={styles["styled-div"]} />
            <div className={styles["about-container"]}>
                <div className={styles["avatar-container"]}>
                    <img className={styles.avatar} src="../../../../public/images/Splash.jpg" alt="Avatar"/>
                </div>
                    <p className={styles["about-info"]}>
                    {aboutInfo}
                    </p>
            </div>
        </div>
        )
};

export default MyInfoCard;