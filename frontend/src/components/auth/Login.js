import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import { Button, Form, Image, Container } from 'react-bootstrap';

import logo from '../../images/icono.png';

export const Login = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: 'sergio.sejo@gmail.com',
		password: '123456',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(email, password));
	};

	return (
		<>
			<Container className="auth__logoCenter">
				<Image
					src={logo}
					alt="LOGO"
					width="80"
					height="80"
					className="center"
					rounded
				/>
			</Container>

			<h3 className="auth__title">Login</h3>

			<Form onSubmit={handleLogin}>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="email"
						className="auth__input"
						autoComplete="off"
						placeholder="name@example.com"
						value={email}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						className="auth__input"
						autoComplete="off"
						placeholder="name@example.com"
						value={password}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}
				>
					Login
				</Button>
				<Link to="/auth/register" className="link">
					Create new account
				</Link>
			</Form>
		</>
	);
};
