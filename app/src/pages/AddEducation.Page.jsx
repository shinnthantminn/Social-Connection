import { EduForm } from "../components";
import { AddEdu } from "../store/action/authAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../access/animation/Loading/Loading";
import { useEffect } from "react";

const AddEducationPage = ({ profile, AddEdu, isLoading }) => {
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Social | AddEdu";
  }, []);

  const onSubmit = (value) => {
    const res = AddEdu(value);
    if (res) {
      nav(-1);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className={"card"}>
          <div className="mb-4">
            <h1 className="headerText text-3xl font-bold text-teal-500">
              Welcome {profile?.user.username}
            </h1>
            <p className="text-gray-400 text-sm">
              Add your education field and share your friend
            </p>
          </div>
          <EduForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  );
};

export default connect(null, { AddEdu })(AddEducationPage);
