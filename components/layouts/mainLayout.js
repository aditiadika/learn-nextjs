import React from 'react';
import Header from '../includes/header';

function MainLayout(props) {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
}

export default MainLayout;
