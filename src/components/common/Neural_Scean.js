import { useEffect, useRef } from "react";
import * as THREE from "three";
import "../../../public/assets/styles/NeuralAIScene.css";

function NeuralAIScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      host.clientWidth / host.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // AI Neural Particle Network
    const particleCount = 800;
    const points = [];
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 0.2;
      const s = Math.sqrt(1 - u * u);
      points.push(Math.cos(theta) * s * r, u * r, Math.sin(theta) * s * r);
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x00f2fe, // Bright AI Cyan
      size: 0.028,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(pGeo, pMat);
    group.add(particleCloud);

    // Central AI Brain Core (Octahedron mesh)
    const coreGeo = new THREE.OctahedronGeometry(1.1, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x4facfe,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Inner Glowing Neural Sphere
    const innerGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x071130,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x00c6ff,
      emissiveIntensity: 0.8,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // Data Synapses / Floating Nodes
    const nodePositions = [];
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.8 + Math.random() * 1.2;
      nodePositions.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3.5,
        Math.sin(angle) * radius,
      );
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodePositions, 3),
    );
    const nodeMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.06,
      transparent: true,
      opacity: 0.95,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodes);

    // Connecting Synapse Lines
    const linePositions = [];
    for (let i = 0; i < nodePositions.length / 3; i++) {
      const j = (i + 7) % (nodePositions.length / 3);
      linePositions.push(
        nodePositions[i * 3],
        nodePositions[i * 3 + 1],
        nodePositions[i * 3 + 2],
        nodePositions[j * 3],
        nodePositions[j * 3 + 1],
        nodePositions[j * 3 + 2],
      );
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3),
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x4facfe,
      transparent: true,
      opacity: 0.18,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    // Data Orbit Rings
    const ringGeo = new THREE.TorusGeometry(1.9, 0.008, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    group.add(ring);

    // Mouse Interaction
    const mouse = { x: 0, y: 0 };
    const onMove = (event) => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.7;
      mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.7;
    };
    host.addEventListener("pointermove", onMove);

    // Animation Loop
    let frame;
    const clock = new THREE.Clock();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      group.rotation.y += (mouse.x - group.rotation.y) * 0.02;
      group.rotation.x += (-mouse.y - group.rotation.x) * 0.02;
      particleCloud.rotation.y = t * 0.04;
      core.rotation.x = t * 0.1;
      core.rotation.y = -t * 0.12;
      ring.rotation.z = t * 0.2;
      innerSphere.scale.setScalar(1 + Math.sin(t * 1.5) * 0.035);
      renderer.render(scene, camera);
    };
    animate();

    // Responsive Canvas
    const resize = () => {
      if (!host.clientWidth || !host.clientHeight) return;
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      host.removeEventListener("pointermove", onMove);

      pGeo.dispose();
      pMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="neural-ai-container"
      ref={mountRef}
      role="img"
      aria-label="Interactive AI Neural Core Visualization"
    />
  );
}

export default NeuralAIScene;
