import { Navigate } from "react-router-dom";

const Defender = ({ children, protect, path }) => {
  if (!protect) {
    return <>{children}</>;
  } else {
    return <Navigate to={path} />;
  }
};

export default Defender;
