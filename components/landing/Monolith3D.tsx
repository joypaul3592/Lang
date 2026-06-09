"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, Float, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

function MonolithCore({ phase = 0 }: { phase?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.06 + phase;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.04;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.y = t * 0.06 + phase;
      edgesRef.current.rotation.x = Math.sin(t * 0.2) * 0.04;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -(t * 0.1 + phase);
      innerRef.current.rotation.z = t * 0.05;
    }
  });

  const geometry = useMemo(() => new THREE.BoxGeometry(1.1, 2.8, 0.38, 4, 8, 2), []);
  const edgeGeometry = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  const innerGeometry = useMemo(() => new THREE.OctahedronGeometry(0.28, 2), []);

  return (
    <group>
      {/* Main monolith body */}
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#0A0A0A"
          metalness={0.92}
          roughness={0.05}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={2.5}
        />
      </mesh>

      {/* Wire-frame edges */}
      <lineSegments ref={edgesRef} geometry={edgeGeometry}>
        <lineBasicMaterial color="#C8955E" transparent opacity={0.35} />
      </lineSegments>

      {/* Inner crystal */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={innerRef} geometry={innerGeometry} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#C8955E"
            emissive="#F68622"
            emissiveIntensity={0.35}
            metalness={0.7}
            roughness={0.1}
            transmission={0.5}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Glowing ember panel */}
      <mesh position={[0, 0, 0.2]}>
        <planeGeometry args={[0.5, 1.2]} />
        <meshPhysicalMaterial
          color="#C8955E"
          emissive="#F68622"
          emissiveIntensity={0.15}
          transparent
          opacity={0.06}
          metalness={0}
          roughness={0}
        />
      </mesh>
    </group>
  );
}

function OrbitalRings() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      ringRef.current.rotation.x = clock.getElapsedTime() * 0.08;
    }
  });

  const ring1 = useMemo(() => new THREE.TorusGeometry(2.2, 0.004, 8, 120), []);
  const ring2 = useMemo(() => new THREE.TorusGeometry(1.7, 0.003, 8, 90), []);
  const ring3 = useMemo(() => new THREE.TorusGeometry(2.8, 0.002, 8, 150), []);

  return (
    <group ref={ringRef}>
      <mesh geometry={ring1} rotation={[Math.PI / 2.5, 0.3, 0]}>
        <lineBasicMaterial color="#C8955E" transparent opacity={0.2} />
      </mesh>
      <mesh geometry={ring2} rotation={[Math.PI / 1.8, -0.5, 0.2]}>
        <lineBasicMaterial color="#A8A9AB" transparent opacity={0.12} />
      </mesh>
      <mesh geometry={ring3} rotation={[Math.PI / 3, 0.8, -0.3]}>
        <lineBasicMaterial color="#C8955E" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function ReflectionFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
      <planeGeometry args={[12, 12]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={30}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#0A0A0A"
        metalness={0.9}
        mirror={0.5}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0A0A0A"]} />
      <fog attach="fog" args={["#0A0A0A", 8, 22]} />

      <Environment preset="night" />

      {/* Key light — warm ember */}
      <pointLight position={[2, 4, 2]} intensity={8} color="#F68622" distance={12} />
      {/* Fill light — cool chrome */}
      <pointLight position={[-3, 2, -1]} intensity={3} color="#A8C8D8" distance={10} />
      {/* Rim light */}
      <pointLight position={[0, -2, 3]} intensity={4} color="#C8955E" distance={8} />
      {/* Ambient */}
      <ambientLight intensity={0.3} color="#1a1a2e" />

      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.4}>
        <MonolithCore />
      </Float>

      <OrbitalRings />

      {/* Sparkle particles */}
      <Sparkles
        count={80}
        scale={[6, 8, 6]}
        size={0.6}
        speed={0.25}
        opacity={0.4}
        color="#C8955E"
      />
      <Sparkles
        count={30}
        scale={[4, 6, 4]}
        size={0.3}
        speed={0.1}
        opacity={0.2}
        color="#A8A9AB"
      />

      <ReflectionFloor />
    </>
  );
}

export function Monolith3D() {
  return (
    <div className="w-full h-full min-h-[600px]">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 42, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
