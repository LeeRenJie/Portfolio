import React from 'react';
import HobbyList from './HobbyList'
import styles from './Hobbies.module.css'

const Hobbies = () => {
    const HOBBIES = [
        {id: 'h1',
        title: "FrontEnd",
        icon: <i className={`fas fa-desktop ${styles.icon}`}></i>,
        text:  "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {id: 'h2',
        title: "Blogging",
        icon: <i className={`fas fa-pen ${styles.icon}`}></i>,
        text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {id: 'h3',
        title: "Sports",
        icon: <i className={`fas fa-running ${styles.icon}`}></i>,
        text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];

    return(
        <div>
            <HobbyList items={HOBBIES}/>
        </div>
    )
};

export default Hobbies;