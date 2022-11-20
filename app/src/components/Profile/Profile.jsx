import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getById, getAll } from "../../store/action/profileAction";
import PrivateRoute from "../../helper/PrivateRoute";
import Loading from "../../access/animation/Loading/Loading";
import ProfileTop from "./ProfileTop";
import AboutProfile from "./About.Profile";
import EducationProfile from "./Education.profile";
import ExperienceProfile from "./Experience.profile";
import GithubProfile from "./Github.profile";
import { profileFail } from "../../store/slicer/profileSlicer";

const Profile = ({ profile, getById, auth, profileFail }) => {
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getById(params.id);
    return () => {
      profileFail();
    };
  }, []);

  return (
    <PrivateRoute
      route={`/profile/${params.id}`}
      check={!localStorage.token}
      path={"/"}
    >
      {profile.isLoading ? (
        <Loading />
      ) : (
        <div className="w-full px-2 lg:w-[90%] 2xl:w-[65%] pb-20 space-x-2 lg:mx-auto min-h-screen paraText pt-5">
          <button
            onClick={() => nav(-1)}
            className="btn bg-gray-500 text-white !rounded-sm dynamicEffect"
          >
            Back to Profiles
          </button>
          {profile.profile && auth.data && (
            <>
              {profile.profile.user._id === auth.data._id && (
                <Link to={"/edit&profile"}>
                  <button className="btn !rounded-sm bg-black text-white">
                    Edit Your Profile
                  </button>
                </Link>
              )}
              <ProfileTop profile={profile.profile} />
              <AboutProfile profile={profile.profile} />
              <div className="grid !mx-0 grid-cols-9 gap-2 w-full">
                <div className="col-span-9 lg:col-span-5">
                  <div className="border h-full paraText border-gray-300 py-8 px-5">
                    {profile.profile.experience.length === 0 ? (
                      <h1 className="text-2xl font-[600]">
                        Experience credential not found
                      </h1>
                    ) : (
                      <div>
                        <h1 className="text-3xl font-[400] text-teal-500">
                          Experience
                        </h1>
                        <div className="divide-y divide-slate-200">
                          {profile.profile.experience.map((i) => (
                            <div key={i._id}>
                              <ExperienceProfile exp={i} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-9 lg:col-span-4 ">
                  <div className="border paraText h-full border-gray-300 py-8 px-5">
                    {profile.profile.education.length === 0 ? (
                      <h1 className="text-2xl font-[600]">
                        Education credential not found
                      </h1>
                    ) : (
                      <div>
                        <h1 className="text-3xl font-[400] text-teal-500">
                          Education
                        </h1>
                        <div className="divide-y divide-slate-200">
                          {profile.profile.education.map((i) => (
                            <div key={i._id}>
                              <EducationProfile edu={i} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <GithubProfile name={profile.profile.githubUsername} />
            </>
          )}
        </div>
      )}
    </PrivateRoute>
  );
};

const mapPropToState = (state) => ({
  auth: state.auth,
  profile: state.profiles,
});

export default connect(mapPropToState, { getById, profileFail })(Profile);
