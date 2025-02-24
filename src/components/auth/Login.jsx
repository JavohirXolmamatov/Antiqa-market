import React, { useState } from "react";
import Input from "../../ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  userSignFailure,
  userSignStart,
  userSignSuccess,
} from "../../slice/auth";
import AuthService from "../../service/supabase.auth";
import ValidationError from "./ValidationError";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(userSignStart());
    try {
      const { data, error } = await AuthService.loginUser(user);
      if (error) {
        throw new Error(error.message);
      }
      dispatch(userSignSuccess(data));
    } catch (error) {
      dispatch(userSignFailure(error.message));
    }
  };

  return (
    <main className="form-signin w-100  d-flex" style={{ minHeight: "80dvh" }}>
      <form
        className="w-25 m-auto"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
        <ValidationError />

        <Input
          type={"email"}
          id={"emailAddress"}
          label={"Email address"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          id={"password"}
          label={"Password"}
          state={password}
          setState={setPassword}
        />

        <button
          className="btn btn-primary w-100 py-2 mt-4"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "loader..." : "Login"}
        </button>
      </form>
    </main>
  );
}

export default Login;
