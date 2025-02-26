"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 20 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.7 } }
  };

  return (
    <motion.div 
      className="min-h-screen  flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-3xl mx-auto p-8  shadow-lg rounded-lg  dark:border border-gray-600"
        variants={textVariants}
      >
        <motion.h1 
          className="text-4xl font-bold mb-6 text-purple-500"
          variants={textVariants}
        >
          Terms and Conditions
        </motion.h1>
        
        <motion.p className=" mb-4" variants={textVariants}>
          Welcome to My Portfolio! By using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern My Portfolio’s relationship with you in relation to this website.
        </motion.p>
        
        <motion.h2 className="text-2xl font-semibold mt-6 mb-3 text-purple-500" variants={textVariants}>
          1. Use of the Website
        </motion.h2>
        <motion.p className=" mb-4" variants={textVariants}>
          The content of the pages of this website is for your general information and use only. It is subject to change without notice.
        </motion.p>
        
        <motion.h2 className="text-2xl font-semibold mt-6 mb-3 text-purple-500" variants={textVariants}>
          2. Intellectual Property
        </motion.h2>
        <motion.p className=" mb-4" variants={textVariants}>
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-6 mb-3 text-purple-500" variants={textVariants}>
          3. Limitation of Liability
        </motion.h2>
        <motion.p className=" mb-4" variants={textVariants}>
          Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-6 mb-3 text-purple-500" variants={textVariants}>
          4. Termination
        </motion.h2>
        <motion.p className=" mb-4" variants={textVariants}>
          We reserve the right to terminate your use of the website for any reason, without notice, at any time.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-6 mb-3 text-purple-500" variants={textVariants}>
          5. Contact Us
        </motion.h2>
        <motion.p className="" variants={textVariants}>
          If you have any questions about these terms, please contact us at [mukulchauhan64976@gmail.com].
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Terms;
