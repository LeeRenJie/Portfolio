import React from 'react';
import HobbyList from './HobbyList'
import styles from './Hobbies.module.css'

const Hobbies = () => {
    const HOBBIES = [
        {
            id: 'h1',
            title: "FrontEnd",
            icon: <i className={`fas fa-desktop ${styles.icon}`}></i>,
            text:  "I love making websites because it challenges my creativity."
        },
        {
            id: 'h2',
            title: "Blogging",
            icon: <i className={`fas fa-pen ${styles.icon}`}></i>,
            text: "I love writing about what I have learned and share my knowledge with others."
        },
        {
            id: 'h3',
            title: "Sports",
            icon: <i className={`fas fa-running ${styles.icon}`}></i>,
            text: "I love playing sports. Badminton, basketball, ping-pong, cycling, you name it!"
        },
    ];

    return(
        <div>
            <HobbyList items={HOBBIES}/>
        </div>
    )
};

export default Hobbies;