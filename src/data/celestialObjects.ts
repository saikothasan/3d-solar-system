import { CelestialObject } from '../types/celestialObjects';

export const solarSystemData: CelestialObject[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    diameter: 1392700,
    mass: 1.989e30,
    distanceFromSun: 0,
    orbitalPeriod: 0,
    rotationPeriod: 27,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/sun.jpg',
    description: 'The Sun is the star at the center of our Solar System.',
    facts: ['Surface temperature: 5,500°C', 'Age: 4.6 billion years', 'Contains 99.86% of the Solar System\'s mass'],
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    diameter: 4879,
    mass: 3.285e23,
    distanceFromSun: 0.387,
    orbitalPeriod: 88,
    rotationPeriod: 58.6,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/mercury.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System.',
    facts: ['No moons', 'No atmosphere', 'Extreme temperature variations'],
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    diameter: 12104,
    mass: 4.867e24,
    distanceFromSun: 0.723,
    orbitalPeriod: 224.7,
    rotationPeriod: -243,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/venus.jpg',
    description: 'Venus is the second planet from the Sun and the hottest planet in our solar system.',
    facts: ['Rotates backwards', 'Surface temperature: 462°C', 'Similar size to Earth'],
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    diameter: 12742,
    mass: 5.972e24,
    distanceFromSun: 1,
    orbitalPeriod: 365.25,
    rotationPeriod: 1,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/earth.jpg',
    description: 'Earth is our home planet and the only known planet to harbor life.',
    facts: ['Only planet known to have life', 'Has one natural satellite: the Moon', '71% covered by water'],
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    diameter: 6779,
    mass: 6.39e23,
    distanceFromSun: 1.524,
    orbitalPeriod: 687,
    rotationPeriod: 1.03,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/mars.jpg',
    description: 'Mars is the fourth planet from the Sun, often called the Red Planet.',
    facts: ['Has two moons', 'Contains the largest volcano in the solar system', 'Red color from iron oxide'],
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    diameter: 139820,
    mass: 1.898e27,
    distanceFromSun: 5.203,
    orbitalPeriod: 4333,
    rotationPeriod: 0.41,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/jupiter.jpg',
    description: 'Jupiter is the largest planet in our solar system.',
    facts: ['Has the Great Red Spot', 'Has at least 79 moons', 'Fastest rotating planet'],
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    diameter: 116460,
    mass: 5.683e26,
    distanceFromSun: 9.537,
    orbitalPeriod: 10759,
    rotationPeriod: 0.45,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/saturn.jpg',
    description: 'Saturn is known for its prominent ring system.',
    facts: ['Has spectacular rings', 'Least dense planet', 'Has 82 confirmed moons'],
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    diameter: 50724,
    mass: 8.681e25,
    distanceFromSun: 19.191,
    orbitalPeriod: 30687,
    rotationPeriod: -0.72,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/uranus.jpg',
    description: 'Uranus is the seventh planet from the Sun and rotates on its side.',
    facts: ['Rotates on its side', 'Has 27 known moons', 'Coldest planetary atmosphere'],
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    diameter: 49244,
    mass: 1.024e26,
    distanceFromSun: 30.069,
    orbitalPeriod: 60190,
    rotationPeriod: 0.67,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/neptune.jpg',
    description: 'Neptune is the eighth and farthest planet from the Sun.',
    facts: ['Has 14 moons', 'Strongest winds in the solar system', 'Last planet in our solar system'],
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'dwarf-planet',
    diameter: 2377,
    mass: 1.303e22,
    distanceFromSun: 39.482,
    orbitalPeriod: 90560,
    rotationPeriod: 6.39,
    textureUrl: 'https://raw.githubusercontent.com/three-examples/solar-system-textures/main/pluto.jpg',
    description: 'Pluto is a dwarf planet in the Kuiper belt.',
    facts: ['Reclassified as dwarf planet in 2006', 'Has 5 known moons', 'Smaller than Earth\'s moon'],
  }
];