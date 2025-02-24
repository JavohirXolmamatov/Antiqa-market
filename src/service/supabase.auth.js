import supabase from "./supabase.api";

const AuthService = {
  async registerUser(user) {
    const request = await supabase.auth.signUp(user);
    return request;
  },
  async loginUser(user) {
    const request = await supabase.auth.signInWithPassword(user);
    return request;
  },
  async getUser(token) {
    const request = await supabase.auth.getUser(token);
    return request;
  },
  async logOutUser(token) {
    const request = await supabase.auth.signOut(token);
    return request;
  },
};

export default AuthService;
