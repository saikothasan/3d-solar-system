import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import LoadingScreen from './LoadingScreen';
import SolarSystem from './SolarSystem';
import UI from './UI';
import GuidedTour from './GuidedTour';
import ComparisonTool from './ComparisonTool';

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<LoadingScreen />}>
        <Canvas camera={{ position: [0, 100, 0], fov: 60 }}>
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            maxDistance={200}
            minDistance={5}
          />
          <Stars radius={300} depth={60} count={20000} factor={4} />
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={1} />
          <SolarSystem />
        </Canvas>
        <UI />
        <GuidedTour />
        <ComparisonTool />
      </Suspense>
    </div>
  );
}