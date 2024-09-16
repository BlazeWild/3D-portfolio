import React, { useEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {Github} from '/Githubstats/Github';
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 1)}
      className={`xs:w-[250px] w-[300px] w-full ${styles.card}`} // Apply card style here
    >
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};


const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    const elements = aboutRef.current.querySelectorAll('.fade-in');

    elements.forEach((el, index) => {
      gsap.fromTo(el, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', // Starts when the element comes into view
          toggleActions: 'play none none reverse',
          end: 'top 20%',
        },
        delay: 0.2 * index, // Delaying each element for a staggered effect
      });
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto" ref={aboutRef}>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionHeadText}>About Me</p>
      </motion.div>

<div  className="flex justify-center  mt-4 ">
  {/* <div className="border-2 border-[#90cce2] p-6 rounded-lg shadow-lg w-full max-w-[1000px]"> */}
  <div className=" p-6 rounded-lg shadow-lg w-full max-w-[1000px]">

    <div className="flex flex-col sm:flex-row gap-10 items-start">
      <div className={`flex justify-center items-start mt-5 flex-shrink-0 w-[200px] h-[200px] rounded-[10px] overflow-hidden${styles.card}`}>
        <img
          src="src\assets\asokbk2.jpg"  
          alt="Ashok"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary text-[16px] max-w-3xl leading-[30px] mt-4 sm:mt-0 text-justify sm:text-left"
      >
        <p>
        I'm Ashok, a 3rd-year Computer Engineering student at IOE Pulchowk Campus, Lalitpur.
        I’m deeply passionate about AI and machine learning, and I thrive on merging these technologies with music, gaming, and animation.
          </p>
        <br />
          <p>
          When I’m not immersed in coding, you’ll catch me crafting melodies, bringing animations to life,
           and exploring new artistic realms. These creative pursuits let me fuse artistry with technology, resulting in uniquely exciting and innovative projects.          </p>
        <br />
        <p>
        For a closer look at my work and experiences, check out my resume!
          </p>
      </motion.p>
    <br/>
      <a
        href="/path-to-your-resume"
        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
      >
        <span className="mr-2">Resume</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
      </div>
    </div>
  </div>
</div>

<hr/>


{/* 
     <div className='py-20 w-full'>
      <div className='grid gird-cols-12 gap-8 w-full'>
        <ItemLayout className='col-span-6'>
        <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlazeWild&show_icons=true&theme=transparent"
            alt="GitHub Top Languages"
            loading="lazy"
            className={'w-full h-auto ${styles.card}'}
          />
        </ItemLayout>

      </div>
      </div> */}

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
  
      <motion.div
        variants={fadeIn('right', '', 0.1, 1)}
        className={`flex w-[480px] h-auto`}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlazeWild&show_icons=true&theme=transparent&border_color=90CCE2&text_color=ffffff&title_color=90CCE2"
            alt="GitHub Top Languages"
            loading="lazy"
            className={`w-full h-autorounded-lg shadow-md ${styles.card}`}
          />
        </motion.div>
        
        <div className='w-[500] rounded-lg items-center justify-center'>
            <motion.div 
              variants={fadeIn('down', '', 0.1, 1)}
            className={`flex-1 rounded-lg`}>
              <img
                src="https://github-readme-stats.vercel.app/api?username=BlazeWild&show_icons=true&theme=transparent&border_color=90CCE2&text_color=ffffff&title_color=90CCE2"
                alt="GitHub Stats"
                className={`w-full h-auto rounded-lg shadow-md ${styles.card}`}
      
              />
            </motion.div>

          <motion.div 
          variants={fadeIn('left', '', 0.1, 1)}
          className={`flex-2 mt-10 rounded-lg`}>
          <img src="https://github-readme-streak-stats.herokuapp.com?user=BlazeWild&theme=dark&background=EB545400&ring=90CCE2&border=90CCE2&sideNums=90CCE2&currStreakLabel=90CCE2"
          alt="GitHub Streak"
          className={`w-full h-auto rounded-lg shadow-md ${styles.card}`}
          />
          </motion.div>

        </div>


</div>

<motion.div 
  variants={fadeIn('up', '', 0.1, 1)}
  className="mt-10 flex flex-wrap gap-10 items-center justify-center"
>
  <img
    src="https://skillicons.dev/icons?i=python,tensorflow,pytorch,javascript,react,threejs,html,tailwind,c,cpp,cs,unity,blender,ps&perline=7"
    alt="Tech Icons"
    loading="lazy"
    className={`w-[800px] h-[200px] rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl ${styles.card}`}
  />
</motion.div>

  </section>
  );
};

export default SectionWrapper(About, 'about');
