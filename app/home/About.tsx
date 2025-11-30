// components/Sections/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { playfair, inter } from "../utils/constant";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Cuboid,
  LayoutGrid,
  Sun,
} from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Minimalist Philosophy",
      description:
        "Embracing 'less is more' through clean lines and thoughtful simplicity",
    },
    {
      icon: <Target className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Precision Craftsmanship",
      description: "Meticulous attention to detail in every project",
    },
    {
      icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Client-Centric Approach",
      description: "Deep collaboration to understand your vision",
    },
    {
      icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Sustainable Excellence",
      description: "Eco-conscious practices with timeless design",
    },
  ];

  const stats = [
    { number: "8+", label: "Years of Excellence" },
    { number: "120+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Industry Awards" },
  ];

  const philosophyPoints = [
    {
      icon: <Cuboid className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Material Mastery",
      description: "Expert selection of natural materials that age with grace",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Spatial Harmony",
      description: "Creating flow and balance through proportional design",
    },
    {
      icon: <Sun className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Light & Shadow",
      description: "Harnessing natural light to define and enhance spaces",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 lg:py-20 bg-gradient-to-br from-[#f2f1ee] to-white overflow-hidden"
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 lg:w-80 lg:h-80 bg-[#e4cd7f] rounded-full opacity-[0.02] blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 lg:w-72 lg:h-72 bg-[#e4cd7f] rounded-full opacity-[0.02] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e4cd7f]/20"
              >
                <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
                <span
                  className={`text-gray-700 text-sm font-medium ${inter.className}`}
                >
                  About Pace Profiles
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight ${playfair.className}`}
              >
                Redefining Spaces
                <span className="text-[#e4cd7f] block">Through Minimalism</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`text-base lg:text-lg text-gray-600 leading-relaxed ${inter.className}`}
              >
                At Pace Profiles Designs, we believe in the power of simplicity.
                Inspired by architectural visionaries, we create spaces that
                speak through purity, proportion, and precision.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-gray-600 leading-relaxed text-sm lg:text-base ${inter.className}`}
              >
                Our approach combines timeless minimalist principles with
                contemporary innovation, delivering environments that are both
                aesthetically profound and functionally exceptional.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-4 lg:py-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`text-xl lg:text-2xl xl:text-3xl font-bold text-[#e4cd7f] mb-1 lg:mb-2 ${playfair.className}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-gray-600 text-xs lg:text-sm font-medium ${inter.className}`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Design Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-4 lg:space-y-6"
            >
              <h3
                className={`text-xl lg:text-2xl font-bold text-gray-900 ${playfair.className}`}
              >
                Our Design Principles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-[#e4cd7f]/10 hover:border-[#e4cd7f]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#e4cd7f] rounded-lg flex items-center justify-center text-gray-900 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        {principle.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-base lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2 ${playfair.className}`}
                        >
                          {principle.title}
                        </h4>
                        <p
                          className={`text-gray-600 text-xs lg:text-sm leading-relaxed ${inter.className}`}
                        >
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(228, 205, 127, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg"
              >
                <span className={inter.className}>Explore Our Philosophy</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold bg-white/80 backdrop-blur-sm hover:border-[#e4cd7f] transition-all duration-300"
              >
                <span className={inter.className}>View Design Process</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative space-y-4 lg:space-y-6">
              {/* Main Image */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative bg-white rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden border border-gray-200">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Minimalist Architecture by Pace Profiles"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-900 p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-1 lg:mb-2" />
                  <div
                    className={`text-lg lg:text-2xl font-bold ${playfair.className}`}
                  >
                    8+ Years
                  </div>
                  <div
                    className={`text-xs lg:text-sm font-medium ${inter.className}`}
                  >
                    Design Excellence
                  </div>
                </div>
              </motion.div>

              {/* Floating Quote Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl border border-[#e4cd7f]/20 max-w-[180px] lg:max-w-xs"
              >
                <div className="text-[#e4cd7f] text-2xl lg:text-4xl mb-1 lg:mb-2">
                  "
                </div>
                <p
                  className={`text-gray-700 text-xs lg:text-sm leading-relaxed mb-2 lg:mb-3 ${inter.className}`}
                >
                  Less is more. Simplicity is the ultimate sophistication.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 bg-[#e4cd7f] rounded-full" />
                  <span
                    className={`text-gray-600 text-xs font-medium ${inter.className}`}
                  >
                    Mies van der Rohe
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute -z-10 top-4 -right-4 lg:top-8 lg:-right-8 w-full h-full border-2 border-[#e4cd7f] rounded-xl lg:rounded-2xl opacity-10" />
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-20 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 border border-[#e4cd7f]/10">
            <h3
              className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 ${playfair.className}`}
            >
              The Pace Profiles Difference
            </h3>
            <p
              className={`text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8 ${inter.className}`}
            >
              We don't just design buildings; we craft experiences. Our
              minimalist approach focuses on the essential, eliminating the
              unnecessary to reveal the true character of each space.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12">
              {philosophyPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#e4cd7f] rounded-xl lg:rounded-2xl flex items-center justify-center text-gray-900 mx-auto mb-3 lg:mb-4">
                    {item.icon}
                  </div>
                  <h4
                    className={`text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 ${playfair.className}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-gray-600 text-sm leading-relaxed ${inter.className}`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
