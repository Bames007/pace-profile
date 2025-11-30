// components/Sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { playfair, inter } from "../utils/constant";
import { Award } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f2f1ee] to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-[#e4cd7f] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-[#e4cd7f] rotate-45" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-[#e4cd7f] rounded-full" />
        </div>

        {/* Floating Elements - Only render on client */}
        {isMounted &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#e4cd7f] rounded-full"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 1000,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, -20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8"
            >
              <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
              <span
                className={`text-gray-700 text-sm font-medium ${inter.className}`}
              >
                Premium Architecture & Design
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 ${playfair.className}`}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="block"
              >
                Transforming
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="block"
              >
                Spaces Into
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="block text-[#e4cd7f]"
              >
                Masterpieces
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={`text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl ${inter.className}`}
            >
              We create breathtaking architectural designs and interior spaces
              that blend functionality with aesthetic excellence. From concept
              to completion, we bring your vision to life.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="grid grid-cols-3 gap-8 mb-8"
            >
              {[
                { number: "150+", label: "Projects" },
                { number: "12+", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div
                    className={`text-2xl lg:text-3xl font-bold text-gray-900 ${playfair.className}`}
                  >
                    {stat.number}
                  </div>
                  <div className={`text-gray-600 text-sm ${inter.className}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(228, 205, 127, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden"
              >
                <span className={`relative z-10 ${inter.className}`}>
                  Start Your Project
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#d4b95a] to-[#e4cd7f]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg bg-white/80 backdrop-blur-sm hover:border-[#e4cd7f] transition-all duration-300"
              >
                <span className={`${inter.className}`}>View Our Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-2xl transform rotate-3 blur-xl opacity-20" />
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Modern Architecture Design"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -40, y: -40 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
                className="absolute top-4 -left-4 lg:top-8 lg:-left-8 bg-white/90 backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-lg max-w-xs z-30"
              >
                <div className="text-[#e4cd7f] text-xl mb-1">
                  <Award />
                </div>
                <p
                  className={`text-gray-700 text-sm leading-relaxed ${inter.className}`}
                >
                  Award-winning architectural designs
                </p>
                <div className="w-3 h-3 bg-[#e4cd7f] rounded-full mt-2" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ delay: 2, duration: 0.6, type: "spring" }}
                className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] p-4 rounded-xl shadow-lg max-w-xs z-30"
              >
                <p
                  className={`text-gray-800 text-sm font-medium leading-relaxed ${inter.className}`}
                >
                  Custom interior solutions for every space
                </p>
                <div className="flex space-x-1 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        delay: i * 0.2,
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="w-1.5 h-1.5 bg-gray-800 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
