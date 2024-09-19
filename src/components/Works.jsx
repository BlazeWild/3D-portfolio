import React, { Suspense, useEffect,useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import '../WorksCards.css'; // Ensure this includes the hover effect CSS
import { aiProjects, gamesProjects } from '../hoc/index.js';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from './CanvasLoader.jsx';
import { SmartTV } from './canvas/SmartTv.jsx';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const worksRef = useRef(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isOn, setIsOn] = useState(false); // State for the toggle switch

  const toggleSwitch = () => {
    setIsOn(!isOn); // Toggle the state between true and false
  };

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      const totalProjects = projectsToShow.length;
      if (direction === 'previous') {
        return prevIndex === 0 ? totalProjects - 1 : prevIndex - 1;
      } else {
        return prevIndex === totalProjects - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  
  // useGSAP(() => {
  //   gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  // }, [selectedProjectIndex]);

  const projectsToShow = isOn ? gamesProjects : aiProjects;
  const currentProject = projectsToShow[selectedProjectIndex];
  

  // GSAP Animations
  useEffect(() => {
    const elements = worksRef.current.querySelectorAll('.fade-in');

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
<section  ref={worksRef}
  className="relative items-center w-full h-auto mx-auto"
  // style={{
  //   backgroundImage: `url(${isOn ? 'gradients/gamesgrad1.png' : 'gradients/aigrad1.png'})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // }}
>
<p className={`text-center ${styles.sectionHeadText} fade-in`} data-direction="top">My works</p>


<div className="flex justify-center items-center my-6 space-x-4">
  {/* Label for AI on the left */}
  <span
    className={`text-toggle2 text-lg font-semibold ${styles.worksLogoText} fade-in`} data-direction="left">
    AI
  </span>

  <div
  onClick={toggleSwitch}
  className={`relative w-24 h-10 flex items-center rounded-full p-1 cursor-pointer fade-in ${isOn ? 'bg-toggle1' : 'bg-toggle2'}`}
>
    {/* Toggle Circle */}
    <div
      className={`bg-quaternary w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-14' : 'translate-x-0'}`}>

      </div>
  </div>

  {/* Label for Games on the right */}
  <span
    className={`text-toggle1 text-lg font-semibold ${styles.worksLogoText} fade-in`} data-direction="right">
    Games
  </span>
</div>




    {/*Project div*/}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

     <div className="overlay-container relative flex flex-col gap-3 sm:p-8 py-8 px-4 shadow-2xl shadow-blue-20 group fade-in" flex-direction="left">
  <div className=" bg-blur absolute top-0 right-0 absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentProject.bg_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
    <img
      src={currentProject.spotlight}
      alt="spotlight"
      className="w-full h-96 object-cover rounded-xl"
    />
  </div>

  <div className="relative z-10 p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
    <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
  </div>

  <div className="relative mt-10 flex flex-col text-white-600 flex-grow">
  {/* Title and Description container */}
  <div className="flex flex-col relative z-10 transition-transform duration-500 group-hover:translate-y-[-50px]">
    {/* Title visible initially at the bottom */}
    <p className="text-white text-2xl font-semibold transition-transform duration-500 transform translate-y-[50px] group-hover:translate-y-0">
      {currentProject.title}
    </p>

    {/* Description initially hidden, appears on hover */}
    <p className="text-white mt-2 transition-opacity duration-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0">
      {currentProject.desc}
    </p>
  </div>
</div>

  <div className="flex justify-between items-center mt-auto mb-1 relative z-10 ">
    <button className="arrow-btn w-8 h-8" onClick={() => handleNavigation('previous')}>
      <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
    </button>

    <a
      className="flex items-center gap-2 cursor-pointer text-white-600"
      href={currentProject.href}
      target="_blank"
      rel="noreferrer"
    >
      <p>Check Live Site</p>
      <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
    </a>

    <button className="arrow-btn w-8 h-8" onClick={() => handleNavigation('next')}>
      <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
    </button>
  </div>

</div>

        <div className=" canva-shadow shadow-2xl shadow-blue-20 
        rounded-lg
        h-96 md:h-full fade-in" flex-direction="right">
          <Canvas
            style={{ background: '#0d0c18' }} 
          >
            <ambientLight intensity={0.1} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={5} position={[0, -2.5, 0]} rotation={[0, 0.2, 0]}>
                  <SmartTV texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
