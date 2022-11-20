const EducationProfile = ({ edu }) => {
  return (
    <div className="space-y-1 my-10">
      <p className="text-xl font-[600]">{edu.school}</p>
      <div className="flex space-x-2">
        <p>{new Date(edu.from).toLocaleDateString()}</p>
        <p> - </p>
        <p>{edu.to ? new Date(edu.to).toLocaleDateString() : "Now"}</p>
      </div>
      <p className="font-[600]">
        Degree: <span className="font-[400]">{edu.degree}</span>
      </p>
      <p className="font-[600]">
        Field Of Study: <span className="font-[400]">{edu.fieldOfStudy}</span>
      </p>
      <div className="flex space-x-1">
        <p className="font-[600]">Description: </p>
        <p className="font-[400]"> {edu.description}</p>
      </div>
    </div>
  );
};

export default EducationProfile;
