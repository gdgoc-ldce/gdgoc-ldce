"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useRef, useState, useEffect } from "react";
import { Mesh, Group } from "three";

// 3D Pill for logo
function Pill({
  position,
  rotation,
  color,
  scrollProgress = 0,
  pillLength = 2,
  pillThickness = 0.6,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scrollProgress?: number;
  pillLength?: number;
  pillThickness?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[pillThickness, pillLength, pillThickness]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.3}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function GDGLogoGroup({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const zigzag = Math.sin(scrollProgress * Math.PI * 3) * 1.5;
      groupRef.current.position.x = zigzag;

      const scale = 0.8 + scrollProgress * 1.0;
      groupRef.current.scale.set(scale, scale, scale);

      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      groupRef.current.rotation.z =
        Math.sin(scrollProgress * Math.PI * 4) * 0.2;

      groupRef.current.position.y =
        2 + Math.sin(scrollProgress * Math.PI * 2) * 0.5;

      groupRef.current.position.z = scrollProgress * 2 - 1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Left bracket < */}
      {/* Red pill (top left) */}
      <Pill
        position={[-1.5, 0.55, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
        color="#EA4335"
        // pillLength={}
        scrollProgress={scrollProgress}
      />
      {/* Blue pill (bottom left) */}
      <Pill
        position={[-1.5, -0.55, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
        color="#4285F4"
        pillLength={2.15}
        pillThickness={0.61}
        scrollProgress={scrollProgress}
      />

      {/* Right bracket > */}
      {/* Green pill (top right) */}
      <Pill
        position={[1.5, 0.55, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
        color="#34A853"
        pillLength={2.16}
        pillThickness={0.61}
        scrollProgress={scrollProgress}
      />
      {/* Yellow pill (bottom right) */}
      <Pill
        position={[1.5, -0.55, 0]}
        rotation={[0, 0, -Math.PI * 0.25]}
        color="#FBBC04"
        scrollProgress={scrollProgress}
      />
    </group>
  );
}

function LoadingFallback() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#4285F4" wireframe />
    </mesh>
  );
}

function GoogleDoodles({ scrollProgress }: { scrollProgress: number }) {
  return (
    <group position={[0, 0, -8]}>
      {/* <mesh position={[-4, 3, 0]}>
        <sphereGeometry args={[2, 12, 12]} />
        <meshStandardMaterial
          color="#4285F4"
          emissive="#4285F4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[4, 2, 1]}>
        <sphereGeometry args={[1.5, 12, 12]} />
        <meshStandardMaterial
          color="#EA4335"
          emissive="#EA4335"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[-3, -3, 0.5]}>
        <sphereGeometry args={[2.2, 12, 12]} />
        <meshStandardMaterial
          color="#FBBC04"
          emissive="#FBBC04"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[3, -2, -0.5]}>
        <sphereGeometry args={[1.6, 12, 12]} />
        <meshStandardMaterial
          color="#34A853"
          emissive="#34A853"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh> */}
    </group>
  );
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      {/* Bright white background plane */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={3} />
      <directionalLight
        position={[0, 0, 10]}
        intensity={5}
        color="#ffffff"
        castShadow={false}
      />
      <directionalLight
        position={[10, 10, 5]}
        intensity={3}
        color="#ffffff"
        castShadow={false}
      />
      <pointLight position={[0, 0, 10]} intensity={2} color="#ffffff" />

      {/* Google colored doodles in background */}
      <GoogleDoodles scrollProgress={scrollProgress} />

      {/* Main GDG logo */}
      <Suspense fallback={<LoadingFallback />}>
        <GDGLogoGroup scrollProgress={scrollProgress} />
      </Suspense>
    </>
  );
}

export default function GDGLogo() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = window.scrollY / scrollHeight;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 h-screen w-full bg-linear-to-br from-blue-50 via-white to-yellow-50">
      <Canvas
        camera={{ position: [0, -1, 10], fov: 50 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.2 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
      >
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
