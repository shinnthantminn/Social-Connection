import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../../access/animation/Loading/Loading";

const Nav = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <nav className="w-full flex justify-between px-3 sm:px-5 py-5 shadow">
            <Link to={"/home"}>
              <h1 className="headerText font-bold text-blue-500 text-lg sm:text-2xl">
                Social Connection
              </h1>
            </Link>
            <div>
              <div>
                <Link to={"/home/user"}>
                  <img
                    src={data && data.avatar}
                    alt="user.png"
                    className="w-[35px]"
                  />
                </Link>
              </div>
            </div>
          </nav>
          <div className="w-[95%] mx-auto">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
