import React from 'react';
import { myProjects, SectionWrapper } from '../hoc';
import { styles } from '../styles';
import '../cardcss.css';

const Works = () => {
  return (
<section className="relative w-full min-h-screen mx-auto">
<p className={styles.sectionHeadText}>My works</p>
<div className='grid lg:gris-cols-2
grid-cols-1 mt-12 gap-5 w-full'>
  <div className='flex flex-col gap-5 relative
  sm:p-10 py-10 px-5 shadow-2xl shadow-black-20'>
    {/*Card Area*/}
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src="img/1.jpg" alt=""/>
              <div className="overlay">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href='#'>Book Now</a>
              </div>
            </div>

            <div className="box">
              <img src="img/2.jpg" alt=""/>
              <div className="overlay">
                <h3>Scuba</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href='#'>Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src="img/3.jpg" alt=""/>
              <div className="overlay">
                <h3>Travel World</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href='#'>Book Now</a>
              </div>
            </div>

          </div>
        </div>

      </div>
  </div>
</div>
  </section>
  );
};

export default SectionWrapper(Works, "");
