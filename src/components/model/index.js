import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import WavingUser from "./Wavinguser";
import ThreeModelContainer from "./ThreeModelContainer";
const ModelCanvas = () => {
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
        <ThreeModelContainer />
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
