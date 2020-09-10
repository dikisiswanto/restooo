import { openDB } from 'idb';
import CONFIG from '../data/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

class Database {
	static async init() {
		this.instance = await openDB(DATABASE_NAME, DATABASE_VERSION, {
			upgrade(database) {
				database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
			},
		});
	}

	static getAllRestaurants() {
		return this.instance.getAll(OBJECT_STORE_NAME);
	}

	static getRestaurant(id) {
		return this.instance.get(OBJECT_STORE_NAME, id);
	}

	static addRestaurant(restaurant) {
		return this.instance.put(OBJECT_STORE_NAME, restaurant);
	}

	static deleteRestaurant(id) {
		return this.instance.delete(OBJECT_STORE_NAME, id);
	}
}

export default Database;
