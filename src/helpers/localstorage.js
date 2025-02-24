const AuthLocalStorage = {
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.log("save id error");
    }
  },
};

export default AuthLocalStorage;
