import { types } from '../types/types';

export const changeOptionActive = (user) => {
	return {
		type: types.authLogin,
		payload: user,
	};
};
