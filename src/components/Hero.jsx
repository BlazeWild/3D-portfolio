import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  // const { pathname } = useLocation();
  // const shouldAnimate = pathname === '/' || pathname === '/hero'; // Adjust based on your route
  return (
    <section className='relative w-full h-screen mx-auto
      bg-[url(./assets/bg/floor5.jpg)] bg-cover bg-no-repeat bg-center
    '>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00e0e8]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div> */}
        <div className='text-center'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#11101e]'>Ashok</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An AI/ML enthusiast with a passion <br className='sm:block hidden' />
            for games and exploring new tech
          </p>
        </div>
        
        {/* <ComputersCanvas  shouldAnimate={shouldAnimate}/> */}
        <ComputersCanvas/>
         {/*rounded button*/}

        <div className='absolute xs:bottom-10 bottom-20 w-full
        flex justify-center items-center'>
          <a href="#about">
          <div className="w-[35px h-[64px] rounded-3xl border-4 border-primary flex
          justify-center items-start p-2">
            <motion.div
            animate={{y: [0, 24, 0]}}
            transition={{repeat: Infinity,repeatType:'loop', duration: 2}}
            className='w-3 h-3 rounded-full bg-primary mb-1'
            />
          </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
