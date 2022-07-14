import animation from "../../access/animation/Lottie/social-media-interaction.json";
import { useLottie } from "lottie-react";

// animation
const option = {
  animationData: animation,
  loop: true,
  autoplay: true,
  className: "w-[600px] mx-auto",
};

const Left = () => {
  const { View } = useLottie(option);
  return <div className="h-full flex justify-center items-center">{View}</div>;
};

export default Left;
