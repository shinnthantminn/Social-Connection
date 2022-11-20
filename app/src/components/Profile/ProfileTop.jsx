import { ImEarth } from "react-icons/im";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Loading from "../../access/animation/Loading/Loading";

const ProfileTop = ({ profile }) => {
  return (
    <>
      {profile ? (
        <div className="w-full mt-10 py-20 min-h-[300px] !mx-0 rounded-sm shadow border paraText bg-teal-500">
          <div className="flex justify-center flex-col items-center">
            <img src={profile.user.avatar} alt="user.png" />
            <h1 className="text-4xl sm:text-5xl mt-5 text-white font-[600]">
              {profile.user.username}
            </h1>
            <p className="text-xl sm:text-2xl font-[600] text-white mt-3">
              {profile.status} at {profile.company}
            </p>
            <p className="text-xl font-[600] text-white mt-3">
              {profile.location}
            </p>
            <div className="text-2xl flex space-x-2 mt-3">
              {profile.website && (
                <a href={profile.website} target={"_blank"}>
                  <ImEarth className="hover:text-white duration-300" />
                </a>
              )}
              {profile.social.facebook && (
                <a href={profile.social.facebook} target={"_blank"}>
                  <BsFacebook className="hover:text-white duration-300" />
                </a>
              )}
              {profile.social.youtube && (
                <a href={profile.social.youtube} target={"_blank"}>
                  <BsYoutube className="hover:text-white duration-300" />
                </a>
              )}
              {profile.social.linkIn && (
                <a href={profile.social.linkIn} target={"_blank"}>
                  <BsLinkedin className="hover:text-white duration-300" />
                </a>
              )}
              {profile.social.instagram && (
                <a href={profile.social.instagram} target={"_blank"}>
                  <BsInstagram className="hover:text-white duration-300" />
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProfileTop;
