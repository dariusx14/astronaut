import { Canvas } from '@react-three/fiber';
import { OrbitControls,  useGLTF } from '@react-three/drei';

function Astronaut() {
  const { scene } = useGLTF('/astronaut.glb');  // path to your 3D model

  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Astronaut />
      <OrbitControls />
    </Canvas>
  );
}
