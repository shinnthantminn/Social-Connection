import React from "react";
import { useNavigate } from "react-router-dom";
import { ExpForm } from "../components";
import { AddExp } from "../store/action/authAction";
import { connect } from "react-redux";

const AddExperiencePage = ({ profile, AddExp }) => {
  const nav = useNavigate();

  const onSubmit = (value) => {
    const res = AddExp(value);
    if (res) {
      nav(-1);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className={"card"}>
        <div className="mb-4">
          <h1 className="headerText text-3xl font-bold text-teal-500">
            Welcome {profile?.user.username}
          </h1>
          <p className="text-gray-400 text-sm">
            Add your experience field and share your friend
          </p>
        </div>
        <ExpForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default connect(null, { AddExp })(AddExperiencePage);
