import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { solarSystemData } from '../data/celestialObjects';
import { useSolarSystemStore } from '../store/solarSystemStore';
import CelestialBody from './CelestialBody';
import OrbitalRing from './OrbitalRing';
import AsteroidBelt from './AsteroidBelt';

export default function SolarSystem() {
  const systemRef = useRef<Group>(null);
  const { timeScale } = useSolarSystemStore();

  useFrame((_, delta) => {
    if (!systemRef.current) return;
    systemRef.current.rotation.y += delta * 0.1 * timeScale;
  });

  return (
    <group ref={systemRef}>
      {solarSystemData.map((object) => (
        <group key={object.id}>
          {object.type !== 'star' && <OrbitalRing radius={object.distanceFromSun * 10} />}
          <CelestialBody object={object} />
        </group>
      ))}
      <AsteroidBelt />
    </group>
  );
}