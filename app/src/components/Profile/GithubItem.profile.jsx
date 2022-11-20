import React from "react";

const GithubItemProfile = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full flex justify-between border min-h-[100px] px-2 py-2">
      <div className="space-y-1">
        <div className="text-base flex items-center space-x-2">
          <a href={data.html_url} target={"_blank"}>
            <h2 className=" text-teal-400 hover:text-teal-600 duration-300">
              {data.name}
            </h2>
          </a>
          <div className="text-sm text-gray-400">
            {new Date(data.created_at).toLocaleDateString()}
          </div>
        </div>
        <p className="text-lg">{data.description}</p>
      </div>
      <div className="space-y-2 text-center">
        <div className="text-black bg-teal-300 px-1 py-1">
          Star:{data.stargazers_count}
        </div>
        <div className="text-black bg-yellow-300 px-1 py-1">
          Watchers:{data.watchers_count}
        </div>
        <div className="text-black bg-red-300 px-1 py-1">
          Forks:{data.forks_count}
        </div>
      </div>
    </div>
  );
};

export default GithubItemProfile;
