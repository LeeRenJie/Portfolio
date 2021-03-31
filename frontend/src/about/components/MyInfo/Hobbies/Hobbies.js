import React from 'react';
import HobbyList from './HobbyList'

const Hobbies = () => {
    const HOBBIES = [
        {id: 'h1',
        title: "FrontEnd", 
        icon: '',
        text:  "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {id: 'h2',
        title: "Blogging", 
        icon: '',
        text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {id: 'h3',
        title: "Sports", 
        icon: '',
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