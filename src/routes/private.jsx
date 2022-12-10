import { Navigate } from "react-router-dom";

const Private = ({ Component }) => {
  const session = JSON.parse(localStorage.getItem("startdev-labs"));

  return session?.logged ? <Component /> : <Navigate to="/login" />;
};

export default Private;
