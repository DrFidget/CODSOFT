import React from "react";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../../assets/AH.png";
import rbt from "../../assets/rbt.png";

const projects = [
  {
    title: "Text Processor C++",
    description:
      "The Text Processor C++ project is a versatile and efficient text processing tool developed in C++. It empowers users to manipulate and analyze text data with ease. Whether you need to perform text transformations, extract valuable insights, or automate text-related tasks, this open-source project provides a robust foundation.",
    githubLink: "https://github.com/DrFidget/Text-Processor-C-",
    imageSrc: img, // Add the path to your project image
  },
  {
    title: "Red Black Trees (Data Stucture)",
    description:
      "Red-Black Trees are self-balancing binary search trees, ensuring fast and efficient operations for data insertion, deletion, and retrieval. They play a crucial role in maintaining balanced data structures, with applications in databases and algorithms.",
    githubLink: "https://github.com/DrFidget/RedBlackTrees",
    imageSrc: rbt, // Add the path to your project image
  },
  {
    title: "Caffine Addicts Website",
    description:
      "Caffeine Addicts offers an immersive coffee experience, blending HTML, CSS, JavaScript, and PHP with SQL integration. Explore our diverse menu, customize your orders, and enjoy aromatic brews and treats. ",
    githubLink: "https://github.com/DrFidget/CaffineAddicts",
    imageSrc: img, // Add the path to your project image
  },
  // Add more projects with images here
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const Projects: React.FC = () => {
  return (
    <div className="bg-black text-neon-green py-8 sm:py-16 h-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-c8 md:text-c7 font-extrabold tracking-tight mb-8">
            My Projects
          </h1>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-lg mb-8 hover:bg-gray-700 transition duration-300 ease-in-out"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                {project.title}
              </h2>
              <motion.img
                src={project.imageSrc}
                alt={project.title}
                className="mb-4 rounded-lg w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-green hover:text-white"
              >
                <FaGithub className="text-2xl inline align-middle" /> GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
