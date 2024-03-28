import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//          I'm a MERN stack developer with a passion for machine learning and a track record of academic excellence. As a dedicated achiever, I seamlessly combine technical expertise in MongoDB, Express.js, React.js, and Node.js to craft seamless web applications. Beyond the MERN stack, my journey extends into the dynamic world of machine learning, where I innovate solutions for real-world challenges. 
//          <br/><br/>Connect with me to explore the fusion of MERN expertise and enthusiasm for machine learning, driving innovation at the intersection of academic excellence and technological creativity!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

// const About = () => {
//   return (
//     <>
    
//     <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>
//       <br/>
//       {/* For smaller screens (md and below), display the image flap above the overview heading */}
//       <div className='lg:hidden'>
//         {/* Add your photo here with the tilt effect */}
//         <Tilt options={{ max: 25, scale: 1.1, speed: 400 }}>
//           <motion.img
//             src="dp.jpg" // Replace with the actual URL of your photo
//             alt="Dhruv Tyagi"
//             className="w-60 h-60 rounded-full mx-auto border-4 border-white mb-4" // Display only on smaller screens
//           />
//         </Tilt>
//       </div>


//       {/* For larger screens (lg and above), display the image flap to the right of the text */}
//       <div className='mt-4 lg:flex'>
//         <div className='lg:flex-1'>
//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className='text-secondary text-[17px] max-w-3xl leading-[30px]'
//           >
//             I'm a MERN stack developer with a passion for machine learning and a track record of academic excellence. As a dedicated achiever, I seamlessly combine technical expertise in MongoDB, Express.js, React.js, and Node.js to craft seamless web applications. Beyond the MERN stack, my journey extends into the dynamic world of machine learning, where I innovate solutions for real-world challenges.
//             <br /><br />
//             Connect with me to explore the fusion of MERN expertise and enthusiasm for machine learning, driving innovation at the intersection of academic excellence and technological creativity!
//           </motion.p>
//         </div>

//         {/* Add your photo here with the tilt effect */}
//         <Tilt options={{ max: 35, scale: 1.5, speed: 400 }}>
//           <motion.img
//             src="dp.jpg" // Replace with the actual URL of your photo
//             alt="Dhruv Tyagi"
//             className="hidden lg:inline-block w-60 h-61 rounded-full ml-4 border-4 border-white" // Display only on larger screens
//           />
//         </Tilt>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
const About = () => {
  const handleDownloadResume = () => {
    // Replace "/path/to/your/resume.pdf" with the actual path or URL of your resume file
    const resumeUrl = "https://drive.google.com/file/d/1GgFtgKUODLkgHPZmLCcxQ3PFlXNLLTI6/view?usp=sharing";

    // Open the resume URL in a new tab
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <br />

      {/* For smaller screens (md and below), display the image flap above the overview heading */}
      <div className='lg:hidden'>
        {/* Add your photo here with the tilt effect */}
        <Tilt options={{ max: 25, scale: 1.1, speed: 400 }}>
          <motion.img
            src="dp.jpg" // Replace with the actual URL of your photo
            alt="Dhruv Tyagi"
            className="w-60 h-60 rounded-full mx-auto border-4 border-white mb-4" // Display only on smaller screens
          />
        </Tilt>
      </div>

      {/* For larger screens (lg and above), display the image flap to the right of the text */}
      <div className='mt-4 lg:flex'>
        <div className='lg:flex-1'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a MERN stack developer with a passion for machine learning and a track record of academic excellence. As a dedicated achiever, I seamlessly combine technical expertise in MongoDB, Express.js, React.js, and Node.js to craft seamless web applications. Beyond the MERN stack, my journey extends into the dynamic world of machine learning, where I innovate solutions for real-world challenges.
            <br /><br />
            Connect with me to explore the fusion of MERN expertise and enthusiasm for machine learning, driving innovation at the intersection of academic excellence and technological creativity!
          </motion.p>
        </div>

        {/* Add your photo here with the tilt effect */}
        <Tilt options={{ max: 35, scale: 1.5, speed: 400 }}>
          <motion.img
            src="dp.jpg" // Replace with the actual URL of your photo
            alt="Dhruv Tyagi"
            className="hidden lg:inline-block w-60 h-61 rounded-full ml-4 border-4 border-white" // Display only on larger screens
          />
        </Tilt>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* 3D Download Button */}
      <div className="mt-8 flex justify-center">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full text-lg font-bold transform transition-transform duration-300 hover:scale-105"
          onClick={handleDownloadResume}
        >
          Download CV
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

