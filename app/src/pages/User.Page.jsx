import { FaUser, FaUserCog } from "react-icons/fa";
import PrivateRoute from "../helper/PrivateRoute";
import { PrintProfile } from "../components";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { connect } from "react-redux";
import { Logout } from "../store/action/authAction";

const UserPage = ({ auth, profile, data, loading, Logout }) => {
  const nav = useNavigate();

  return (
    <PrivateRoute check={!localStorage.token} path={"/"} route={"/home/user"}>
      <div className="lg:w-[80%] mx-auto paraText min-h-screen pb-10 sm:pb-0">
        <h1 className="text-3xl sm:text-5xl pt-5 headerText mb-5 font-bold text-blue-500">
          Dashboard
        </h1>
        <div className="flex text-xl items-center space-x-2">
          <FaUser />
          <h2 className="text-xl sm:text-2xl">
            Welcome {data && data.username}
          </h2>
        </div>
        <div>
          <div className={"flex flex-wrap gap-2 mt-3"}>
            <button
              onClick={() => nav("/edit&profile")}
              className={
                "btn gap-1  text-sm sm:text-base  justify-center bg-gray-500 flex items-center text-white dynamicEffect"
              }
            >
              <AiOutlineEdit />
              Edit Profile
            </button>

            <button
              onClick={() => nav("/add&education")}
              className={
                "btn gap-1  text-sm sm:text-base justify-center bg-gray-500 flex items-center text-white dynamicEffect"
              }
            >
              <MdOutlineCastForEducation />
              Add Education
            </button>

            <button
              onClick={() => nav("/add&experience")}
              className={
                "btn gap-1 text-sm sm:text-base justify-center bg-gray-500 flex items-center text-white dynamicEffect"
              }
            >
              <FaUserCog />
              Add Experience
            </button>

            <button
              onClick={() => {
                Logout();
                nav("/");
              }}
              className={
                "btn gap-1 text-sm sm:text-base justify-center bg-red-500 flex items-center text-white dynamicEffect"
              }
            >
              <BiLogOut />
              LogOut
            </button>
          </div>
          <PrintProfile profile={profile} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default connect(null, { Logout })(UserPage);
