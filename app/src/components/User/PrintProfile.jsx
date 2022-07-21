import { connect } from "react-redux";
import { EduTable, ExpTable } from "../index";
import { deactivate } from "../../store/action/authAction";

const PrintProfile = ({ profile, deactivate }) => {
  const handleDrop = () => {
    deactivate();
  };

  return (
    <div>
      <h1 className="my-10 text-3xl sm:text-4xl text-teal-400 font-bold">
        Education Credential
      </h1>

      {profile.education.length === 0 ? (
        <h2 className="text-gray-400">You haven't Education info</h2>
      ) : (
        <EduTable profile={profile} />
      )}

      <h1 className="my-10 text-3xl sm:text-4xl text-teal-400 font-bold">
        Experience Credential
      </h1>
      {profile.experience.length === 0 ? (
        <h2 className="text-gray-400">You haven't Experience info</h2>
      ) : (
        <ExpTable profile={profile} />
      )}

      <div>
        <h3 className="text-xl mt-10">You want to deactivate your account</h3>
        <button
          onClick={handleDrop}
          className="btn text-white bg-red-500 mt-1 dynamicEffect"
        >
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp, { deactivate })(PrintProfile);
