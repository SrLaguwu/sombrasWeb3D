import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  MathUtils,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const Lights = () => {
  const directionalLightRef = useRef();
//   useHelper(directionalLightRef, DirectionalLightHelper, 1, "red");

  const pointLightRef = useRef();
//   useHelper(pointLightRef, PointLightHelper, 1, "purple");

  const spotLightRef = useRef();
//   useHelper(spotLightRef, SpotLightHelper);

  useFrame(({clock})=>{
    const elapsedTime = clock.getElapsedTime();
    spotLightRef.current.position.x = MathUtils.lerp(-1, 1 , Math.tan(elapsedTime));    
  })

  return (
    <>
      <ambientLight color={"white"} intensity={1} />
      <hemisphereLight 
        position={[0,5,0]}
        intensity={0}
        color={"red"}
        groundColor={"blue"}
      />
      <directionalLight
        castShadow
        ref={directionalLightRef}
        color={"yellow"}
        position={[0, 5, 5]}
        intensity={4}
        shadow-mapSize={[512,512]}
        shadow-camera-near={3}
        shadow-camera-far={8}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
      />
      <pointLight
        ref={pointLightRef}
        castShadow
        color={"yellow"}
        position={[2, 1, 1]}
        intensity={0}
      />
      <spotLight
        ref={spotLightRef}
        castShadow
        color={"yellow"}
        position={[-3, 3, 2]}
        intensity={100}
        angle={Math.PI / 12}
        distance={8}
      />
    </>
  );
};

export default Lights;
