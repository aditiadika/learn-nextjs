import React from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainLayout';
import '../styles/main.css';

function Home(props) {
	return (
		<React.Fragment>
			<MainLayout>
				<p className="superAwesome">Username: {props.username}</p>
				<p>Name: {props.name}</p>
			</MainLayout>
		</React.Fragment>
	);
}

export async function getStaticProps() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
	const users = await res.data;

	return {
		props: {
			name: users.name,
			username: users.username
		}
	};
}

export default Home;
