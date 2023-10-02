import React from "react";
import { motion } from "framer-motion";

// Dummy data
const workExperience = [
  {
    title: "Software Developer",
    company: "Oratech Solutions",
    description:
      "Assisted in Oracle database application development, focusing on SQL query optimization and database schema design. Contributed to critical projects, gaining expertise in Oracle PL/SQL.",
  },
  {
    title: "Trainee Web Developer",
    company: "BehinDev",
    description:
      "Worked on web development projects, tackling front-end and back-end tasks. Gained hands-on experience in web development practices and coding skills.",
  },
  {
    title: "Trainee Web Developer",
    company: "CodSoft",
    description:
      "Contributed to web application and website development, specializing in UI design and clean code writing. Enhanced problem-solving abilities in a real-world web development environment.",
  },
];

const futureGoals = [
  "Become a full-stack developer",
  "Contribute to open-source projects",
  "Enhance AI and machine learning skills",
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "University of Central Punjab",
    year: "2020 - 2024",
  },
  {
    degree: "ICS Physics",
    school: "Punjab Group of Colleges",
    year: "2018 - 2020",
  },
];

const Career: React.FC = () => {
  // const fadeIn = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  const slideIn = {
    hidden: { x: -20 },
    visible: { x: 0 },
  };

  const hoverScale = {
    hover: { scale: 1.1 }, // Increase the scale on hover
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-black text-neon-green min-h-screen overflow-y-auto p-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-c8 md:text-c7 font-extrabold tracking-tight text-center">
          My Career
        </h2>

        {/* Work Experience */}
        <div className="mt-10">
          <h3 className="text-c9 md:text-c8 font-semibold mb-2">
            Work Experience
          </h3>
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              whileHover="hover"
              initial="hidden"
            >
              <motion.div
                className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mb-6 cursor-pointer"
                variants={hoverScale}
              >
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  variants={hoverScale}
                >
                  {job.title}
                </motion.h3>
                <motion.p className="text-gray-300 mb-2" variants={hoverScale}>
                  {job.company}
                </motion.p>
                <motion.p className="text-gray-400" variants={hoverScale}>
                  {job.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-10">
          <h3 className="text-c9 md:text-c8 font-semibold mb-2">
            Future Goals
          </h3>
          <motion.ul className="list-disc pl-8">
            {futureGoals.map((goal, index) => (
              <motion.li
                key={index}
                className="text-gray-400 mb-2 cursor-pointer"
                variants={hoverScale}
              >
                {goal}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Educational Background */}
        <div className="mt-10">
          <h3 className="text-c9 md:text-c8 font-semibold mb-2">
            Educational Background
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              whileHover="hover"
              initial="hidden"
            >
              <motion.div
                className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mb-6 cursor-pointer"
                variants={hoverScale}
              >
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  variants={hoverScale}
                >
                  {edu.degree}
                </motion.h3>
                <motion.p className="text-gray-300 mb-2" variants={hoverScale}>
                  {edu.school}
                </motion.p>
                <motion.p className="text-gray-400" variants={hoverScale}>
                  {edu.year}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Career;
