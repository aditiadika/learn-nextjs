import React from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainLayout';
import MyStyle from '../styles/main.css';

function Home(props) {
	return (
		<React.Fragment>
			<MainLayout>
				<p>abc</p>
				{/* <p className={MyStyle.superAwesome}>Username: {props.username}</p>
				<p>Name: {props.name}</p> */}
			</MainLayout>
		</React.Fragment>
	);
}

export async function getStaticProps() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
	const users = await res.data;

	return {
		props: {
			name: users.title,
			username: users.body
		}
	};
}

export default Home;
