import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Link id="header-link" to="/">
			<div>
				<h1 className="text-center text-warning mt-3 mb-4">Coinstar</h1>
			</div>
		</Link>
	)
}

export default Header;
