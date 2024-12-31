import { Float32Array } from 'three';

export function generateAsteroidPoints(count: number, innerRadius: number, outerRadius: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const r = innerRadius + Math.random() * (outerRadius - innerRadius);
    const jitter = (Math.random() - 0.5) * 0.2; // Vertical spread

    positions[i * 3] = Math.cos(theta) * r * 10; // Scale to match planet distances
    positions[i * 3 + 1] = jitter;
    positions[i * 3 + 2] = Math.sin(theta) * r * 10;

    // Gray-brown colors for asteroids
    colors[i * 3] = 0.5 + Math.random() * 0.2;
    colors[i * 3 + 1] = 0.4 + Math.random() * 0.2;
    colors[i * 3 + 2] = 0.3 + Math.random() * 0.2;
  }

  return { positions, colors };
}