export function generateAsteroidPoints(count: number, innerRadius: number, outerRadius: number) {
  const positions = new Float32Array(count * 3);  // Array for the positions of the asteroids
  const colors = new Float32Array(count * 3);     // Array for the colors of the asteroids

  // Generate asteroid positions and colors
  for (let i = 0; i < count; i++) {
    // Random angle for the asteroid position
    const theta = Math.random() * 2 * Math.PI;
    
    // Random distance within the given inner and outer radius
    const r = innerRadius + Math.random() * (outerRadius - innerRadius);
    
    // Vertical jitter for the asteroid
    const jitter = (Math.random() - 0.5) * 0.2; // Slight vertical spread
    
    // Calculate the 3D position of the asteroid (scaled for larger distances)
    positions[i * 3] = Math.cos(theta) * r * 10;  // X coordinate
    positions[i * 3 + 1] = jitter;                // Y coordinate
    positions[i * 3 + 2] = Math.sin(theta) * r * 10; // Z coordinate

    // Assign random gray-brown colors for the asteroids
    colors[i * 3] = 0.5 + Math.random() * 0.2;     // R channel
    colors[i * 3 + 1] = 0.4 + Math.random() * 0.2; // G channel
    colors[i * 3 + 2] = 0.3 + Math.random() * 0.2; // B channel
  }

  // Return both the positions and colors
  return { positions, colors };
}
