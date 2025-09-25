
import {Stars} from "@react-three/drei";


const StarContainer = () => {
  return (
  <Stars radius={150} depth={100} count={6000} factor={7} saturation={10} fade speed={1} />
  );
};

export default StarContainer;
