const axios = require('axios');

const localhost = 'http://localhost:4000/api';

class playerService {
	register = async (name, email, password) => {
		try {
			const body = { name, email, password };
			const res = await axios.post(localhost + '/player/create', body);
			return res.data;
		} catch (ex) {
			if (ex.response.status === 400) {
				return ex.response.data;
			}
			console.log('authService.register: ', ex);
			return null;
		}
	};
}

export default playerService;
