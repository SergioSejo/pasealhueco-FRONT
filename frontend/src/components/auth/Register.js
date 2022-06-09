import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

import logo from '../../images/icono.png';

import { Button, Form, Image, Container } from 'react-bootstrap';

export const Register = () => {
	const dispatch = useDispatch();

	const { msgError, loading } = useSelector((state) => state.ui);

	useEffect(() => {
		if (msgError) showError(msgError);
	}, [msgError]);

	const [formValues, handleInputChange] = useForm({
		name: 'Sergio',
		email: 'sergio.sejo@gmail.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startRegister(name, email, password));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Nombre es obligatorio'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email incorrecto'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(
				setError(
					'Las contraseñas deben ser iguales y contener al menos 6 caracteres'
				)
			);
			return false;
		}
		dispatch(removeError());
		return true;
	};

	const showError = (msg) => {
		return Swal.fire('Error', msg, 'error');
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

			<h3 className="auth__title">Register</h3>

			<Form onSubmit={handleRegister}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Name"
						name="name"
						className="auth__input"
						autoComplete="off"
						value={name}
						onChange={handleInputChange}
					/>
				</Form.Group>
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
						value={password}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						name="password2"
						type="password"
						className="auth__input"
						autoComplete="off"
						value={password2}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}
				>
					Register
				</Button>
				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</Form>
		</>
	);
};
