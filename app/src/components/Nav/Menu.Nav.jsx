import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";

const MenuNav = ({ data }) => {
  const { profile } = useSelector((state) => state.auth);

  return (
    <>
      <ul className="w-fit flex flex-col sm:flex-row  space-y-3 sm:space-y-0 sm:items-center text-lg font-semibold sm:space-x-5">
        <li className="sm:hidden">
          <button>
            <CgClose />
          </button>
        </li>
        <li>
          <NavLink to={"/home/dev"}>Developer</NavLink>
        </li>
        <li>
          <NavLink to={"/home/dashboard"}>Dashboard</NavLink>
        </li>
      </ul>
      <div className="w-fit">
        <NavLink to={`/profile/${profile?.user._id}`} className="!w-[35px]">
          <img src={data && data.avatar} alt="user.png" className="w-[35px]" />
        </NavLink>
      </div>
    </>
  );
};

export default MenuNav;
