import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import WavingUser from "./Wavinguser";
import { angleToRadians } from "utils/angle";

const ThreeModelContainer = () => {
  const ref = useRef();

  useFrame((state) => {
    if (!!ref.current) {
      const { x } = state.mouse;
      ref.current.setAzimuthalAngle(-x * angleToRadians(20));
    }
  });

  useEffect(() => {
    if (!!ref.current) {
      console.log(ref.current);
    }
  }, [ref.current]);

  return (
    <>
      <OrthographicCamera makedefault />
      <OrbitControls
        ref={ref}
        enableZoom={false}
        enabled={false}
        enablePan={false}
      />
      <ambientLight intensity={1} />
      <directionalLight intensity={0.5} />

      <Environment
        background={false} // Whether to affect scene.background
        preset={"sunset"}
      />
      <Suspense fallback={null}>
        <WavingUser />
        {/* <Text
            position={[0, 0, -0.2]}
            fontSize={0.6}
            color="white"
            font="/noto.woff"
            material-fog={false}
            letterSpacing={0}
          >
            hello
          </Text> */}
      </Suspense>
      {/* <mesh scale={4} position={[0, 1, -0.2]}>
          <planeGeometry />
          <meshStandardMaterial
            color="lightblue"
            toneMapped={false}
            fog={true}
            envMapIntensity={0}
          />
        </mesh> */}
    </>
  );
};

export default ThreeModelContainer;
