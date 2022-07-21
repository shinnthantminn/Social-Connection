import React, { Suspense, useEffect } from "react";
const LandingPage = React.lazy(() => import("./pages/Landing.Page"));
import { CreateProfile, Home, User, Edit, AddEdu, AddExp } from "./pages";
import { Nav, LandingIntro, LoginForm, SignUpForm } from "./components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Alert from "./access/animation/Alert/Alert";
import setAuthHeader from "./helper/setAuthHeader";
import { useDispatch, useSelector } from "react-redux";
import { LoadAuth } from "./store/action/authAction";
import Loading from "./access/animation/Loading/Loading";

const App = () => {
  const nav = useNavigate();
  if (localStorage.token) {
    setAuthHeader(localStorage.token);
  }

  const dispatch = useDispatch();
  const { isAuthentication, isLoading, data, profile } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    LoadAuth(dispatch, nav);
  }, []);

  return (
    <div className="w-full lg:w-[95%] mx-auto sm:min-w-[100vw] min-h-screen">
      <Alert />
      <Routes>
        {/*Login and SignUp*/}

        <Route
          path={"/"}
          element={
            <Suspense fallback={<Loading />}>
              <LandingPage loading={isLoading} auth={isAuthentication} />
            </Suspense>
          }
        >
          <Route index element={<LandingIntro />} />
          <Route path={"login"} element={<LoginForm />} />
          <Route path={"signup"} element={<SignUpForm />} />
        </Route>

        {/*  Create Profile */}
        <Route
          path={"/add&profile"}
          element={
            <CreateProfile
              auth={isAuthentication}
              data={data}
              isLoading={isLoading}
            />
          }
        />

        {/*  Edit Profile */}
        <Route
          path={"/edit&profile"}
          element={
            <Edit
              auth={isAuthentication}
              data={data}
              profile={profile}
              isLoading={isLoading}
            />
          }
        />

        {/* Add Education */}
        <Route
          path={"/add&education"}
          element={
            <AddEdu
              auth={isAuthentication}
              data={data}
              profile={profile}
              isLoading={isLoading}
            />
          }
        />

        {/* Add Education */}
        <Route
          path={"/add&experience"}
          element={
            <AddExp
              auth={isAuthentication}
              data={data}
              profile={profile}
              isLoading={isLoading}
            />
          }
        />

        {/*  Main Home Route */}
        <Route path={"/home"} element={<Nav data={data} loading={isLoading} />}>
          <Route
            index
            element={
              <Home
                auth={isAuthentication}
                profile={profile}
                loading={isLoading}
              />
            }
          />
          <Route
            path={"user"}
            element={
              <User
                auth={isAuthentication}
                profile={profile}
                data={data}
                loading={isLoading}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
