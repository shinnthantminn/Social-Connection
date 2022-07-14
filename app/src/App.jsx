import React, { Suspense, useEffect } from "react";
const LandingPage = React.lazy(() => import("./pages/Landing.Page"));
import { Nav, LandingIntro, LoginForm, SignUpForm } from "./components";
import { Route, Routes } from "react-router-dom";
import Alert from "./access/animation/Alert/Alert";
import setAuthHeader from "./helper/setAuthHeader";
import { useDispatch, useSelector } from "react-redux";
import { LoadAuth } from "./store/action/authAction";
import Loading from "./access/animation/Loading/Loading";
import Definder from "./helper/Definder";

if (localStorage.token) {
  setAuthHeader(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();
  const { isAuthentication, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    LoadAuth(dispatch);
  }, []);

  return (
    <div className="w-[95%] mx-auto sm:min-w-[100vw] h-screen overflow-hidden">
      <Alert />
      <Routes>
        <Route
          path={"/"}
          element={
            <Suspense fallback={<Loading />}>
              <LandingPage auth={isAuthentication} loading={isLoading} />
            </Suspense>
          }
        >
          <Route index element={<LandingIntro />} />
          <Route path={"login"} element={<LoginForm />} />
          <Route path={"signup"} element={<SignUpForm />} />
        </Route>
        <Route
          path={"/definder"}
          element={<Definder auth={isAuthentication} />}
        />
      </Routes>
    </div>
  );
};

export default App;
