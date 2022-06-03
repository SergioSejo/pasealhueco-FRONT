import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleware],
});
