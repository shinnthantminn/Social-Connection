import animation from "../Lottie/loading.json";
import { useLottie } from "lottie-react";

const Loading = ({ className }) => {
  const option = {
    animationData: animation,
    autoplay: true,
    loop: true,
    className,
  };

  const { View } = useLottie(option);
  return (
    <div
      className={
        "bg-white rounded px-4 py-10  flex items-center justify-center"
      }
    >
      {View}
    </div>
  );
};

export default Loading;
