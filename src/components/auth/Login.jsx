import React, { useState } from "react";
import Input from "../../ui/input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main class="form-signin w-100  h-100">
      <form className="w-25 m-auto">
        <h1 class="h3 mb-3 fw-normal">Please Login</h1>

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

        <button class="btn btn-primary w-100 py-2 mt-4" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
