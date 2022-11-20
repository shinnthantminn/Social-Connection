import FormControl from "../FormControl";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { BsEnvelope } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../../../store/action/authAction";

const initialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  username: yup.string().required("This field was required."),
  email: yup
    .string()
    .email("That should be valid email.")
    .required("This field was required."),
  password: yup
    .string()
    .min(5, "Password is too short - should be 5 chars minimum.")
    .required("This field was required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match.")
    .required("This field was required."),
});

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Social | SignUp";
  }, []);

  const onSubmit = async (value) => {
    const res = await Register(dispatch, value);
    if (res) {
      nav("/login");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="card w-full sm:w-[400px] xl:w-[500px]">
          <div className="mb-7 space-y-2">
            <h1 className="text-3xl headerText ">SignUp your account</h1>
            <p className="text-gray-500">
              Join this connection and feel to free
            </p>
          </div>

          <div className="mt-5 relative">
            <FormControl
              control={"input"}
              labelClass={"block text-xl "}
              className={"form focus:ring-pink-300 focus:ring-2"}
              type={"text"}
              name={"username"}
              label={"Username"}
              required={true}
              placeholder={"user123"}
            />
            <button type="button" className="absolute top-[42px] right-[10px]">
              <AiOutlineUser />
            </button>
          </div>

          <div className="mt-5 relative">
            <FormControl
              control={"input"}
              labelClass={"block text-xl "}
              className={"form focus:ring-pink-300 focus:ring-2"}
              type={"email"}
              name={"email"}
              label={"Email"}
              required={true}
              placeholder={"example@email.com"}
            />
            <button type="button" className="absolute top-[42px] right-[10px]">
              <BsEnvelope />
            </button>
          </div>

          <div className="mt-5 relative">
            <FormControl
              control={"input"}
              labelClass={"block text-xl "}
              className={"form focus:ring-pink-300 focus:ring-2"}
              type={show ? "text" : "password"}
              name={"password"}
              placeholder={"A-Z,a-z,1-9,!-*"}
              required={true}
              label={"Password"}
            />
            <button
              type="button"
              onClick={() => {
                setShow((pre) => !pre);
              }}
              className="absolute top-[42px] right-[10px]"
            >
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <div className="mt-5 relative">
            <FormControl
              control={"input"}
              labelClass={"block text-xl "}
              className={"form focus:ring-pink-300 focus:ring-2"}
              type={confirmShow ? "text" : "password"}
              name={"confirmPassword"}
              placeholder={"A-Z,a-z,1-9,!-*"}
              required={true}
              label={"Confirm Password"}
            />
            <button
              type="button"
              onClick={() => {
                setConfirmShow((pre) => !pre);
              }}
              className="absolute top-[42px] right-[10px]"
            >
              {confirmShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <button
            type="submit"
            className="btn-lg w-full mb-6 text-lg mt-10 text-center bg-blue-500 text-white dynamicEffect"
          >
            Sign Up
          </button>
          <div>
            You was already have account? ,
            <Link to={"/login"} className={"text-blue-500"}>
              Login
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
