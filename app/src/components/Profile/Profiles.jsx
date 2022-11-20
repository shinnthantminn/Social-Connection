import { Link } from "react-router-dom";

const Profiles = ({ data }) => {
  return (
    <div
      className="flex mb-5 justify-between items-center w-full border shadow paraText px-5 py-5 rounded"
      key={data._id}
    >
      <div className="flex sm:items-center sm:space-x-4 flex-col sm:flex-row">
        <img
          className="w-[70px] mb-5 sm:mb-0 sm:w-[250px]"
          src={data.user.avatar}
          alt=""
        />
        <div className="space-y-1">
          <h1 className="text-lg sm:text-2xl font-semibold ">
            {data.user.username}
          </h1>
          <p className="!mb-5 w-[80%] sm:w-full">{data.bio}</p>
          <p>{data.location}</p>
          <Link to={`/profile/${data.user._id}`}>
            <button className="btn bg-teal-500 text-white !mt-3 dynamicEffect">
              View Profile
            </button>
          </Link>
        </div>
      </div>

      <div>
        {data.skills.map(
          (i, inx) =>
            inx < 4 && (
              <span
                className="block bg-purple-500 cursor-pointer mb-1 rounded btn shadow text-white text-center"
                key={inx}
              >
                <p>{i}</p>
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default Profiles;
