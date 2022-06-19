import { types } from '../types/types';

export const menuStartLoad = () => {
	return {
		type: types.menuStartLoad,
		payload: 'resumen',
	};
};

export const menuChangeOptionActive = (option) => {
	return {
		type: types.menuChangeOptionActive,
		payload: option,
	};
};
