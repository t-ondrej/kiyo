import axios from "axios";

class UserService {

    getMe = () => axios.get('/me');
}

const instance = new UserService();
export default instance;