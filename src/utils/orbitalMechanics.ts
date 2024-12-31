interface Position {
  x: number;
  z: number;
}

export function calculatePosition(
  radius: number,
  orbitalPeriod: number,
  deltaTime: number
): Position {
  // Convert orbital period to angular velocity (radians per second)
  const angularVelocity = (2 * Math.PI) / (orbitalPeriod * 24 * 60 * 60);
  
  // Calculate current angle
  const angle = angularVelocity * deltaTime;
  
  return {
    x: Math.cos(angle) * radius,
    z: Math.sin(angle) * radius,
  };
}