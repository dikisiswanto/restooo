import API_ENDPOINT from '../data/api-endpoint';
import CONFIG from '../data/config';

class Api {
  static async getAllRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
      return await response.json();
    } catch (error) {
      return error;
    }
  }

  static async getRestaurant(id) {
    try {
      const response = await fetch(`${API_ENDPOINT.DETAIL_RESTAURANT}/${id}`);
      return await response.json();
    } catch (error) {
      return error;
    }
  }

  static async addReview(data) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.API_AUTH_TOKEN,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
      return response.json();
    } catch (error) {
      return error;
    }
  }
}

export default Api;
