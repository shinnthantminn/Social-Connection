import { ProfileForm } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import Loading from "../access/animation/Loading/Loading";
import PrivateRoute from "../helper/PrivateRoute";
import { Create } from "../store/action/authAction";
import { useNavigate } from "react-router-dom";

const CreateProfile = ({ auth, data, isLoading }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = async (value) => {
    const res = await Create(dispatch, value);
    if (res) {
      nav("/home");
    }
  };

  return (
    <PrivateRoute check={!auth} path={"/"}>
      <div className="lg:w-[50%] paraText mx-auto items-center py-10 flex justify-center flex-col">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="card">
              <div className="flex items-center space-x-2">
                <FaUser />
                <h1 className="text-xl sm:text-2xl headerText font-semibold ">
                  Welcome {data && data.username}
                </h1>
              </div>
              <p className="text-gray-400 mb-5">
                Create your profile for user information
              </p>
              <ProfileForm onSubmit={submit} edit={false} />
            </div>
          </>
        )}
      </div>
    </PrivateRoute>
  );
};

export default CreateProfile;
