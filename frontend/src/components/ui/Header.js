import React from 'react';

import { Container, Navbar } from 'react-bootstrap';

import logo from '../../images/icono.png';

export const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container className="header_logo">
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="80"
							height="80"
							className="d-inline-block align-top"
						/>{' '}
						Pase Al Hueco
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};
