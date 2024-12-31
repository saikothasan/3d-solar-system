import { Html } from '@react-three/drei';

interface Props {
  distanceFromSun: number;
}

export default function DistanceScale({ distanceFromSun }: Props) {
  return (
    <Html
      position={[distanceFromSun * 10, 2, 0]}
      center
      className="pointer-events-none"
    >
      <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white whitespace-nowrap">
        {distanceFromSun.toFixed(2)} AU
      </div>
    </Html>
  );
}