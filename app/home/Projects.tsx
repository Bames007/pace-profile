// components/Sections/Projects.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { playfair, inter } from "../utils/constant";
import {
  ExternalLink,
  Building,
  Home,
  Hotel,
  Store,
  ZoomIn,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Renovation",
      category: "Residential",
      type: "Renovation",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Months",
      area: "3200 sq ft",
      description:
        "Complete transformation of a classic villa into a modern living space with sustainable materials.",
    },
    {
      id: 2,
      title: "Corporate Office Design",
      category: "Commercial",
      type: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "6 Months",
      area: "8500 sq ft",
      description:
        "Innovative office space designed to enhance productivity and collaboration.",
    },
    {
      id: 3,
      title: "Luxury Hotel Interior",
      category: "Hospitality",
      type: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "8 Months",
      area: "15000 sq ft",
      description:
        "Bespoke interior design for a five-star hotel experience with custom furnishings.",
    },
    {
      id: 4,
      title: "Minimalist Apartment",
      category: "Residential",
      type: "Architectural Design",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "3 Months",
      area: "1200 sq ft",
      description:
        "Clean and functional design for an urban apartment maximizing space efficiency.",
    },
    {
      id: 5,
      title: "Restaurant Makeover",
      category: "Commercial",
      type: "Renovation",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "5 Months",
      area: "2800 sq ft",
      description:
        "Complete redesign of a traditional restaurant into a modern culinary experience.",
    },
    {
      id: 6,
      title: "Boutique Store",
      category: "Commercial",
      type: "Architectural Design",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4 Months",
      area: "1800 sq ft",
      description:
        "Custom design for a high-end retail store with unique architectural features.",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Residential":
        return <Home className="w-4 h-4" />;
      case "Commercial":
        return <Building className="w-4 h-4" />;
      case "Hospitality":
        return <Hotel className="w-4 h-4" />;
      default:
        return <Store className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 -right-24 w-96 h-96 bg-[#f2f1ee] rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 -left-24 w-72 h-72 bg-[#f2f1ee] rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#f2f1ee] border border-gray-200 mb-6"
          >
            <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
            <span
              className={`text-gray-700 text-sm font-medium ${inter.className}`}
            >
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight ${playfair.className}`}
          >
            Featured
            <span className="text-[#e4cd7f] block">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inter.className}`}
          >
            Explore our curated selection of completed projects that showcase
            our commitment to excellence in architectural design and interior
            spaces.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-12 h-12 bg-[#e4cd7f] rounded-full flex items-center justify-center"
                  >
                    <ZoomIn className="w-6 h-6 text-gray-800" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {getCategoryIcon(project.category)}
                    <span
                      className={`text-gray-700 text-sm font-medium ${inter.className}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Type */}
                <div className="absolute top-4 right-4">
                  <div className="bg-[#e4cd7f] text-gray-800 px-3 py-1.5 rounded-full">
                    <span className={`text-sm font-medium ${inter.className}`}>
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e4cd7f] transition-colors duration-300 ${playfair.className}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-gray-600 leading-relaxed mb-4 ${inter.className}`}
                >
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1 text-[#e4cd7f]" />
                      <span className={inter.className}>{project.area}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-[#e4cd7f]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className={inter.className}>
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-[#e4cd7f] hover:text-[#d4b95a] transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-800 px-8 py-4 rounded-lg font-semibold shadow-lg"
          >
            <span className={inter.className}>View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
