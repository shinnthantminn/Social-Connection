import { Link } from "react-router-dom";

const LandingIntro = () => {
  return (
    <div className="text-center paraText flex justify-center items-center h-full flex-col">
      <h1 className="font-bold headerText text-2xl sm:text-4xl">
        Mini Social Connection
      </h1>
      <p>
        Create a profile/portfolio, share posts and get connection with other
      </p>
      <div className="space-x-2 mt-5">
        <button className="btn bg-blue-500 text-white dynamicEffect">
          <Link to={"/signup"}>Sign Up</Link>
        </button>
        <button className="btn ring-1 ring-gray-500 hover:bg-gray-400 hover:text-white">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingIntro;
