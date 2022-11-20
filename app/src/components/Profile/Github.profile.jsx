import { githubUser } from "../../store/action/profileAction";
import { connect } from "react-redux";
import { useEffect, memo } from "react";
import { fetch } from "../../BaseUrl";
import { BsGithub } from "react-icons/bs";
import GithubItemProfile from "./GithubItem.profile";

const GithubProfile = ({ name, profile, githubUser }) => {
  useEffect(() => {
    githubUser(name);
  }, [profile.profile.githubUsername]);

  return (
    <>
      {profile.repo.repoLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {profile.repo.item && (
            <div className="w-full !ml-0">
              <h1 className="text-3xl my-5 font-bold text-teal-400 flex items-center">
                Latest Repo in GitHub
                <BsGithub className="ml-1" />
              </h1>
              <div className="w-full space-y-3">
                {profile.repo.item.map((i, inx) => (
                  <GithubItemProfile key={inx} data={i} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProp = (state) => ({
  profile: state.profiles,
});

export default connect(mapStateToProp, { githubUser })(memo(GithubProfile));
