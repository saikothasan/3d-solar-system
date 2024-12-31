export interface CelestialObject {
  id: string;
  name: string;
  type: 'star' | 'planet' | 'dwarf-planet' | 'moon' | 'asteroid' | 'comet';
  diameter: number; // km
  mass: number; // kg
  distanceFromSun: number; // AU
  orbitalPeriod: number; // Earth days
  rotationPeriod: number; // Earth days
  textureUrl: string;
  description: string;
  facts: string[];
  moons?: CelestialObject[];
}

export interface OrbitControls {
  speed: number;
  showOrbits: boolean;
  paused: boolean;
}