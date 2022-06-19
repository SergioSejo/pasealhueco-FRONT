import { types } from '../types/types';

const initialState = {
	optionActive: '',
};

export const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.menuStartLoad:
			return {
				optionActive: 'resumen',
			};
		case types.menuChangeOptionActive:
			return {
				optionActive: action.payload,
			};
		case types.menuDefaultOptionActive:
			return {
				optionActive: '',
			};
		default:
			return state;
	}
};
