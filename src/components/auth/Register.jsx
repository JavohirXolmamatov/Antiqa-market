import React, { useState } from "react";
import Input from "../../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterStart } from "../../slice/auth";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(userRegisterStart());
  };
  return (
    <main className="form-signin w-100  d-flex" style={{ minHeight: "80dvh" }}>
      <form
        className="w-25 m-auto"
        onSubmit={(e) => {
          handleRegister(e);
        }}
      >
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <Input
          id={"username"}
          label={"Username"}
          state={username}
          setState={setUsername}
        />
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
          {isLoading ? "loader..." : "Register"}
        </button>
      </form>
    </main>
  );
}

export default Register;
