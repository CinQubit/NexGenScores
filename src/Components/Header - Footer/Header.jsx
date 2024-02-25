import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <motion.header
      className="bg-gray-900 text-white py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl lg:text-4xl font-bold tracking-tight">
          <motion.h1
            transition={{ type: "spring", stiffness: 100 }}
          >
            NextGenScores
          </motion.h1>
        </Link>
        <motion.nav>
          <ul className="flex space-x-4">
            <motion.li variants={itemVariants}>
              <Link
                to="/"
                className="hover:text-gray-300 text-lg transition duration-150 ease-in-out transform hover:scale-105"
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/about"
                className="hover:text-gray-300 text-lg transition duration-150 ease-in-out transform hover:scale-105"
              >
                About
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/sports-prediction"
                className="hover:text-gray-300 text-lg transition duration-150 ease-in-out transform hover:scale-105"
              >
                Sports Prediction
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/blogs"
                className="hover:text-gray-300 text-lg transition duration-150 ease-in-out transform hover:scale-105"
              >
                Blogs
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/contact"
                className="hover:text-gray-300 text-lg transition duration-150 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
