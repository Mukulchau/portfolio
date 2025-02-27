"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center " >
      <motion.div
        className=" p-8 rounded-lg shadow-lg max-w-2xl dark:border border-gray-600 hover:border hover:border-green-400"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex flex-col text-green-400 items-center">
          <Image
           src="/WhatsApp Image 2025-02-26 at 13.23.01_3bd9274b.jpg"
            alt="Profile"
            height={'128'}
            width={'128'}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2 text-green-500">Mukul Chauhan</h1>
          <p className=" mb-4">FullStack Developer(MERN)</p>
          <p className=" text-center">
          Passionate Full-Stack Developer with expertise in front-end design back-end development and scalable web solutions I create impactful efficient websites and applications that bring ideas to life Lets collaborate to turn your vision into reality
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
