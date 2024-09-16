import React,{useState} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import '../cardcss.css';
import { myProjects } from '../hoc/index.js';
import { events } from '@react-three/fiber';
// import { log } from 'three/examples/jsm/nodes/Nodes.js';


const projectCount = myProjects.length;



const Works = () => {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
<section className="relative w-full min-h-screen mx-auto">
<p className={styles.sectionHeadText}>My works</p>
<div className='grid lg:gris-cols-2
grid-cols-1 mt-12 gap-5 w-full'>
  <div className='flex flex-col gap-5 relative
  sm:p-10 py-10 px-5 shadow-2xl shadow-black-20'>
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>
    {/*text*/}  
    <div className="flex flex-col gap-5 text-white my-5">
      <p className="text-white text-2xl font-semibold animatedText">
        {currentProject.title}</p>
      <p className="animatedText">
        {currentProject.desc}</p>

      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3">
          {currentProject.tags.map((tag, index) => (
            <div key={index} className="tech-logo">
              <img src={tag.path} alt={tag.name}/>
          </div>
          ))}
      </div>
          <a
              className="flex items-center gap-2 cursor-pointer text-white"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              style={{ pointerEvents: 'auto',
               }}
              >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              {console.log(currentProject.href)}
            </a>
      </div>
    </div>
  </div>
</div>
  </section>
  );
};

export default SectionWrapper(Works, "");
