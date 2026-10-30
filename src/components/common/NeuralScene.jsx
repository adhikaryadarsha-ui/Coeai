import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";

function NeuralScene() {
  const group = useRef();

  const texture = useTexture("/assets/images/logo_icon.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state, delta) => {
    if (!group.current) return;

    const mouse = state.pointer;

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      mouse.x * 0.55,
      4,
      delta,
    );

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -mouse.y * 0.35,
      4,
      delta,
    );
  });

  return (
    <Float speed={1.4} floatIntensity={0.18}>
      <group ref={group}>
        {/* Large AI Lab Logo */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[4.2, 4.2]} />

          <meshBasicMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
            toneMapped={false}
            depthWrite={false}
          />
        </mesh>

        {/* Inner Holographic Orbit */}
        <mesh rotation={[0.7, 0.4, 0.2]}>
          <torusGeometry args={[2.35, 0.015, 12, 120]} />
          <meshBasicMaterial color="#4B83FF" toneMapped={false} />
        </mesh>

        {/* Outer Holographic Orbit */}
        <mesh rotation={[1.2, 0.2, 0.8]}>
          <torusGeometry args={[2.65, 0.009, 8, 120]} />
          <meshBasicMaterial
            color="#8CC8FF"
            transparent
            opacity={0.85}
            toneMapped={false}
          />
        </mesh>

        {/* Floating Blue Particles */}
        <Sparkles
          count={100}
          scale={5.5}
          size={2}
          speed={0.5}
          color="#639AFF"
        />
      </group>
    </Float>
  );
}

export default function AIHeroModel() {
  return (
    <div className="ai-model-wrapper">
      <Canvas
        className="ai-model-canvas"
        camera={{
          position: [0, 0, 7.5],
          fov: 40,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.5} />

        <directionalLight position={[3, 4, 5]} intensity={2.5} />

        <NeuralScene />
      </Canvas>
    </div>
  );
}
