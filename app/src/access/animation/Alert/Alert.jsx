import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo } from "react";

const Alert = () => {
  return (
    <>
      <ToastContainer pauseOnHover={false} />
    </>
  );
};

export default memo(Alert);
