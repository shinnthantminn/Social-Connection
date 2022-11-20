import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../../access/animation/Loading/Loading";
import MenuNav from "./Menu.Nav";
import PrivateRoute from "../../helper/PrivateRoute";
import { FiMenu } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const Nav = ({ data, loading }) => {
  const btnRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        if (
          e.path[1] !== btnRef.current &&
          e.path[2] !== btnRef.current &&
          e.path[0].id !== "mobile"
        ) {
          setShow(false);
        }
      },
      true
    );
  }, []);

  const handleClick = () => {
    setShow((pre) => !pre);
  };

  return (
    <PrivateRoute check={!localStorage.token} path={"/"} route={"/home/user"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <nav className="w-full flex flex-wrap justify-between items-center px-3 sm:px-5 py-5 shadow relative">
            <Link to={"/home"}>
              <h1 className="headerText font-bold text-blue-500 text-lg sm:text-2xl">
                Social Connection
              </h1>
            </Link>
            <button ref={btnRef} onClick={handleClick} className="sm:hidden">
              <FiMenu />
            </button>
            <div
              id="mobile"
              className={
                show ? "mobile translate-x-[0px]" : "mobile translate-x-[500px]"
              }
            >
              <MenuNav data={data} />
            </div>
          </nav>
          <div className="w-[95%] mx-auto">
            <Outlet />
          </div>
        </>
      )}
    </PrivateRoute>
  );
};

export default Nav;
