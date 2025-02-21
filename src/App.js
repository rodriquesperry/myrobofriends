import React from 'react';
import CardList from './components/card_list/CardList';
import styles from './App.module.css';

function App() {
	return (
		<>
			<header className={styles.header}>
				<h1>MyRoboFriends</h1>
				<input type='text' placeholder='search MyRoboFriends...' />
			</header>
			<main className={styles.main_container}>
				<div className={styles.class_list}>
					<CardList />
				</div>
			</main>
		</>
	);
}

export default App;
