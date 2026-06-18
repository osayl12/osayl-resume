import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const MESHES = [
  { pos: [-4.5, 0.8, -3], color: "#00d9ff", geo: "icosahedron", size: 1.3, sx: 1,   sy: 0.8 },
  { pos: [5.5,  -0.6, -5], color: "#d2bbff", geo: "octahedron",  size: 1.6, sx: 0.6, sy: 1.2 },
  { pos: [2,    2.2,  -7], color: "#00d9ff", geo: "torus",       size: 0.9, sx: 0.8, sy: 0.5 },
  { pos: [-7,  -1.2, -6], color: "#d2bbff", geo: "icosahedron", size: 0.8, sx: 1.2, sy: 0.9 },
  { pos: [8.5,  1.2, -3], color: "#afecff", geo: "octahedron",  size: 0.6, sx: 0.9, sy: 1.1 },
  { pos: [-2,  -2.5, -8], color: "#d2bbff", geo: "torus",       size: 1.1, sx: 0.5, sy: 0.7 },
  { pos: [3.5,  3,   -9], color: "#00d9ff", geo: "icosahedron", size: 0.5, sx: 1.4, sy: 1.0 },
];

function WireMesh({ pos, color, geo, size, sx, sy }) {
  const ref = useRef();
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003 * sx;
    ref.current.rotation.y += 0.005 * sy;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={1}>
      <mesh ref={ref} position={pos}>
        {geo === "icosahedron" && <icosahedronGeometry args={[size, 0]} />}
        {geo === "octahedron"  && <octahedronGeometry  args={[size]}    />}
        {geo === "torus"       && <torusGeometry       args={[size, size * 0.3, 6, 12]} />}
        <meshBasicMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#000000", 10, 32]} />
      <Stars radius={80} depth={60} count={3000} factor={3.5} saturation={0} fade speed={0.8} />
      <gridHelper args={[60, 60, "#001e28", "#001018"]} position={[0, -4.5, 0]} />
      {MESHES.map((m, i) => (
        <WireMesh key={i} {...m} />
      ))}
      <EffectComposer>
        <Bloom luminanceThreshold={0.05} luminanceSmoothing={0.8} intensity={1.2} />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 65 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
    >
      <Scene />
    </Canvas>
  );
}
