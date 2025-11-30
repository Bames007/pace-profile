// components/Sections/SustainableTech.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { playfair, inter } from "../utils/constant";
import {
  Leaf,
  Sun,
  Droplets,
  Recycle,
  Zap,
  Thermometer,
  Shield,
  TrendingUp,
} from "lucide-react";

const SustainableTech = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Solar Integration",
      icon: Sun,
      description:
        "Harness solar energy with building-integrated photovoltaics for maximum efficiency",
      benefits: [
        "Reduce energy costs by 60-80%",
        "Carbon footprint reduction",
        "Energy independence",
        "Low maintenance costs",
      ],
      impact: "High",
      cost: "Medium",
      roi: "3-5 years",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Rainwater Harvesting",
      icon: Droplets,
      description:
        "Complete water recycling and management systems for sustainable water use",
      benefits: [
        "40% water bill reduction",
        "Sustainable water source",
        "Stormwater management",
        "Groundwater recharge",
      ],
      impact: "Medium",
      cost: "Low",
      roi: "2-4 years",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Smart Energy Management",
      icon: Zap,
      description:
        "AI-powered energy optimization and real-time monitoring systems",
      benefits: [
        "Real-time energy analytics",
        "Automated efficiency optimization",
        "Predictive maintenance alerts",
        "Remote control capabilities",
      ],
      impact: "High",
      cost: "Medium",
      roi: "2-3 years",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Green Insulation",
      icon: Thermometer,
      description:
        "Advanced sustainable insulation materials for optimal thermal performance",
      benefits: [
        "30% energy savings on heating/cooling",
        "Improved indoor air quality",
        "Noise reduction up to 60%",
        "Non-toxic materials",
      ],
      impact: "Medium",
      cost: "Low",
      roi: "1-2 years",
      image: "/api/placeholder/400/300",
    },
  ];

  const stats = [
    { value: "60%", label: "Energy Savings" },
    { value: "45%", label: "Water Reduction" },
    { value: "80%", label: "Carbon Neutral" },
    { value: "₦2.5M", label: "Avg. Annual Savings" },
  ];

  return (
    <section
      id="sustainable-tech"
      className="py-12 lg:py-20 bg-gradient-to-br from-[#f2f1ee] to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#e4cd7f]/20 backdrop-blur-sm border border-[#e4cd7f]/30 mb-6"
          >
            <Leaf className="w-4 h-4 text-[#e4cd7f] mr-2" />
            <span
              className={`text-[#e4cd7f] text-sm font-medium ${inter.className}`}
            >
              Sustainable Technology
            </span>
          </motion.div>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 ${playfair.className}`}
          >
            Future-Proof
            <span className="text-[#e4cd7f] block">Sustainable Solutions</span>
          </h2>
          <p
            className={`text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed ${inter.className}`}
          >
            Integrate cutting-edge sustainable technologies that reduce
            environmental impact while maximizing efficiency and cost savings
            for your projects.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-8 lg:mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center shadow-lg border border-[#e4cd7f]/20"
            >
              <div
                className={`text-xl lg:text-3xl xl:text-4xl font-bold text-[#e4cd7f] mb-2 ${playfair.className}`}
              >
                {stat.value}
              </div>
              <div
                className={`text-[#e4cd7f] font-medium text-xs lg:text-base ${inter.className}`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* Technology Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <h3
              className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 ${playfair.className}`}
            >
              Advanced Sustainable Systems
            </h3>

            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTech(index)}
                className={`bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 cursor-pointer transition-all duration-300 border-2 ${
                  activeTech === index
                    ? "border-[#e4cd7f] shadow-xl scale-105"
                    : "border-gray-200 hover:border-[#e4cd7f]/50 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-3 lg:gap-4">
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeTech === index
                        ? "bg-[#e4cd7f] text-gray-900"
                        : "bg-[#e4cd7f]/10 text-[#e4cd7f]"
                    }`}
                  >
                    <tech.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-2 gap-2">
                      <h4
                        className={`text-lg lg:text-xl font-bold text-gray-900 ${playfair.className}`}
                      >
                        {tech.title}
                      </h4>
                      <div className="flex gap-1 lg:gap-2 flex-wrap">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tech.impact === "High"
                              ? "bg-red-100 text-red-700"
                              : tech.impact === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          } ${inter.className}`}
                        >
                          Impact: {tech.impact}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tech.cost === "High"
                              ? "bg-red-100 text-red-700"
                              : tech.cost === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          } ${inter.className}`}
                        >
                          Cost: {tech.cost}
                        </span>
                      </div>
                    </div>
                    <p
                      className={`text-gray-600 text-sm lg:text-base mb-3 leading-relaxed ${inter.className}`}
                    >
                      {tech.description}
                    </p>
                    <div className="space-y-1 lg:space-y-2">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#e4cd7f] rounded-full flex-shrink-0" />
                          <span
                            className={`text-xs lg:text-sm text-gray-700 ${inter.className}`}
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-gray-200 gap-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#e4cd7f]" />
                        <span
                          className={`text-xs lg:text-sm font-medium text-[#e4cd7f] ${inter.className}`}
                        >
                          ROI: {tech.roi}
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 bg-[#e4cd7f] text-gray-900 rounded-lg text-xs lg:text-sm font-medium hover:bg-[#d4b95a] transition-colors"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Detail & Impact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            {/* Current Tech Focus */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-[#e4cd7f]/20 overflow-hidden">
              <div className="h-32 lg:h-48 bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] flex items-center justify-center">
                {isMounted &&
                  (() => {
                    const IconComponent = technologies[activeTech].icon;
                    return (
                      <IconComponent className="w-8 h-8 lg:w-16 lg:h-16 text-gray-900" />
                    );
                  })()}
              </div>
              <div className="p-4 lg:p-6">
                <h3
                  className={`text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 ${playfair.className}`}
                >
                  {technologies[activeTech].title}
                </h3>
                <p
                  className={`text-gray-600 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed ${inter.className}`}
                >
                  {technologies[activeTech].description}
                </p>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="text-center p-2 lg:p-3 bg-[#e4cd7f]/10 rounded-lg">
                    <div
                      className={`text-base lg:text-lg font-bold text-[#e4cd7f] ${playfair.className}`}
                    >
                      {technologies[activeTech].impact}
                    </div>
                    <div
                      className={`text-xs lg:text-sm text-[#e4cd7f] ${inter.className}`}
                    >
                      Impact Level
                    </div>
                  </div>
                  <div className="text-center p-2 lg:p-3 bg-[#e4cd7f]/10 rounded-lg">
                    <div
                      className={`text-base lg:text-lg font-bold text-[#e4cd7f] ${playfair.className}`}
                    >
                      {technologies[activeTech].roi}
                    </div>
                    <div
                      className={`text-xs lg:text-sm text-[#e4cd7f] ${inter.className}`}
                    >
                      Return Period
                    </div>
                  </div>
                </div>

                {/* Implementation Benefits */}
                <div className="space-y-2 lg:space-y-3">
                  <h4
                    className={`font-bold text-gray-900 text-sm lg:text-base ${inter.className}`}
                  >
                    Key Benefits:
                  </h4>
                  {technologies[activeTech].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-[#e4cd7f]/10 rounded-lg"
                    >
                      <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-[#e4cd7f]" />
                      <span
                        className={`text-gray-700 text-xs lg:text-sm ${inter.className}`}
                      >
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sustainability Commitment */}
            <div className="bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-xl lg:rounded-2xl p-4 lg:p-6 text-gray-900">
              <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                <Recycle className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900" />
                <h3
                  className={`text-lg lg:text-xl font-bold ${playfair.className}`}
                >
                  Our Sustainability Promise
                </h3>
              </div>
              <p
                className={`mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed ${inter.className}`}
              >
                Every project integrates at least three sustainable
                technologies, ensuring environmental responsibility and
                long-term cost savings for our clients.
              </p>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {[
                  { value: "LEED", label: "Certification" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "15+", label: "Green Projects" },
                  { value: "₦50M+", label: "Client Savings" },
                ].map((item, index) => (
                  <div key={item.label} className="text-center">
                    <div
                      className={`text-base lg:text-lg font-bold ${playfair.className}`}
                    >
                      {item.value}
                    </div>
                    <div
                      className={`text-xs lg:text-sm opacity-90 ${inter.className}`}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(228, 205, 127, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-900 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg flex items-center justify-center gap-2"
            >
              <Leaf className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className={inter.className}>
                Get Your Sustainable Design Report
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainableTech;
