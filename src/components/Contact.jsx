
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const glowingButton = {
//     boxShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff",
//     transition: "box-shadow 0.3s ease-in-out",
//   };

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

// const [glowing, setGlowing] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_wh3z3qq",
//         "template_qtzcm2q",
//         {
//           from_name: form.name,
//           to_name: "Dhruv Tyagi",
//           from_email: form.email,
//           to_email: "dhruvtyagi619@gmail.com",
//           message: form.message,
//         },
//         "XSZCwpQsql4RUYXbT"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//   type='submit'
//   className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${loading ? "cursor-not-allowed" : ""}`}
//   style={loading || glowing ? glowingButton : {}}
//   onMouseEnter={() => setGlowing(true)}
//   onMouseLeave={() => setGlowing(false)}
// >
//   {loading ? "Sending..." : "Send"}
// </button>
//         </form>

//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[450px] h-[250px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';



// const glowingButton = {
//   boxShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff",
//   transition: "box-shadow 0.3s ease-in-out",
// };

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [glowing, setGlowing] = useState(false);


//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_wh3z3qq",
//         "template_qtzcm2q",
//         {
//           from_name: form.name,
//           to_name: "Dhruv Tyagi",
//           from_email: form.email,
//           to_email: "dhruvtyagi619@gmail.com",
//           message: form.message,
//         },
//         "XSZCwpQsql4RUYXbT"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>
//         <br/>
//         <p style={{ color: 'rgb(170, 166, 195)' }}>
//   My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!
// </p>


//         {/* Add these inside your form */}




//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <button
//   type='submit'
//   className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${loading ? "cursor-not-allowed" : ""}`}
//   style={loading || glowing ? glowingButton : {}}
//   onMouseEnter={() => setGlowing(true)}
//   onMouseLeave={() => setGlowing(false)}
// >
//   {loading ? "Sending..." : "Send"}
// </button>
//           {/* Add these inside your form */}

// <p className="text-white font-medium mb-4">Or find me on:</p>

// <div className="flex items-center gap-11">
//   <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
//     <FaLinkedin size={32} color="#ffffff" />
//   </a>
//   <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
//     <FaEnvelope size={32} color="#ffffff" />
//   </a>
//   <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
//     <FaPhone size={32} color="#ffffff" />
//   </a>
//   <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
//     <FaGithub size={32} color="#ffffff" />
//   </a>
// </div>
//         </form>
//       </motion.div>
//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");


import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';



const glowingButton = {
  boxShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff",
  transition: "box-shadow 0.3s ease-in-out",
};
const glowingIcon = {
  filter: "drop-shadow(0 0 10px #ffffff) drop-shadow(0 0 20px #ffffff) drop-shadow(0 0 30px #ffffff)",
  transition: "filter 0.3s ease-in-out",
};
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const [linkedinGlow, setLinkedinGlow] = useState(false);
  const [emailGlow, setEmailGlow] = useState(false);
  const [phoneGlow, setPhoneGlow] = useState(false);
  const [githubGlow, setGithubGlow] = useState(false);


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wh3z3qq",
        "template_qtzcm2q",
        {
          from_name: form.name,
          to_name: "Dhruv Tyagi",
          from_email: form.email,
          to_email: "dhruvtyagi619@gmail.com",
          message: form.message,
        },
        "XSZCwpQsql4RUYXbT"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <br/>
        <p style={{ color: 'rgb(170, 166, 195)' }}>
  My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!
</p>


        {/* Add these inside your form */}




        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${loading ? "cursor-not-allowed" : ""}`}
            style={loading || glowing ? glowingButton : {}}
            onMouseEnter={() => setGlowing(true)}
            onMouseLeave={() => setGlowing(false)}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p style={{ color: 'rgb(170, 166, 195)' }}>Or find me on:</p>
          <div className="flex items-center gap-11">
            <a
              href="https://www.linkedin.com/in/dhruv-tyagi-58a9aa22a/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkedinGlow ? glowingIcon : {}}
              onMouseEnter={() => setLinkedinGlow(true)}
              onMouseLeave={() => setLinkedinGlow(false)}
            >
              <FaLinkedin size={32} color="#ffffff" />
            </a>
            <a
              href="mailto:dhruvtyagi619@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={emailGlow ? glowingIcon : {}}
              onMouseEnter={() => setEmailGlow(true)}
              onMouseLeave={() => setEmailGlow(false)}
            >
              <FaEnvelope size={32} color="#ffffff" />
            </a>
            <a
              href="tel:+918800377612"
              target="_blank"
              rel="noopener noreferrer"
              style={phoneGlow ? glowingIcon : {}}             ////style={(glowing || linkedinGlow) ? glowingIcon : {}}
              onMouseEnter={() => setPhoneGlow(true)}
              onMouseLeave={() => setPhoneGlow(false)}
            >
              <FaPhone size={32} color="#ffffff" />
            </a>
            <a
              href="https://github.com/DhruvTyagi18"
              target="_blank"
              rel="noopener noreferrer"
              style={githubGlow ? glowingIcon : {}}
              onMouseEnter={() => setGithubGlow(true)}
              onMouseLeave={() => setGithubGlow(false)}
            >
              <FaGithub size={32} color="#ffffff" />
            </a>
            <br/>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

