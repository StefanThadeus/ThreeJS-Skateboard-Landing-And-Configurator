import { Billboard } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type HotspotProps = {
  position: [number, number, number];
  color?: string;
};

export const Hotspot = ({ position, color = "#E6FC6A" }: HotspotProps) => {
  const hotspotRef = useRef<THREE.Mesh>(null);

  const setCursorPointer = () => (document.body.style.cursor = "pointer");

  const setCursorDefault = () => (document.body.style.cursor = "default");

  useEffect(() => {
    if (hotspotRef.current) {
      gsap.fromTo(
        hotspotRef.current.scale,
        { x: 0.8, y: 0.8, z: 0.8 },
        {
          x: 2.5,
          y: 2.5,
          z: 2.5,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
        },
      );
    }

    return () => {
      setCursorDefault();
    };
  }, []);

  return (
    <Billboard position={position} follow={true}>
      <mesh ref={hotspotRef}>
        <circleGeometry args={[0.02, 32]} />
        <meshStandardMaterial color="white" transparent opacity={0.5} />
      </mesh>

      <mesh onPointerOver={setCursorPointer} onPointerOut={setCursorDefault}>
        <circleGeometry args={[0.03, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Billboard>
  );
};
