import React from 'react';
import styles from './HobbyList.module.scss';
import HobbyCard from './HobbyCard';

const HobbyList = props => {
	return(
		<div className={styles["hobbies-container"]}>
			{props.items.map(hobby =>(
				<HobbyCard
					key={hobby.id}
					id={hobby.id}
					icon={hobby.icon}
					title={hobby.title}
					text={hobby.text}
				/>
			))}
		</div>
	);
};

export default HobbyList;