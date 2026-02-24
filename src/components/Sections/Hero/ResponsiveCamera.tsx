import { useThree, useFrame } from "@react-three/fiber";

export const INITIAL_CAMERA_POSITION = [1.5, 1, 1.4] as const;

export const ResponsiveCamera = () => {
  const { camera, size } = useThree();

  useFrame(() => {
    const scale = Math.max(Math.min(1000 / size.width, 2.2), 1);

    camera.position.set(
      INITIAL_CAMERA_POSITION[0] * scale,
      INITIAL_CAMERA_POSITION[1] * scale,
      INITIAL_CAMERA_POSITION[2] * scale,
    );

    camera.lookAt(-0.2, 0.15, 0);
  });

  return null;
};
