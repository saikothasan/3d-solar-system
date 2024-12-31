import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { CelestialObject } from '../types/celestialObjects';
import { useSolarSystemStore } from '../store/solarSystemStore';
import { calculatePosition } from '../utils/orbitalMechanics';
import CoronaEffect from './CoronaEffect';
import DistanceScale from './DistanceScale';

interface Props {
  object: CelestialObject;
}

export default function CelestialBody({ object }: Props) {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(object.textureUrl);
  const { timeScale, setSelectedObject } = useSolarSystemStore();

  const scale = Math.log(object.diameter) / 10;
  
  useFrame((_, delta) => {
    if (!meshRef.current || object.type === 'star') return;
    
    const position = calculatePosition(
      object.distanceFromSun * 10,
      object.orbitalPeriod,
      timeScale * delta
    );
    
    meshRef.current.position.x = position.x;
    meshRef.current.position.z = position.z;
    meshRef.current.rotation.y += delta * (2 * Math.PI) / object.rotationPeriod * timeScale;
  });

  return (
    <>
      <mesh
        ref={meshRef}
        scale={[scale, scale, scale]}
        onClick={() => setSelectedObject(object)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
        {object.type === 'star' && (
          <>
            <pointLight intensity={1} distance={100} decay={2} />
            <CoronaEffect />
          </>
        )}
      </mesh>
      {object.type !== 'star' && (
        <DistanceScale distanceFromSun={object.distanceFromSun} />
      )}
    </>
  );
}