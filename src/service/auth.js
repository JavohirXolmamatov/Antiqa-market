import axios from "./api";

const AuthService = {
  async registerUser(user) {
    const request = await axios.post("", { user });
    return request;
  },

  async loginUser(user) {
    const request = await axios.post("", { user });
    return request;
  },

  async getUser(token) {
    const request = await axios.get("", token);
    return request;
  },
};

export default AuthService;
