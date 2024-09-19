import React from 'react'
import {useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

gsap.registerPlugin(ScrollTrigger);

{/* WRITING BLOGS HERE*/}
const Tech = () => {
  const blogsRef = useRef(null);

    // GSAP Animations
    useEffect(() => {
      const elements = blogsRef.current.querySelectorAll('.fade-in');
  
      elements.forEach((el, index) => {
        const direction = el.getAttribute('data-direction');
  
        let fromVars = { opacity: 0 };
  
        switch (direction) {
          case 'left':
            fromVars.x = -50;
            break;
          case 'right':
            fromVars.x = 50;
            break;
          case 'top':
            fromVars.y = -50;
            break;
          case 'bottom':
            fromVars.y = 50;
            break;
          default:
            fromVars.y = 50;
        }
  
        gsap.fromTo(
          el,
          fromVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              end: 'top 20%',
            },
            delay: 0.2 * index,
          }
        );
      });
    }, []);

  return (
 <section  ref={blogsRef}
  className="relative items-center w-full h-auto mx-auto">
      <div className="text-center">
      <p className={`text-center ${styles.sectionHeadText} fade-in`} data-direction="top">Blogs</p>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            To be Updated..
          </p>
      </div>
    </section>
  )
}

export default SectionWrapper(Tech, "blog");