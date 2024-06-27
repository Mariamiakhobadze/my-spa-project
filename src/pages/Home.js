import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
    </motion.div>
  );
};

export default Home;
