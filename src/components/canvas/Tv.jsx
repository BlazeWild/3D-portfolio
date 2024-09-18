import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TV(props) {
  const { nodes, materials } = useGLTF('models/tv.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.TVS0001_Metal_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.TVS0001_Screen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.TVS0001_Plastic_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.TVS0001_Metal_Silver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.TVS0001_Standby}
      />
    </group>
  )
}

useGLTF.preload('models/tv.glb')