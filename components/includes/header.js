import React from 'react';
import Link from 'next/link';

function Header() {
	return (
		<React.Fragment>
			<header>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
						<Link href="/">
							<a className="navbar-brand">My Awesome App</a>
						</Link>
						<div className="collapse navbar-collapse">
							<div className="navbar-nav">
								<Link href="/">
									<a className="nav-item nav-link">Home</a>
								</Link>
								<Link href="/contact">
									<a className="nav-item nav-link">Contact</a>
								</Link>
								<Link href="/about">
									<a className="nav-item nav-link">About Us</a>
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
