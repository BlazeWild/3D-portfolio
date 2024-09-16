import React from 'react';
import { SectionWrapper } from '../hoc';
import CardSwitcher from './CardSwitcher';  // Import the CardSwitcher component

const Works = () => {
  return (
    <section className="">
      <h2>Works</h2>
      <CardSwitcher />
    </section>
  );
};

export default SectionWrapper(Works, "works");
