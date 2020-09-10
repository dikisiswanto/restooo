import CONFIG from './config';

const API_ENDPOINT = {
	ALL_RESTAURANTS: `${CONFIG.API_BASE_URL}/list`,
	DETAIL_RESTAURANT: `${CONFIG.API_BASE_URL}/detail`,
	POST_REVIEW: `${CONFIG.API_BASE_URL}/review`,
};

export default API_ENDPOINT;
