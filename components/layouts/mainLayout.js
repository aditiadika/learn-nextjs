import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';

function MainLayout(props) {
	return (
		<div>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
				/>
			</Head>
			<div className="mainLayout_container">
				<Header />
				<div className="container">{props.children}</div>
			</div>
		</div>
	);
}

export default MainLayout;
