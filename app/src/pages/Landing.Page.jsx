import { LeftAnimation } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../access/animation/Loading/Loading";
import PrivateRoute from "../helper/PrivateRoute";

const LandingPage = ({ loading, auth }) => {
  const location = useLocation();
  return (
    <>
      <PrivateRoute
        check={auth}
        path={location.state ? location.state.route : "/home"}
      >
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-12 h-screen">
            <div className="hidden lg:block lg:col-span-6">
              <LeftAnimation />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Outlet />
            </div>
          </div>
        )}
      </PrivateRoute>
    </>
  );
};

export default LandingPage;
