import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>About Page</h1>
      <p>About our project.</p>
    </motion.div>
  );
};

export default About;
