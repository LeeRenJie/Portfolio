import React from 'react';
import styles from './MyInfoCard.module.css'
import splash from '../../images/Splash.jpg'

const aboutInfo = "Sed lobortis dignissim convallis. Nullam porttitor scelerisque sagittis. Vestibulum et rutrum nunc, quis cursus odio. Curabitur eu aliquam diam. Nullam arcu mauris, lobortis rutrum imperdiet eget, gravida non velit. Maecenas sit amet odio placerat eros malesuada vestibulum. Integer dignissim eros quis dui dictum tristique. Etiam euismod scelerisque nisi, sed finibus urna gravida et. Mauris vehicula suscipit eleifend."

const MyInfoCard = () => {
    return(
        <div>
            <div className={styles["avatar-container"]}>
                <img className={styles.avatar} src={splash} alt="Avatar"/>
            </div>
            <div className={styles["info-container"]}> 
                <p className={styles["about-info"]}> 
                {aboutInfo}
                </p>
            </div>
        </div>
        )
}

export default MyInfoCard;