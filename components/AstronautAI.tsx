import { useGLTF, Environment, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Object3D } from 'three';

function AstronautModel() {
  const { scene } = useGLTF('/astronaut.glb') as { scene: Object3D };

  return (
    // @ts-expect-error - Known issue with R3F types
    <primitive object={scene} />
  );
}

export default function App() {
  return (
    <div className="h-screen w-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Stage intensity={0.6} environment="city">
            <AstronautModel />
          </Stage>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload model
useGLTF.preload('/astronaut.glb');
