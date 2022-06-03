import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		dispatch(login('XYZ1234', 'Sergiete'));

		setTimeout(() => {
			dispatch(finishLoading());
		}, 3000);

		/*firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));

				dispatch(finishLoading());
			})
			.catch((e) => {
				console.log(e);
				dispatch(finishLoading());
				Swal.fire('Error', e.message, 'error');
			});*/
	};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		const uid = 'XYZ1234';
		const displayName = 'Sergiete';
		dispatch(login(uid, displayName));
		/*firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });

				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				console.log(e);
				Swal.fire('Error', e.message, 'error');
		});*/
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: { uid, displayName },
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		//await firebase.auth().signOut();

		dispatch(logout());
	};
};

export const logout = () => ({
	type: types.logout,
});
