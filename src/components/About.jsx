import { motion } from 'motion/react';
// import { FaCode } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="bg-gray-950 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* <FaUser className="text-5xl text-cyan-400 mx-auto mb-4" /> */}
            <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
            <p className="text-gray-400">
              I'm a passionate web developer with a love for creating beautiful and functional user experiences. I thrive on turning complex problems into simple, elegant solutions.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <FaCode className="text-5xl text-cyan-400 mx-auto mb-4" /> */}
            <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
            <p className="text-gray-400">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js), but I'm always eager to learn new technologies. I enjoy building everything from small personal projects to large, scalable web applications.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <FaRocket className="text-5xl text-cyan-400 mx-auto mb-4" /> */}
            <h2 className="text-2xl font-semibold mb-2">What I'm Looking For</h2>
            <p className="text-gray-400">
              I'm currently seeking opportunities to work on exciting projects with a talented team. I'm a quick learner, a collaborative team player, and I'm ready to contribute to building the next big thing.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
          <a
            href="/contact"
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;