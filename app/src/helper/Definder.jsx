import Defender from "./Defender";

const Definder = ({ auth }) => {
  return (
    <Defender path={"/"} protect={!auth}>
      <div>Hello</div>
    </Defender>
  );
};

export default Definder;
