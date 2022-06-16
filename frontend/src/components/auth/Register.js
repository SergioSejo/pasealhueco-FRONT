import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

import logo from '../../images/icono.png';

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
			<div className="auth__logoCenter">
				<img
					src={logo}
					alt="LOGO"
					width="80"
					height="80"
					className="center"
					rounded="true"
				/>
			</div>

			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleRegister}>
				<div>
					<label>Name</label>
					<input
						type="text"
						placeholder="Name"
						name="name"
						className="auth__input"
						autoComplete="off"
						value={name}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						name="email"
						type="email"
						className="auth__input"
						autoComplete="off"
						placeholder="name@example.com"
						value={email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						name="password"
						type="password"
						className="auth__input"
						autoComplete="off"
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Confirm Password</label>
					<input
						name="password2"
						type="password"
						className="auth__input"
						autoComplete="off"
						value={password2}
						onChange={handleInputChange}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}
				>
					Register
				</button>
				<a href="/auth/login" className="link">
					Already registered?
				</a>
			</form>
		</>
	);
};
