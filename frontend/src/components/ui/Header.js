import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Navbar, Button } from 'react-bootstrap';

import logo from '../../images/icono.png';

export const Header = () => {
	const { name } = useSelector((state) => state.auth);
	return (
		<>
			<Navbar variant="dark">
				<Container className="header_logo header_left_rigth">
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="80"
							height="80"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				</Container>
				<Container>PASE AL HUECO</Container>
				<Container className="header_left_rigth">
					<span className="header_buttons">Hola {name}!</span>
					<Button className="header_buttons">Salir</Button>
				</Container>
			</Navbar>
		</>
	);
};
