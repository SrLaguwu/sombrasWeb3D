import { BakeShadows, ContactShadows, OrbitControls, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Donut from "./models-3d/Donut";
import Ball from "./models-3d/Ball";
import Floor from "./models-3d/Floor";
import Lights from "./lights/Lights";

const Home = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5] }}>
      <OrbitControls makeDefault />
      {/* <BakeShadows /> */}
      <ContactShadows 
      opacity={1}
      scale={10}
      resolution={256}
      frames={128}
      />
      <SoftShadows 
      size={50} samples={20} focus={1}
      />
      <Lights />
      <Donut />
      <Ball />
      <Floor />
    </Canvas>
  );
};

export default Home;
