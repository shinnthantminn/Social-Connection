import { Formik, Form, Field } from "formik";
import FormControl from "../FormControl";
import * as yup from "yup";
import { BsBuilding } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { AiFillBook } from "react-icons/all";
import { BiTime } from "react-icons/bi";

const initialValue = {
  school: "",
  degree: "",
  fieldOfStudy: "",
  from: null,
  to: null,
  current: false,
  description: "",
};

const validationSchema = yup.object({
  school: yup.string().required("This field was required."),
  degree: yup.string().required("This field was required."),
  fieldOfStudy: yup.string().required("This field was required."),
  from: yup.date().required("This field was required.").nullable(),
  to: yup
    .date()
    .when("current", {
      is: false,
      then: yup.date().required("This field was required.").nullable(),
    })
    .nullable(),
  current: yup.boolean().required("This field was required."),
  description: yup.string().required("This field was required."),
});

const EducationForm = ({ onSubmit }) => {
  const nav = useNavigate();
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-5">
                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"input"}
                    name={"school"}
                    placeholder={"School Name"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    label={"School Name"}
                  />
                  <button className="absolute top-[42px] right-[3px] bg-white">
                    <FaSchool />
                  </button>
                </div>

                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"input"}
                    name={"degree"}
                    placeholder={"Degree"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    label={"Degree"}
                  />
                  <button className="absolute top-[42px] right-[3px] bg-white">
                    <FaGraduationCap />
                  </button>
                </div>
              </div>

              <div className="w-full relative mb-3">
                <FormControl
                  type={"text"}
                  control={"input"}
                  name={"fieldOfStudy"}
                  placeholder={"Field Of Study"}
                  labelClass={"text-xl"}
                  className={"form focus:ring-2 focus:ring-amber-300"}
                  label={"Field Of Study"}
                />
                <button className="absolute top-[42px] right-[3px] bg-white">
                  <AiFillBook />
                </button>
              </div>

              <div className="w-full mb-3 flex items-center space-x-1">
                <Field type={"checkbox"} id="current" name={"current"} />
                <label htmlFor="current">Current Studying?</label>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-5">
                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    type={"text"}
                    control={"date"}
                    name={"from"}
                    placeholderText={"Enter Start of study"}
                    placeholder={"From"}
                    labelClass={"text-xl"}
                    className={"form focus:ring-2 focus:ring-amber-300"}
                    label={"Form"}
                  />
                  <button className="absolute top-[42px] right-[3px] bg-white">
                    <BiTime />
                  </button>
                </div>

                <div className="w-full sm:w-[50%] relative">
                  <FormControl
                    control={"date"}
                    placeholderText={"Enter end of study"}
                    name={"to"}
                    disabled={formik.values.current}
                    placeholder={"To"}
                    labelClass={
                      formik.values.current
                        ? "duration-300 text-xl text-gray-300"
                        : "duration-300 text-xl"
                    }
                    className={
                      "form focus:ring-2 disabled:border-gray-300 disabled:text-gray-300 focus:ring-amber-300"
                    }
                    label={"To"}
                  />
                  <button className="absolute top-[42px] right-[3px] bg-white">
                    <BiTime />
                  </button>
                </div>
              </div>

              <div className="w-full relative mb-3">
                <FormControl
                  control={"textarea"}
                  name={"description"}
                  placeholder={"Field Of Study"}
                  labelClass={"text-xl"}
                  className={"form focus:ring-2 focus:ring-amber-300"}
                  label={"Description"}
                />
              </div>

              <div className="float-right space-x-2 z-[100]">
                <button
                  onClick={() => nav(-1)}
                  type="button"
                  className="btn bg-red-500 text-white dynamicEffect"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white dynamicEffect"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default EducationForm;
