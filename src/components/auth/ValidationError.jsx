import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);

  return (
    error !== null && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  );
}

export default ValidationError;
