import React from 'react';
import { myProjects, SectionWrapper } from '../hoc';
import { styles } from '../styles';
import '../cardcss.css';

const Works = () => {
  return (
<section>
<p className={styles.sectionHeadText}>My works</p>
    {/*Card Area*/}
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src="src\assets\bg\bg2.jpg" alt=""/>
              <div className="overlay">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href='#'>Book Now</a>
              </div>
            </div>

            <div className="box">
              <img src="src\assets\bg\bg5.jpg" alt=""/>
              <div className="overlay">
                <h3>Scuba</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href='#'>Book Now</a>
              </div>
            </div>

            <div className="box">
              <img src="src\assets\bg\bg4.jpg" alt=""/>
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
  </section>
  );
};

export default SectionWrapper(Works, "");
