import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

console.log(THREE); // Temporary usage to avoid ESLint error

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<THREE.Object3D, typeof THREE.Object3D>; // More specific type
      ambientLight: {
        intensity?: number;
      };
      directionalLight: {
        position?: [number, number, number];
        intensity?: number;
      };
    }
  }
}
