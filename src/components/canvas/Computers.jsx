// src/components/ComputersCanvas.jsx

import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Html, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import FBXModel from './FBXModel';
import FBXAnimations from './FBXAnimations';

const Platform = () => {
  const platform = useGLTF('./models/platform/scene.gltf');
  return (
    <primitive 
      object={platform.scene}
      scale={[1.6, 0.5, 1.6]}
      position={[0, -5.5, 0]}
      rotation={[0, -Math.PI / 2.2, 0]}
    />
  );
};

const ComputersCanvas = () => {
  const modelRef = useRef();

  const animationPaths = {
    waving: '/character/ashokanims/Waving1.fbx',
    idle: '/character/ashokanims/standidle1.fbx',
  };

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [7, 5, 5], fov: 70 }}
      gl={{ preserveDrawingBuffer: true, alpha: true, antialias: true }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: 'transparent',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1} />
        {/* <hemisphereLight intensity={1} groundColor="blue" /> */}
        <hemisphereLight intensity={1} groundColor="blue" />
        <directionalLight 
          position={[10, 0, 10]} 
          intensity={1} 
          castShadow 
        />

        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.1}
          enablePan={false}
        />

        {/* Models */}
        <Platform />
        <FBXModel
          modelPath="/character/ashok1.fbx"
          scale={0.045}
          position={[0, -5, 0]}
          rotation={[0, Math.PI / 3, 0]}
          ref={modelRef}
        />

        <FBXAnimations
          modelRef={modelRef}
          animationPaths={animationPaths}
          transitionDuration={1}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
