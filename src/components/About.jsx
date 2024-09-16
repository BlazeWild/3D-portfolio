import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current.querySelectorAll('.fade-in');
    
    elements.forEach((el, index) => {
      // Get the direction from the data attribute
      const direction = el.getAttribute('data-direction');
      
      let fromVars = { opacity: 0 };
      
      // Determine the direction to animate from
      switch (direction) {
        case 'left':
          fromVars.x = -100;
          break;
        case 'right':
          fromVars.x = 100;
          break;
        case 'top':
          fromVars.y = -100;
          break;
        case 'bottom':
          fromVars.y = 100;
          break;
        default:
          fromVars.y = 50; // Default is fade from the bottom
      }

      gsap.fromTo(el, fromVars, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', 
          toggleActions: 'play none none reverse',
          end: 'top 20%',
        },
        delay: 0.2 * index,
      });
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto" ref={aboutRef}>
      <div className="text-center fade-in" data-direction="top">
        <p className={styles.sectionHeadText}>About Me</p>
      </div>

      <div className="flex justify-center mt-4 " >
        <div className="p-6 rounded-lg shadow-lg w-full max-w-[1000px]">
          <div className="flex flex-col sm:flex-row gap-10 items-start fade-in "data-direction="left">
            <div className={`flex justify-center items-start mt-5 flex-shrink-0 w-[200px] h-[200px] rounded-[10px] overflow-hidden ${styles.card}`}>
              <img
                src="src/assets/asokbk2.jpg"  
                alt="Ashok"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="fade-in" data-direction="right">
              <p className="text-secondary text-[16px] max-w-3xl leading-[30px] mt-4 sm:mt-0 text-justify sm:text-left">
                I'm Ashok, a 3rd-year Computer Engineering student at IOE Pulchowk Campus, Lalitpur.
                I’m deeply passionate about AI and machine learning, and I thrive on merging these technologies with music, gaming, and animation.
              </p>
              <br />
              <p className="text-secondary text-[16px] max-w-3xl leading-[30px] mt-4 sm:mt-0 text-justify sm:text-left">
                When I’m not immersed in coding, you’ll catch me crafting melodies, bringing animations to life,
                and exploring new artistic realms. These creative pursuits let me fuse artistry with technology, resulting in uniquely exciting and innovative projects.
              </p>
              <br />
              <p>
                For a closer look at my work and experiences, check out my resume!
              </p>
              <br />
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

      {/* GitHub cards and Tech Icons */}
      <div className="mt-10 flex flex-wrap gap-10 justify-center " >
        <div className={`flex w-[480px] h-auto fade-in `}data-direction="left" >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlazeWild&show_icons=true&theme=transparent&border_color=90CCE2&text_color=ffffff&title_color=90CCE2"
            alt="GitHub Top Languages"
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-[500px] rounded-lg items-center justify-center fade-in"   data-direction="right" >
          <img
            src="https://github-readme-stats.vercel.app/api?username=BlazeWild&show_icons=true&theme=transparent&border_color=90CCE2&text_color=ffffff&title_color=90CCE2"
            alt="GitHub Stats"
            className="w-full h-auto rounded-lg shadow-md data"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=BlazeWild&theme=dark&background=EB545400&ring=90CCE2&border=90CCE2&sideNums=90CCE2&currStreakLabel=90CCE2"
            alt="GitHub Streak"
            className="w-full h-auto rounded-lg shadow-md mt-10"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-10 items-center justify-center fade-in" data-direction="bottom">
        <img
          src="https://skillicons.dev/icons?i=python,tensorflow,pytorch,javascript,react,threejs,html,tailwind,c,cpp,cs,unity,blender,ps&perline=7"
          alt="Tech Icons"
          loading="lazy"
          className="w-[800px] h-[200px] rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
        />
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
