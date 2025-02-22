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
  async getUser() {
    const request = await supabase.auth.getUser();
    return request;
  },
  async logOutUser() {
    const request = await supabase.auth.signOut();
    return request;
  },
};

export default AuthService;
