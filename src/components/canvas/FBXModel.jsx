// src/components/FBXModel.jsx

import React, { forwardRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FBXModel = forwardRef(({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }, ref) => {
  const fbx = useLoader(FBXLoader, modelPath);

  return (
    <primitive
      ref={ref}
      object={fbx}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
});

export default FBXModel;
