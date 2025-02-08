"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-500 text-white min-h-[90vh] z-10 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/assets/vecteezy_ai-generated-headphones-standing-on-table-with-neon-light_35315720.jpg')",
          filter: "brightness(0.5)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto flex flex-col items-center justify-center text-center min-h-[90vh] py-20 px-4 z-10"
      >
        <h1 className="text-5xl font-bold font-orbitron mb-4 tracking-wider">
        Discover Premium{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-green-500 inline-block"
          >
            Products
          </motion.span>
          <br /> for Everyday Living
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-4 text-lg text-gray-300 font-poppins max-w-2xl"
        >
          Shop the finest selection of products designed to enhance your lifestyle. From home essentials to the latest trends, find everything you need in one place.


        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex space-x-6"
        >
          <Link href={"#product"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-900 text-white px-8 py-3 rounded-md hover:bg-green-800 transition-colors duration-300 font-medium"
          >
            View Products
          </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-500 text-green-500 font-bold px-8 py-3 rounded-md hover:bg-green-500 hover:text-white transition-colors duration-300"
          >
            View Collections
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;