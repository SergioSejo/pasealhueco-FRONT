const axios = require('axios');

const localhost = 'http://localhost:4000/api';

class authService {
	login = async (email, password) => {
		try {
			const res = await axios.post(localhost + '/auth', {
				email,
				password,
			});
			return res.data;
		} catch (ex) {
			if (ex.response.status === 400) {
				return ex.response.data;
			}
			console.log('authService.login: ', ex);
			return null;
		}
	};

	renew = async () => {
		try {
			const token = localStorage.getItem('token') || '';
			const res = await axios.get(localhost + '/auth/renew', {
				headers: {
					'x-token': token,
				},
			});
			return res.data;
		} catch (ex) {
			if (ex.response.status === 400) {
				return ex.response.data;
			}
			console.log('authService.renew: ', ex);
			return null;
		}
	};
}

export default authService;
