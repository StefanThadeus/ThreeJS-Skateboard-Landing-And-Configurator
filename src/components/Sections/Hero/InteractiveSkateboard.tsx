"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { ContactShadows, Environment, Html } from "@react-three/drei";
import { SkateboardModel } from "../../Models/Skateboard";
import * as THREE from "three";
import gsap from "gsap";
import { Hotspot } from "./Hotspot";
import { INITIAL_CAMERA_POSITION, ResponsiveCamera } from "./ResponsiveCamera";
import { WavyPaths } from "./WavyPaths";
import { useGSAP } from "@gsap/react";

export const InteractiveSkateboard = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: INITIAL_CAMERA_POSITION, fov: 55 }}
      >
        <Suspense>
          <ResponsiveCamera />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Scene = () => {
  const originRef = useRef<THREE.Group>(null);
  const containerRef = useRef<THREE.Group>(null);

  const [animating, setAnimating] = useState(false);

  const [showHotspot, setShowHotspot] = useState({
    front: true,
    middle: true,
    back: true,
  });

  useGSAP(() => {
    if (!originRef.current || !containerRef.current) return;

    const common = { duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" };

    gsap.to(containerRef.current.position, { x: 0.2, ...common });

    gsap.to(originRef.current.rotation, { y: Math.PI / 64, ...common });
  });

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    const board = containerRef.current;
    const origin = originRef.current;

    if (!board || !origin || animating) return;

    const { name } = event.object;

    setAnimating(true);
    setShowHotspot((prev) => ({ ...prev, [name]: false }));

    switch (name) {
      case "back":
        ollie(board);
        break;
      case "middle":
        kickFlip(board);
        break;
      case "front":
        frontSide360(board, origin);
    }
  };

  const jumpBoard = (board: THREE.Group) => {
    gsap
      .timeline({ onComplete: () => setAnimating(false) })
      .to(board.position, {
        y: 0.8,
        duration: 0.51,
        ease: "power2.out",
        delay: 0.26,
      })
      .to(board.position, { y: 0, duration: 0.43, ease: "power2.in" });
  };

  const ollie = (board: THREE.Group) => {
    jumpBoard(board);

    gsap
      .timeline()
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  };

  const kickFlip = (board: THREE.Group) => {
    jumpBoard(board);

    gsap
      .timeline()
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(
        board.rotation,
        {
          z: `+=${Math.PI * 2}`,
          duration: 0.78,
          ease: "none",
        },
        0.3,
      )
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  };

  const frontSide360 = (board: THREE.Group, origin: THREE.Group) => {
    jumpBoard(board);

    gsap
      .timeline()
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(
        origin.rotation,
        {
          y: `+=${Math.PI * 2}`,
          duration: 0.77,
          ease: "none",
        },
        0.3,
      )
      .to(board.rotation, {
        x: 0,
        duration: 0.14,
        ease: "none",
      });
  };

  return (
    <group>
      <Environment files="/hdr/warehouse-256.hdr" />

      <group ref={originRef}>
        <group ref={containerRef} position={[-0.25, 0, -0.635]}>
          <group position={[0, -0.086, 0.635]}>
            <SkateboardModel
              deckVariant="greenAndNavy"
              wheelVariant="green"
              boltColor="#394D62"
              truckColor="#394D62"
              constantWheelSpin
            />

            {showHotspot.front && !animating && (
              <Hotspot position={[0, 0.38, 1]} color="#B8FC39" />
            )}

            {showHotspot.middle && !animating && (
              <Hotspot position={[0, 0.33, 0]} color="#FF7A51" />
            )}

            {showHotspot.back && !animating && (
              <Hotspot position={[0, 0.35, -0.9]} color="#46ACFA" />
            )}

            <mesh position={[0, 0.27, 0.9]} name="front" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>

            <mesh position={[0, 0.27, 0]} name="middle" onClick={onClick}>
              <boxGeometry args={[0.6, 0.1, 1.2]} />
              <meshStandardMaterial visible={false} />
            </mesh>

            <mesh position={[0, 0.27, -0.9]} name="back" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>
          </group>
        </group>
      </group>

      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />

      <group
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[-0.8, -0.09, -0.5]}
        scale={[0.2, 0.2, 0.2]}
      >
        <Html
          wrapperClass="pointer-events-none"
          transform
          zIndexRange={[1, 0]}
          occlude="blending"
        >
          <WavyPaths />
        </Html>
      </group>
    </group>
  );
};
