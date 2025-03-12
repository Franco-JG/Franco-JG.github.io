function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        color="white"
        emissive="white"
        emissiveIntensity={3.5}
      />
    </mesh>
  );
}

export default Sphere;