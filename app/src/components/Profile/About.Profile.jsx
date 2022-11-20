import { BsCheck } from "react-icons/bs";

const AboutProfile = ({ profile }) => {
  return (
    <div className="w-full !mx-0 flex mt-5 items-center justify-center pb-5">
      <div className="w-full bg-gray-200 border border-gray-400 py-5 text-center">
        {profile && (
          <>
            <h2 className="text-4xl text-teal-400 font-[600] my-3">
              {profile.user.username.trim().split(" ")[0]} Bio
            </h2>
            <p className="text-lg mb-9 font-[500]">{profile.bio}</p>
            <div className="border border-gray-300 bg-gray-500 w-[90%] mx-auto " />
          </>
        )}
        <div className="mt-5">
          <h2 className="text-4xl text-teal-400 font-[600] my-3">Skill Set</h2>
          <div className="space-y-2">
            {profile.skills.map((i, inx) => (
              <div key={inx} className="flex justify-center items-center ">
                <BsCheck />
                <p>{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
