const axios = require('axios');

const localhost = 'http://localhost:4000/api';

class matchService {
	getByYear = async (year) => {
		try {
			const token = localStorage.getItem('token') || '';
			const res = await axios.get(localhost + `/match/getByYear?year=${year}`, {
				headers: {
					'x-token': token,
				},
			});
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

export default matchService;
