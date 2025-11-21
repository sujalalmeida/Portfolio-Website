import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';

const GeometricSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += 0.002;
      wireframeRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group scale={2.5}>
      {/* Inner Dark Sphere */}
      <Icosahedron args={[1, 4]} ref={meshRef}>
        <meshStandardMaterial 
          color="#020c0f" 
          roughness={0.3} 
          metalness={0.8}
        />
      </Icosahedron>

      {/* Wireframe Overlay */}
      <Icosahedron args={[1.01, 4]} ref={wireframeRef}>
        <meshBasicMaterial 
          color="#00f0ff" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </Icosahedron>

      {/* Glowing Edges / Accents */}
      <Icosahedron args={[1.02, 1]}>
        <meshBasicMaterial 
          color="#cfb586" 
          wireframe 
          transparent 
          opacity={0.1}
        />
      </Icosahedron>
    </group>
  );
};

const Particles = () => {
  const count = 200;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f0ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-color)' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#cfb586" />
        
        <GeometricSphere />
        <Particles />
        
        {/* Removed fog temporarily for debugging */}
        {/* <fog attach="fog" args={['#020c0f', 5, 15]} /> */}
      </Canvas>
    </div>
  );
};

export default Scene3D;
