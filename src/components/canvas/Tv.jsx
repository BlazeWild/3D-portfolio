/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AleixoAlonso (https://sketchfab.com/AleixoAlonso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/television-wall-mounted-ce05a5d98b54400184ab60262dbf7232
Title: Television (Wall-mounted)
*/

import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function TV(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models/tv1.glb');
    const { actions } = useAnimations(animations, group);
  
    const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');
    // txt.rotation = -Math.PI/2;
  
    useEffect(() => {
        if (txt) {
            txt.flipY = false;
            // Optionally, adjust the UV mapping here if needed
            // const geometry = nodes.Object_5.geometry;
            // geometry.computeBoundingBox();
            // const box = geometry.boundingBox;
            // const scaleX = 1 / (box.max.x - box.min.x);
            // const scaleY = 1 / (box.max.y - box.min.y);
            // geometry.attributes.uv.array.forEach((uv, index) => {
            //     // Apply scaling or other transformations to UVs here
            //     // This example just scales the UVs
            //     uv.x *= scaleX;
            //     uv.y *= scaleY;
            // });
            // geometry.attributes.uv.needsUpdate = true;
        }
    }, [txt]);
  
    // useGSAP(() => {
    //   gsap.from(group.current.rotation, {
    //     y: Math.PI / 2,
    //     duration: 1,
    //     ease: 'power3.out',
    //   });
    // }, [txt]);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.TVS0001_Metal_Black}
      />
      {/*TV screen*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.TVS0001_Screen}
      >
        <meshBasicMaterial map={txt}/>
    </mesh>

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

useGLTF.preload('models/tv1.glb')
