import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, BufferGeometry } from 'three';
import { generateAsteroidPoints } from '../utils/asteroidGenerator';

export default function AsteroidBelt() {
  const pointsRef = useRef<Points>(null);
  const { positions, colors } = generateAsteroidPoints(2000, 2.2, 3.2); // Between Mars and Jupiter

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
      />
    </points>
  );
}