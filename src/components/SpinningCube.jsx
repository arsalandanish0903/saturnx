import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';

const SpinningCube = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <MeshDistortMaterial color="#4f46e5" distort={0.3} speed={2} />
    </mesh>
  );
};

export default function ThreeDAnimation() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <SpinningCube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
