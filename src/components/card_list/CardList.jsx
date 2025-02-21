import React from 'react';
import Card from '../card/Card';
import { robots } from '../../robots';

import styles from './card_list.module.css';

const CardList = () => {
	return (
		<>
			{robots.map((robot) => (
				<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
			))}
		</>
	);
};

export default CardList;
