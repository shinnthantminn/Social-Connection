const ExperienceProfile = ({ exp }) => {
  return (
    <div className="space-y-1 my-10">
      <p className="text-xl font-[600]">{exp.company}</p>
      <div className="flex space-x-2">
        <p>{new Date(exp.from).toLocaleDateString()}</p>
        <p> - </p>
        <p>{exp.to ? new Date(exp.to).toLocaleDateString() : "Now"}</p>
      </div>
      <p className="font-[600]">
        Position: <span className="font-[400]">{exp.title}</span>
      </p>
      <div className="flex space-x-1">
        <p className="font-[600]">Description: </p>
        <p className="font-[400]"> {exp.description}</p>
      </div>
    </div>
  );
};

export default ExperienceProfile;
