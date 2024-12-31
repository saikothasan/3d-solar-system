import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, ShaderMaterial } from 'three';

const coronaVertexShader = `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const coronaFragmentShader = `
varying vec3 vNormal;
void main() {
  float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
  gl_FragColor = vec4(1.0, 0.6, 0.1, intensity);
}
`;

export default function CoronaEffect() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        vertexShader={coronaVertexShader}
        fragmentShader={coronaFragmentShader}
        transparent={true}
        side={2}
      />
    </mesh>
  );
}