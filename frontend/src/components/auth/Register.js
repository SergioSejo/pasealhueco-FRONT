import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

export const Register = () => {
	const dispatch = useDispatch();

	const { msgError } = useSelector((state) => state.ui);

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
			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleRegister}>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>

				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Confirm password"
					name="password2"
					className="auth__input"
					value={password2}
					onChange={handleInputChange}
				/>

				<button type="submit" className="btn btn-primary btn-block mb-5">
					Register
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
