import React from "react";

import { motion } from "framer-motion";

const expertiseList = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "HTML/CSS",
  "C++",
  "Database Design",
  "SQL",
];

const About: React.FC = () => {
  return (
    <motion.div
      className="bg-black text-neon-green py-16 min:h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className=" text-c9 md:text-c8 font-bold mb-4">About Me</h1>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi there! I'm Ahmad Hassan, a passionate software developer with a
              strong background in web and application development. I enjoy
              solving complex problems and creating interactive user
              experiences.
              <br />
              <br />I am proficient in C++, possess a strong foundation in
              computer science, and have a deep passion for technology. I have
              successfully completed various projects, like Red-Black Trees,
              text processor (OOP-C++), and e-commerce websites. I am skilled in
              using frameworks like React and am currently dedicated to
              developing my own SAAS application.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Expertise
            </h2>
            <motion.ul
              className="list-disc list-inside text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {expertiseList.map((item, index) => (
                <motion.li
                  key={index}
                  className="mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
