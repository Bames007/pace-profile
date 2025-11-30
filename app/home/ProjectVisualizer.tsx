// components/Sections/ProjectVisualizer.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { playfair, inter } from "../utils/constant";
import {
  Eye,
  ZoomIn,
  RotateCw,
  Layers,
  Ruler,
  Building2,
  Home,
  Hotel,
  Store,
} from "lucide-react";

const ProjectVisualizer = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState<"3d" | "floorplan" | "site">("3d");
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Skyline Residence",
      type: "Luxury Villa",
      category: "Residential",
      description:
        "Modern luxury villa with panoramic city views and sustainable design features.",
      features: [
        "Smart Home Integration",
        "Infinity Pool",
        "Rooftop Garden",
        "Home Theater",
        "Solar Power Ready",
        "Natural Ventilation",
      ],
      specs: { area: "4500 sq ft", floors: "3", bedrooms: "5", bathrooms: "6" },
      modelView: "/api/placeholder/600/400",
      floorPlan: "/api/placeholder/600/400",
      sitePlan: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "Corporate Tower",
      type: "Commercial Complex",
      category: "Commercial",
      description:
        "Sustainable 40-story corporate headquarters with smart building technology.",
      features: [
        "LEED Platinum Certified",
        "Sky Gardens",
        "Executive Suites",
        "Conference Center",
        "Energy Efficient",
        "Rainwater Harvesting",
      ],
      specs: {
        area: "85,000 sq ft",
        floors: "40",
        units: "120",
        parking: "300 spots",
      },
      modelView: "/api/placeholder/600/400",
      floorPlan: "/api/placeholder/600/400",
      sitePlan: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "Boutique Resort",
      type: "Luxury Hospitality",
      category: "Hospitality",
      description:
        "Eco-friendly luxury resort with private villas and premium amenities.",
      features: [
        "Solar Power",
        "Water Recycling",
        "Spa & Wellness",
        "Fine Dining",
        "Eco Pool",
        "Organic Garden",
      ],
      specs: {
        area: "25 acres",
        villas: "24",
        amenities: "15+",
        capacity: "80 guests",
      },
      modelView: "/api/placeholder/600/400",
      floorPlan: "/api/placeholder/600/400",
      sitePlan: "/api/placeholder/600/400",
    },
  ];

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <section
      id="project-visualizer"
      className="py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
            <span
              className={`text-white/90 text-sm font-medium ${inter.className}`}
            >
              Interactive Experience
            </span>
          </motion.div>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 ${playfair.className}`}
          >
            Immersive Project
            <span className="text-[#e4cd7f] block">Visualizer</span>
          </h2>
          <p
            className={`text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed ${inter.className}`}
          >
            Explore our architectural masterpieces in stunning detail. Rotate,
            zoom, and inspect every aspect of our designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Visualization Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              ref={containerRef}
              className="bg-gray-800 rounded-xl lg:rounded-2xl overflow-hidden border border-gray-700 relative aspect-[4/3]"
            >
              {/* 3D Model Container */}
              <motion.div
                animate={{ rotateY: rotation }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
              >
                <div className="text-center p-4">
                  <Building2 className="w-16 h-16 lg:w-24 lg:h-24 text-[#e4cd7f] mx-auto mb-4" />
                  <p
                    className={`text-gray-400 text-sm lg:text-base ${inter.className}`}
                  >
                    3D Model Loading...
                  </p>
                  <p
                    className={`text-xs lg:text-sm text-gray-500 mt-2 ${inter.className}`}
                  >
                    {projects[activeProject].title} - {viewMode.toUpperCase()}{" "}
                    View
                  </p>
                </div>
              </motion.div>

              {/* View Controls - Mobile Optimized */}
              <div className="absolute top-3 left-3 lg:top-4 lg:left-4 flex gap-1 lg:gap-2">
                {[
                  { mode: "3d" as const, icon: Eye, label: "3D View" },
                  {
                    mode: "floorplan" as const,
                    icon: Ruler,
                    label: "Floor Plan",
                  },
                  { mode: "site" as const, icon: Layers, label: "Site Plan" },
                ].map(({ mode, icon: Icon, label }) => (
                  <motion.button
                    key={mode}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode(mode)}
                    className={`p-2 lg:p-3 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                      viewMode === mode
                        ? "bg-[#e4cd7f] text-gray-900 border-[#e4cd7f]"
                        : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    }`}
                  >
                    <Icon className="w-3 h-3 lg:w-4 lg:h-4" />
                  </motion.button>
                ))}
              </div>

              {/* Interaction Controls */}
              <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 flex gap-1 lg:gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRotate}
                  className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <RotateCw className="w-3 h-3 lg:w-4 lg:h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <ZoomIn className="w-3 h-3 lg:w-4 lg:h-4" />
                </motion.button>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    index === activeProject ? "bg-[#e4cd7f]" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#e4cd7f] rounded-lg flex items-center justify-center flex-shrink-0">
                  {projects[activeProject].category === "Residential" && (
                    <Home className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
                  )}
                  {projects[activeProject].category === "Commercial" && (
                    <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
                  )}
                  {projects[activeProject].category === "Hospitality" && (
                    <Hotel className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xl lg:text-2xl font-bold text-white mb-1 ${playfair.className}`}
                  >
                    {projects[activeProject].title}
                  </h3>
                  <p
                    className={`text-[#e4cd7f] text-sm lg:text-base ${inter.className}`}
                  >
                    {projects[activeProject].type}
                  </p>
                </div>
              </div>

              <p
                className={`text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed ${inter.className}`}
              >
                {projects[activeProject].description}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                {Object.entries(projects[activeProject].specs).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-2 lg:p-3 bg-white/5 rounded-lg"
                    >
                      <div
                        className={`text-[#e4cd7f] font-bold text-sm lg:text-base ${inter.className}`}
                      >
                        {value}
                      </div>
                      <div
                        className={`text-gray-400 text-xs lg:text-sm capitalize mt-1 ${inter.className}`}
                      >
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Features */}
              <div>
                <h4
                  className={`text-base lg:text-lg font-bold text-white mb-3 ${inter.className}`}
                >
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#e4cd7f] rounded-full mt-1.5 flex-shrink-0" />
                      <span
                        className={`text-xs lg:text-sm leading-relaxed ${inter.className}`}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(228, 205, 127, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-900 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg"
            >
              <span className={inter.className}>Schedule a Live Demo</span>
            </motion.button>

            <p
              className={`text-center text-gray-400 text-xs lg:text-sm ${inter.className}`}
            >
              Experience your future project in immersive 3D before construction
              begins
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVisualizer;
