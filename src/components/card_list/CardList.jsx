import React from 'react';
import Card from '../card/Card';

import styles from './card_list.module.css';

const CardList = ({ data, searchTerm }) => {
	return (
		<>
			{data.map((robot) => (
				<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
			))}
		</>
	);
};

export default CardList;
