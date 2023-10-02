import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideIn = {
    hidden: { x: -20 },
    visible: { x: 0 },
  };

  return (
    <motion.div
      className="bg-black text-neon-green min-h-screen p-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-c8 md:text-c7 font-extrabold tracking-tight text-center">
          Contact Me
        </h2>

        <motion.div
          className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mt-8"
          variants={slideIn}
          initial="hidden"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="text-xl text-gray-300 flex items-center">
              <FaEnvelope />
              <span className="ml-2">ahmadhassan0381@gmail.com</span>
            </div>
            <div className="text-xl text-gray-300 flex items-center">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/ahmadhassan-drfidget/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline"
              >
                Ahmad Hassan
              </a>
            </div>
            <div className="text-xl text-gray-300 flex items-center">
              <FaPhone />
              <span className="ml-2">+923098809323</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

// import React from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";

// const Contact: React.FC = () => {
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const slideIn = {
//     hidden: { x: -20 },
//     visible: { x: 0 },
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.target as HTMLFormElement;

//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_USER_ID")
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     form.reset();
//   };
//   return (
//     <motion.div
//       className="bg-black text-neon-green min-h-screen p-8"
//       initial="hidden"
//       animate="visible"
//       variants={fadeIn}
//     >
//       <div className="max-w-2xl mx-auto">
//         <h2 className="text-c8 md:text-c7 font-extrabold tracking-tight text-center">
//           Contact Me
//         </h2>

//         <motion.div
//           className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mt-8"
//           variants={slideIn}
//           initial="hidden"
//         >
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-400 text-sm font-medium mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="bg-gray-700 focus:ring-neon-green focus:border-neon-green block w-full border-gray-300 rounded-md py-2 px-3 text-gray-300 text-sm"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-gray-400 text-sm font-medium mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="bg-gray-700 focus:ring-neon-green focus:border-neon-green block w-full border-gray-300 rounded-md py-2 px-3 text-gray-300 text-sm"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-gray-400 text-sm font-medium mb-2"
//                 htmlFor="message"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows={4}
//                 className="bg-gray-700 focus:ring-neon-green focus:border-neon-green block w-full border-gray-300 rounded-md py-2 px-3 text-gray-300 text-sm"
//                 required
//               />
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="bg-neon-green hover:bg-opacity-80 text-black font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Contact;
