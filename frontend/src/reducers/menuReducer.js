import { types } from '../types/types';

const initialState = {
	optionActive: 'principal',
};

export const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.menuChangeOptionActive:
			return {
				optionActive: action.payload,
			};
		default:
			return state;
	}
};
