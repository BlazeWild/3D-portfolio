import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function FBXModel({ shouldAnimate=false, modelPath, scale = 1, position = [0, 0, 0], rotation = [0, Math.PI / 3.5, 0], transitionDuration = 0.7 }) {
  const modelRef = useRef();
  const mixerRef = useRef();
  const clock = new THREE.Clock();
  
  const actions = useRef({});
  let activeAction, previousAction;

  useEffect(() => {
    const loader = new FBXLoader();

    loader.load(modelPath, (model) => {
      model.scale.set(scale, scale, scale);
      model.position.set(...position);
      model.rotation.set(...rotation);

      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      modelRef.current.clear(); // Ensure no previous model is attached
      modelRef.current.add(model);

      const animationPaths = {
        waving: './character/ashokanims/Waving.fbx',
        idle: './character/ashokanims/standidle.fbx',
      };

      const loadAnimation = (path, animationName, loop = false) => {
        return new Promise((resolve) => {
          loader.load(path, (anim) => {
            if (anim.animations.length > 0) {
              const action = mixer.clipAction(anim.animations[0]);
              action.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
              action.clampWhenFinished = !loop;

              actions.current[animationName] = action;
              resolve(action);
            } else {
              resolve(null);
            }
          }, undefined, (error) => {
            console.error(`Error loading animation ${animationName}:`, error);
            resolve(null);
          });
        });
      };

      const fadeToAction = (name, duration) => {
        previousAction = activeAction;
        activeAction = actions.current[name];

        if (previousAction && previousAction !== activeAction) {
          previousAction.fadeOut(duration);
        }

        activeAction
          .reset()
          .setEffectiveTimeScale(1)
          .setEffectiveWeight(1)
          .fadeIn(duration)
          .play();
      };

      const playAnimations = async () => {
        await loadAnimation(animationPaths.waving, 'waving', false);
        await loadAnimation(animationPaths.idle, 'idle', true);

        fadeToAction('waving', transitionDuration);

        actions.current.waving?.getMixer().addEventListener('finished', () => {
          fadeToAction('idle', transitionDuration);
        });
      };

      playAnimations();

      return () => {
        if (mixerRef.current) {
          mixerRef.current.stopAllAction();
        }
        if (modelRef.current) {
          modelRef.current.clear();
        }
      };
    });

  }, [modelPath, scale, position]);

  useFrame(() => {
    if (mixerRef.current) {
      const delta = clock.getDelta();
      mixerRef.current.update(delta);
    }
  });

  return <group ref={modelRef} />;
}

export default FBXModel;
