export const STORAGE_KEYS = {
    accessToken: 'access_token',
		expiresIn: 'expires_in'
};

class TokenService {

	getAccessToken = () => localStorage.getItem(STORAGE_KEYS.accessToken);

	setToken = (token) => {
		Object.values(STORAGE_KEYS)
					.filter(storageKey => !!token[storageKey])
					.forEach(storageKey => localStorage.setItem(storageKey, token[storageKey]));
	};

	clearToken = () => {
		Object.values(STORAGE_KEYS)
					.forEach(storageKey => localStorage.removeItem(storageKey))
	};
}

const instance = new TokenService();
export default instance;