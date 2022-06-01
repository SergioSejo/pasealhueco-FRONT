import { types } from '../types/types';

export const starLogin = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(123, 'sergio'));
		}, 3000);
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: { uid, displayName },
	};
};
