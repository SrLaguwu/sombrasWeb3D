const Floor = () => {
  return (
    <mesh name="floor" rotation-x={-Math.PI * 0.5} 
    receiveShadow
    position-x={-Math.PI * 0.5}
    position-y={-0.1}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Floor;
