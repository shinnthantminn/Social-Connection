import { Navigate } from "react-router-dom";
import Loading from "../access/animation/Loading/Loading";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, check, path, route = "/" }) => {
  const { profile, isLoading } = useSelector((state) => state.auth);

  isLoading

  if (check) {
    return <Navigate to={path} state={{ route }} />;
  }
  return <> {children}</>;
};

export default PrivateRoute;
