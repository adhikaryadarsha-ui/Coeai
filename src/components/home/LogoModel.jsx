
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

function LogoModel() {
  const group = useRef();
//   const texture = useTexture("/ailab_logo.png");
const texture = useTexture("/assets/images/logo_icon.png");

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    if (!group.current) return;

    const mouse = state.pointer;

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      mouse.x * 0.55,
      4,
      delta
    );

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -mouse.y * 0.35,
      4,
      delta
    );
  });

  return (
    <Float speed={1.4} floatIntensity={0.2}>
      <group ref={group}>
        {/* 3D logo body */}
        <mesh>
          <cylinderGeometry args={[1.5, 1.5, 0.18, 96]} />
          <meshStandardMaterial
            color="#1739A5"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>

        {/* Original AI Lab logo */}
        <mesh
          position={[0, 0, 0.105]}
          rotation={[0, 0, 0]}
        >
          <planeGeometry args={[2.8, 2.8]} />
          <meshBasicMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>

        {/* Holographic orbit */}
        <mesh rotation={[0.7, 0.4, 0.2]}>
          <torusGeometry args={[1.85, 0.018, 12, 100]} />
          <meshBasicMaterial color="#4B83FF" />
        </mesh>

        <mesh rotation={[1.2, 0.2, 0.8]}>
          <torusGeometry args={[2.05, 0.009, 8, 100]} />
          <meshBasicMaterial
            color="#8CC8FF"
            transparent
            opacity={0.8}
          />
        </mesh>

        <Sparkles
          count={70}
          scale={4.8}
          size={2}
          speed={0.4}
          color="#639AFF"
        />
      </group>
    </Float>
  );
}

export default function AIHeroModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={2.5} />
      <LogoModel />
    </Canvas>
  );
}

