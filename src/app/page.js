'use client';  // Add this line at the top

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Welcome to Zeeshan Ahmad's Portfolio
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Site Reliability Engineer @ RELEX
      </p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8"
      >
        <a
          href="#about"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Learn More
        </a>
      </motion.div>
    </motion.div>
  );
}
