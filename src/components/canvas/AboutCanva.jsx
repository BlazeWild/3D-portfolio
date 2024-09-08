import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import GithubCanvas from './GithubCanva';

const Desk = () => {
  const desk = useGLTF('./models/desk/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="blue" />
      <directionalLight
        position={[10, 10, 10]} // Adjust position as needed
        intensity={0.1} // Adjust intensity as needed
        castShadow // Enable shadow casting
      >
      </directionalLight>
      <ambientLight intensity={0.8} />
      <primitive 
        object={desk.scene}
        scale={[0.8, 0.8, 0.8]}

        position={[-3.4, -4,1.7]}
        rotation={[0,-Math.PI/0.8-Math.PI/1.7, 0]}
      />
    </mesh>
  );
};

const Plane=()=>{
  return(
    <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <circleGeometry args={[100, 10]} />
      <shadowMaterial opacity={1} />
    </mesh>
  )
}

const WorkSpaceCanva = () => {

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 15, 15], fov: 30 , rotation: [0, 0, 0]}}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <Suspense fallback={null
      }>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} shadow />
       
        {/* <spotLight 
        position={[1, 0, 1]} 
        rotation={[0.57,0.57,-0.57]}
        intensity={0.8} /> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default WorkSpaceCanva;
