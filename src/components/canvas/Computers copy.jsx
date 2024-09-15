import React, {  useRef,Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF,Html } from '@react-three/drei';
import FBXModel from './FBXModel';
import CanvasLoader from '../CanvasLoader';

const Platform = () => {
  const platform = useGLTF('./models/platform/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="blue" />
      <directionalLight
        position={[10, 0, 10]} // Adjust position as needed
        intensity={0.1} // Adjust intensity as needed
        castShadow // Enable shadow casting
      >
      </directionalLight>
      <ambientLight intensity={0.8} shadow />
      <primitive 
        object={platform.scene}
        scale={[1.6, 0.5, 1.6]}

        position={[0, -5.5,0]}
        rotation={[0, - Math.PI/2.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [7, 5, 5], fov: 70 , rotation: [0, 0, 0]}}
      gl={{ preserveDrawingBuffer: false, alpha: true, antialias: true }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <Suspense fallback={<CanvasLoader/>

      }>

        <ambientLight intensity={1} shadow />
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}  // Enable damping to smoothen interaction
          dampingFactor={0.1}  // Adjust damping factor
        />
        <Platform />
        <FBXModel
          modelPath="./character/ashok.fbx"
          scale={0.045}
          position={[0, -5, 0]}
        />

        {/* <spotLight 
        position={[1, 0, 1]} 
        rotation={[0.57,0.57,-0.57]}
        intensity={0.8} /> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
