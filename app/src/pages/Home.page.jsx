import PrivateRoute from "../helper/PrivateRoute";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Footer, MainPost } from "../components";

const HomePage = ({ auth, profile, loading }) => {
  useEffect(() => {
    document.title = "Social | Home";
  }, []);

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
        <MainPost />
        <Footer />
      </PrivateRoute>
    );
  }
};

export default HomePage;
