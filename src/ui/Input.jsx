import React from "react";

function Input({ type = "text", label, id, state, setState }) {
  return (
    <div class="form-floating">
      <input
        type={type}
        class="form-control"
        id={id}
        placeholder=""
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label for={id}>{label}</label>
    </div>
  );
}

export default Input;
