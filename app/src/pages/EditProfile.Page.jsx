import { ProfileForm } from "../components";
import Loading from "../access/animation/Loading/Loading";
import PrivateRoute from "../helper/PrivateRoute";
import { Edit } from "../store/action/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfilePage = ({ profile, isLoading }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onSubmit = async (value) => {
    const res = await Edit(dispatch, value);
    if (res) {
      nav(-1);
    }
  };

  return (
    <PrivateRoute
      check={!localStorage.token}
      route={"/edit&profile"}
      path={"/"}
    >
      <div className="w-full flex justify-center items-center min-h-screen py-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card">
            <div className="mb-10">
              <h1 className="text-2xl font-semibold">
                Hello {profile?.user.username}
              </h1>
              <p className="text-gray-400">
                Edit your profile and stay updating
              </p>
            </div>
            <ProfileForm edit={true} onSubmit={onSubmit} profile={profile} />
          </div>
        )}
      </div>
    </PrivateRoute>
  );
};

export default EditProfilePage;
