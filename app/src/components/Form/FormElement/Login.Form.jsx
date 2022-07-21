import FormControl from "../FormControl";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Login } from "../../../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("That should be valid email.")
    .required("This field was required."),
  password: yup
    .string()
    .min(5, "Password is too short - should be 5 chars minimum.")
    .required("This field was required."),
});

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const { data } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    const res = await Login(dispatch, value);
  };

  const initialValue = {
    email: data ? data.email : "",
    password: "",
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        <Form className="card w-full sm:w-[400px] xl:w-[500px]">
          <div className="mb-7 space-y-2">
            <h1 className="text-3xl headerText ">Login your account</h1>
            <p className="text-gray-500">
              Enter your account and connection with each other
            </p>
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

          <button
            type="submit"
            className="btn-lg w-full mb-6 text-lg mt-10 text-center bg-blue-500 text-white dynamicEffect"
          >
            Login
          </button>
          <div>
            You haven't account ,
            <Link to={"/signup"} className={"text-blue-500"}>
              Sign Up
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
