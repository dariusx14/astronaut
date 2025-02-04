import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function AstronautModel() {
  const { scene } = useGLTF('/astronaut.glb');
  // @ts-expect-error - primitive is a valid JSX element in R3F
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <AstronautModel />
          {/* Fixed light syntax */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Cleanup
useGLTF.preload('/astronaut.glb');