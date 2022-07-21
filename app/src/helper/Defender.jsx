import PrivateRoute from "./PrivateRoute";
import Loading from "../access/animation/Loading/Loading";

const Defender = ({ auth, profile, loading, children, route }) => {
  return (
    <PrivateRoute check={auth} path={"/"} route={route}>
      <PrivateRoute check={!profile} path={"/add&profile"}>
        {loading ? <Loading /> : <>{children}</>}
      </PrivateRoute>
    </PrivateRoute>
  );
};

export default Defender;
