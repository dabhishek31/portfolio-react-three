import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Stage,
  PerspectiveCamera,
  OrthographicCamera,
  Html,
  Lightformer,
  Text,
} from "@react-three/drei";
// import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import WavingUser from "./Wavinguser";
import { Wavinguser2 } from "./Wavinguser2";
import { Wavinguser3 } from "./Wavinguser3";
import { Wavinguser4 } from "./Wavinguser4";
// import { PerspectiveCamera } from "three";
export const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;
function App() {
  const ref = useRef();
  useEffect(() => {
    if (!!ref.current) {
      console.log(ref.current, "---canvas");
    }
  }, [ref.current]);
  return (
    <div
      style={{
        position: "relative",
        height: "600px",
        outline: "solid 1px green",
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{
          outline: "solid 1px red",
          height: "600px",
          width: "400px",
          top: "40%",
          position: "absolute",
        }}
        ref={ref}
        shadows
        camera={{
          position: [0, 0.6, 2.45],
        }}
      >
        <InsideCanvas />
      </Canvas>
    </div>
  );
}

export default App;

export const InsideCanvas = () => {
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
      <mesh scale={4} position={[0, 1, -0.2]}>
        <planeGeometry />
        <meshStandardMaterial
          color="lightblue"
          toneMapped={false}
          fog={true}
          envMapIntensity={0}
        />
      </mesh>
    </>
  );
};
