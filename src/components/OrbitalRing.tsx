import { useRef } from 'react';
import { Line } from '@react-three/drei';
import { useSolarSystemStore } from '../store/solarSystemStore';

interface Props {
  radius: number;
}

export default function OrbitalRing({ radius }: Props) {
  const lineRef = useRef();
  const { showOrbits } = useSolarSystemStore();

  const points = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push([
      Math.cos(theta) * radius,
      0,
      Math.sin(theta) * radius,
    ]);
  }

  return showOrbits ? (
    <Line
      ref={lineRef}
      points={points}
      color="white"
      opacity={0.2}
      transparent
      lineWidth={1}
    />
  ) : null;
}