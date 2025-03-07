import React from "react";

function Input({ type = "text", label, id, state, setState }) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder=""
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Input;
