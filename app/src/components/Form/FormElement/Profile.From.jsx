import { Formik, Form } from "formik";
import FormControl from "../FormControl";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  BsBuilding,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { BiCog, BiLocationPlus } from "react-icons/bi";
import { useState } from "react";
import { IoEarth } from "react-icons/io5";

//value
const initialValue = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  bio: "",
  githubUsername: "",
  social: {
    youtube: "",
    facebook: "",
    linkIn: "",
    instagram: "",
  },
};

const validationSchema = yup.object({
  company: yup.string().required("This field was required."),
  website: yup.string().required("This field was required."),
  location: yup.string().required("This field was required."),
  status: yup.string().required("This field was required."),
  skills: yup.string().required("This field was required."),
  bio: yup.string().required("This field was required."),
  githubUsername: yup.string().required("This field was required."),
  social: yup.object({
    youtube: yup.string(),
    facebook: yup.string(),
    linkIn: yup.string(),
    instagram: yup.string(),
  }),
});

const option = [
  { key: "", value: "Select your status" },
  { key: "Junior Developer", value: "Junior Developer" },
  { key: "Senior Developer", value: "Senior Developer" },
  { key: "Student", value: "Student" },
  { key: "Accountant", value: "Accountant" },
  { key: "Manager", value: "Manager" },
  { key: "Intern", value: "Intern" },
  { key: "Other", value: "Other" },
];

const ProfileFrom = ({ onSubmit, edit, profile }) => {
  const [social, setSocial] = useState(edit);
  const nav = useNavigate();

  //value
  const value = {
    company: profile ? profile.company : "",
    website: profile ? profile.website : "",
    location: profile ? profile.location : "",
    status: profile ? profile.status : "",
    skills: profile ? profile.skills.join(",") : "",
    bio: profile ? profile.bio : "",
    githubUsername: profile ? profile.githubUsername : "",
    social: {
      youtube: profile ? profile.youtube : "",
      facebook: profile ? profile.facebook : "",
      linkIn: profile ? profile.linkIn : "",
      instagram: profile ? profile.linkIn : "",
    },
  };

  return (
    <>
      <Formik
        initialValues={edit ? value : initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        <Form>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-5">
            <div className="w-full sm:w-[50%] relative">
              <FormControl
                type={"text"}
                control={"input"}
                name={"company"}
                placeholder={"Company Name"}
                labelClass={"text-xl"}
                className={"form focus:ring-2 focus:ring-amber-300"}
                label={"Company"}
              />
              <button className="absolute top-[42px] right-[3px] bg-white">
                <BsBuilding />
              </button>
            </div>

            <div className="w-full sm:w-[50%] ">
              <FormControl
                control={"select"}
                name={"status"}
                label={"Status"}
                className={"form focus:ring-2 focus:ring-amber-300"}
                labelClass={"text-xl"}
                option={option}
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-5">
            <div className="w-full sm:w-[50%] relative">
              <FormControl
                type={"text"}
                control={"input"}
                name={"skills"}
                labelClass={"text-xl"}
                placeholder={"Add your skills"}
                className={"form focus:ring-2 focus:ring-amber-300"}
                label={"Skills"}
              />
              <button
                type={"button"}
                className="absolute top-[42px] right-[3px] bg-white"
              >
                <BiCog />
              </button>

              <p className="text-sm text-gray-400">
                Please define your skills with commas separated
              </p>
            </div>
            <div className="w-full sm:w-[50%] relative">
              <FormControl
                type={"text"}
                control={"input"}
                name={"githubUsername"}
                labelClass={"text-xl"}
                className={"form focus:ring-2 focus:ring-amber-300"}
                label={"Github Username"}
                placeholder={"Github username"}
              />
              <button
                type={"button"}
                className="absolute top-[42px] right-[3px] bg-white"
              >
                <BsGithub />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-5">
            <div className="w-full sm:w-[50%] relative">
              <FormControl
                control={"input"}
                name={"location"}
                labelClass={"text-xl"}
                placeholder={"Location address"}
                className={"form focus:ring-2 focus:ring-amber-300"}
                label={"Location"}
              />
              <button
                type={"button"}
                className="absolute top-[42px] right-[3px] bg-white"
              >
                <BiLocationPlus />
              </button>
            </div>

            <div className="w-full sm:w-[50%] relative">
              <FormControl
                control={"input"}
                name={"website"}
                labelClass={"text-xl"}
                placeholder={"Location address"}
                className={"form focus:ring-2 focus:ring-amber-300"}
                label={"Website"}
              />
              <button
                type={"button"}
                className="absolute top-[42px] right-[3px] bg-white"
              >
                <IoEarth />
              </button>
            </div>
          </div>

          <FormControl
            control={"textarea"}
            name={"bio"}
            labelClass={"text-xl"}
            className={"form focus:ring-2 focus:ring-amber-300"}
            label={"Bios"}
          />

          <div className=" mt-3 mb-5">
            <p className="text-sm text-gray-400 mb-1">
              Do you want to add social media information
            </p>
            <button
              onClick={() => setSocial((pre) => !pre)}
              type={"button"}
              className="btn bg-green-500 text-white dynamicEffect"
            >
              {social ? "Remove " : "Add "}Social Media Information
            </button>
          </div>

          {/*Social Media Form*/}

          {social && (
            <>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-4">
                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"input"}
                    name={"social.facebook"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    label={"Facebook"}
                    placeholder={"Add your facebook account"}
                  />
                  <button className="absolute top-[42px] right-[5px] bg-white">
                    <BsFacebook className="text-blue-500" />
                  </button>
                </div>

                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"input"}
                    name={"social.youtube"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    label={"YouTube"}
                    placeholder={"Add your youtube account"}
                  />
                  <button className="absolute top-[42px] right-[5px] bg-white">
                    <BsYoutube className="text-red-500" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2">
                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"input"}
                    name={"social.linkIn"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    placeholder={"Add your linkIn account"}
                    label={"LinkIn"}
                  />
                  <button className="absolute top-[42px] right-[5px] bg-white">
                    <BsLinkedin className="text-blue-500" />
                  </button>
                </div>
                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"input"}
                    name={"social.instagram"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    label={"Instagram"}
                    placeholder={"Add your instagram account"}
                  />

                  <button className="absolute top-[42px] right-[5px] bg-white">
                    <BsInstagram />
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="float-right mt-5 space-x-2">
            {edit && (
              <button
                type={"button"}
                onClick={() => {
                  nav(-1);
                }}
                className="btn text-white bg-red-500 dynamicEffect"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="btn text-white bg-blue-500 dynamicEffect"
            >
              {edit ? "Change" : "Submit"}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ProfileFrom;
