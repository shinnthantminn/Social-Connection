import PrivateRoute from "../helper/PrivateRoute";
import { Navigate } from "react-router-dom";

const HomePage = ({ auth, profile, loading }) => {
  if (loading === false && !profile && localStorage.token) {
    return <Navigate to={"/add&profile"} />;
  } else {
    return (
      <PrivateRoute
        check={!localStorage.token}
        path={"/"}
        profile={profile}
        route={"/home"}
      >
        <div>i am Home page</div>
      </PrivateRoute>
    );
  }
};

export default HomePage;
