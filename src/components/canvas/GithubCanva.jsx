import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function GithubCanvas({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, -Math.PI / 3, 0], transitionDuration = 0.7 }) {
  const modelRef = useRef();
  const mixerRef = useRef();
  const clock = new THREE.Clock();

  const actions = useRef({});
  let activeAction, previousAction;
  let loopCount = 0;
  const maxLoops = 2;

  useEffect(() => {
    const loader = new FBXLoader();

    const playAnimations = async () => {
      if (!modelRef.current) return;

      const model = modelRef.current.children[0];
      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      model.scale.set(scale, scale, scale);
      model.position.set(...position);
      model.rotation.set(...rotation);

      const animationPaths = {
        sitToType: './character/ashokanims/typing/Sit To Type.fbx',
        typing: './character/ashokanims/typing/Typing.fbx',
        typeToSit: './character/ashokanims/typing/Type To Sit.fbx',
      };

      const loadAnimation = (path, animationName) => {
        return new Promise((resolve) => {
          loader.load(path, (anim) => {
            if (anim.animations.length > 0) {
              const action = mixer.clipAction(anim.animations[0]);
              action.setLoop(animationName === 'idle' ? THREE.LoopRepeat : THREE.LoopOnce, animationName === 'idle' ? Infinity : 1);
              action.clampWhenFinished = animationName !== 'idle';

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
          previousAction.fadeOut(duration).stop();
        }

        activeAction
          .reset()
          .setEffectiveTimeScale(1)
          .setEffectiveWeight(1)
          .fadeIn(duration)
          .play();
      };

      const playSequence = () => {
        fadeToAction('sitToType', transitionDuration);

        actions.current.sitToType?.getMixer().addEventListener('finished', () => {
          fadeToAction('typing', transitionDuration);
          actions.current.typing?.getMixer().addEventListener('finished', () => {
            fadeToAction('typeToSit', transitionDuration);
            actions.current.typeToSit?.getMixer().addEventListener('finished', () => {
              if (loopCount < maxLoops) {
                loopCount++;
                playSequence(); // Restart the sequence
              } else {
                // End sequence
                actions.current = {}; // Clear the actions
                mixerRef.current.stopAllAction(); // Stop all animations
              }
            });
          });
        });
      };

      await loadAnimation(animationPaths.sitToType, 'sitToType');
      await loadAnimation(animationPaths.typing, 'typing');
      await loadAnimation(animationPaths.typeToSit, 'typeToSit');

      playSequence();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && window.location.hash === '#about') {
        playAnimations();
      } else {
        stopAnimations();
      }
    };

    const stopAnimations = () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };

    loader.load(modelPath, (model) => {
      modelRef.current.clear(); // Ensure no previous model is attached
      modelRef.current.add(model);

      window.addEventListener('hashchange', handleVisibilityChange);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      handleVisibilityChange(); // Check initial hash

      return () => {
        window.removeEventListener('hashchange', handleVisibilityChange);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        stopAnimations();
        if (modelRef.current) {
          modelRef.current.clear();
        }
      };
    });

  }, [modelPath, scale, position, rotation, transitionDuration]);

  useFrame(() => {
    if (mixerRef.current && window.location.hash === '#about') {
      const delta = clock.getDelta();
      mixerRef.current.update(delta);
    }
  });

  return <group ref={modelRef} />;
}

export default GithubCanvas;
