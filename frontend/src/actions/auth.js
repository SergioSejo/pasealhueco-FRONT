import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';
import authService from '../services/authService';
import userService from '../services/userService';

import Swal from 'sweetalert2';

export const startLogin = (email, password) => {
	return async (dispatch) => {
		dispatch(startLoading());

		const authServices = new authService();

		const resp = await authServices.login(email, password);
		if (resp) {
			const body = resp.body;

			if (body.ok) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', new Date().getTime());

				dispatch(
					login({
						uid: body.uid,
						name: body.name,
					})
				);
				dispatch(startLoadMenu());
			} else {
				Swal.fire('Login ', body.msg, 'error');
			}
		}

		dispatch(finishLoading());
	};
};

export const startChecking = () => {
	return async (dispatch) => {
		const authServices = new authService();
		const resp = await authServices.renew();
		if (resp) {
			const body = resp.body;
			console.log('body: ', body);
			if (body.ok) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', new Date().getTime());

				dispatch(
					login({
						uid: body.uid,
						name: body.name,
					})
				);
				dispatch(startLoadMenu());
			}
		}
		dispatch(finishChecking());
	};
};

const finishChecking = () => ({ type: types.authFinishChecking });

const login = (user) => {
	return {
		type: types.authLogin,
		payload: user,
	};
};

export const startLogout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch(logout());
		dispatch(defaultOptionMenu());
	};
};

const logout = () => ({ type: types.authLogout });

const defaultOptionMenu = () => ({ type: types.menuDefaultOptionActive });

const startLoadMenu = () => ({ type: types.menuStartLoad });

export const startRegister = (name, email, password) => {
	return async (dispatch) => {
		const userServices = new userService();
		const resp = await userServices.register(name, email, password);
		if (resp) {
			const body = resp.body;

			if (body.ok) {
				localStorage.setItem('token', body.token);
				localStorage.setItem('token-init-date', new Date().getTime());

				dispatch(
					login({
						uid: body.uid,
						name: body.name,
					})
				);
				dispatch(startLoadMenu());
			} else {
				Swal.fire('Registro ', body.msg, 'error');
			}
		} else {
			Swal.fire('Registro: ', 'ha ocurriro un error inesperado', 'error');
		}
	};
};
