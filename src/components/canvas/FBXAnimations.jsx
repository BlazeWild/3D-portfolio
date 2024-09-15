// src/components/FBXAnimations.jsx
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FBXAnimations = ({ modelRef, animationPaths, transitionDuration = 1 }) => {
  const mixerRef = useRef();
  const clock = useRef(new THREE.Clock());
  const actions = useRef({});
  const activeAction = useRef(null);
  const previousAction = useRef(null);

  useEffect(() => {
    if (!modelRef.current) return;

    const model = modelRef.current;
    const mixer = new THREE.AnimationMixer(model);
    mixerRef.current = mixer;

    const loader = new FBXLoader();

    const loadAnimation = (path, name, loop = false) => {
      return new Promise((resolve) => {
        loader.load(path, (anim) => {
          if (anim.animations.length > 0) {
            const action = mixer.clipAction(anim.animations[0]);
            action.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
            action.clampWhenFinished = !loop;
            actions.current[name] = action;
            resolve(action);
          } else {
            resolve(null);
          }
        }, undefined, (error) => {
          console.error(`Error loading animation ${name}:`, error);
          resolve(null);
        });
      });
    };

    const fadeToAction = (name, duration) => {
      previousAction.current = activeAction.current;
      activeAction.current = actions.current[name];

      if (previousAction.current && previousAction.current !== activeAction.current) {
        previousAction.current.fadeOut(duration);
      }

      if (activeAction.current) {
        activeAction.current.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play();
      }
    };

    const playAnimations = async () => {
      await loadAnimation(animationPaths.waving, 'waving', false);
      await loadAnimation(animationPaths.idle, 'idle', true);

      fadeToAction('waving', transitionDuration);

      actions.current['waving']?.getMixer().addEventListener('finished', () => {
        fadeToAction('idle', transitionDuration);
      });
    };

    playAnimations();

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [modelRef, animationPaths, transitionDuration]);

  useFrame(() => {
    if (mixerRef.current) {
      mixerRef.current.update(clock.current.getDelta());
    }
  });

  return null;
};

export default FBXAnimations;
