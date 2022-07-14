import { LeftAnimation } from "../components";
import { Outlet } from "react-router-dom";
import Defender from "../helper/Defender";
import Loading from "../access/animation/Loading/Loading";

const LandingPage = ({ auth, loading }) => {
  return (
    <Defender protect={auth} path={"/definder"}>
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
    </Defender>
  );
};

export default LandingPage;
