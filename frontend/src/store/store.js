import { combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	auth: authReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleware],
});
