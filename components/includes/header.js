import React from 'react';
import Link from 'next/link';

function Header() {
	return (
		<React.Fragment>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
				<Link href="/about">
					<a>About Us</a>
				</Link>
			</nav>
		</React.Fragment>
	);
}

export default Header;
