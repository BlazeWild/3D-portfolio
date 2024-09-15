import React , {useEffect} from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-[300px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient 
      p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={
          {max: 45, scale: 1, speed: 400}}
          className='bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[20px] flex
          justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain' />
            <h3 className="text-white text-[20px] font-bold text-center
            ">
              title
            </h3>
        </div>
      </motion.div>
    </Tilt>
)
}

const About = () => {
  // useEffect(() => {
  //   window.location.hash = '#about'; // Set the hash to 'about' when the component is loaded

  //   return () => {
  //     window.location.hash = ''; // Clear the hash when the component is unmounted
  //   };
  // }, []);

  return (
    <>
    <section className="relative w-full h-screen mx-auto"> 
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("","",0.1,1)}  
    className="mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]"  
    >
      Hello bro How are you doing. 
      kjasd fjhsdff games joijf and exploring new tech
      mjn and new games and exploring new tech
      mjn and new games and exploring new tech
      mjn and new games and exploring new tech
      mjn and new games and exploring new tech
      mjn and new games and exploring new tech

    </motion.p>


    {/*cards*/}
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title}
        index={index} {...service}/>
      ))}
    </div>
    
    {/* <div className="mt-20 flex flex-wrap gap-10">
  <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlazeWild&show_icons=true&theme=transparent"
    alt="GitHub Stats"
    loading="lazy"
    className="w-[400px] h-auto rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
  />

  <img
    src="https://github-readme-stats.vercel.app/api?username=BlazeWild&show_icons=true&theme=transparent"
    alt="GitHub Stats"
    loading="lazy"
    className="w-[600px] h-auto rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
  />

<img
    src="https://skillicons.dev/icons?i=python,tensorflow,pytorch,javascript,react,unity,c"
    alt="Tech Icons"
    loading="lazy"
    className="w-[600px] h-auto rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
  />

<a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=BlazeWild&theme=dark&type=png&background=EB545400&ring=90CCE2&currStreakLabel=90CCE2" alt="GitHub Streak" /></a>
</div> */}

    
    {/* <WorkSpaceCanva /> */}

    </section>

    </>
  )
}

export default SectionWrapper(About,"about");