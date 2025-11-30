// components/Sections/Services.tsx
"use client";
import { motion } from "framer-motion";
import { playfair, inter } from "../utils/constant";
import {
  ArchitecturalDesignIcon,
  InteriorDesignIcon,
  UrbanPlanningIcon,
  SustainableDesignIcon,
  RenovationIcon,
  ConsultationIcon,
} from "../utils/icons";

const Services = () => {
  const services = [
    {
      icon: <ArchitecturalDesignIcon />,
      title: "Architectural Design",
      description:
        "Complete architectural services from concept to completion, creating innovative and functional spaces that inspire.",
      features: [
        "Concept Development & Ideation",
        "3D Visualization & Rendering",
        "Construction Documentation",
        "Project Management & Coordination",
        "Building Code Compliance",
        "Site Analysis & Planning",
      ],
      price: "From ₦2.5M",
      timeline: "4-8 weeks",
    },
    {
      icon: <InteriorDesignIcon />,
      title: "Interior Design",
      description:
        "Transform your spaces with bespoke interior solutions that blend aesthetics with functionality.",
      features: [
        "Space Planning & Layout",
        "Furniture & Fixture Selection",
        "Lighting Design & Automation",
        "Material & Finish Specification",
        "Color Scheme Development",
        "Custom Furniture Design",
      ],
      price: "From ₦1.8M",
      timeline: "3-6 weeks",
    },
    {
      icon: <UrbanPlanningIcon />,
      title: "Urban Planning",
      description:
        "Comprehensive urban design and planning services for sustainable community development.",
      features: [
        "Master Planning",
        "Zoning Analysis",
        "Infrastructure Planning",
        "Environmental Impact Assessment",
        "Community Engagement",
        "Sustainable Development Strategies",
      ],
      price: "From ₦5M",
      timeline: "8-12 weeks",
    },
    {
      icon: <SustainableDesignIcon />,
      title: "Sustainable Design",
      description:
        "Eco-friendly design solutions that reduce environmental impact and operational costs.",
      features: [
        "Energy Efficiency Analysis",
        "Green Building Certification",
        "Renewable Energy Integration",
        "Water Conservation Systems",
        "Sustainable Material Selection",
        "Carbon Footprint Reduction",
      ],
      price: "From ₦3.2M",
      timeline: "6-10 weeks",
    },
    {
      icon: <RenovationIcon />,
      title: "Renovation & Retrofit",
      description:
        "Breathing new life into existing structures with modern design and improved functionality.",
      features: [
        "Structural Assessment",
        "Modernization Strategies",
        "Space Optimization",
        "Heritage Conservation",
        "Building System Upgrades",
        "Cost-Effective Solutions",
      ],
      price: "From ₦1.5M",
      timeline: "4-12 weeks",
    },
    {
      icon: <ConsultationIcon />,
      title: "Design Consultation",
      description:
        "Expert guidance and advisory services for your architectural and design projects.",
      features: [
        "Design Strategy Sessions",
        "Feasibility Studies",
        "Budget Planning",
        "Vendor & Contractor Selection",
        "Quality Control & Inspection",
        "Post-Occupancy Evaluation",
      ],
      price: "From ₦800K",
      timeline: "1-4 weeks",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "12+", label: "Years Experience" },
    { number: "₦50M+", label: "Client Savings" },
  ];

  return (
    <section
      id="services"
      className="relative py-16 lg:py-24 bg-gradient-to-br from-[#f2f1ee] to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 -left-24 w-72 h-72 bg-[#e4cd7f] rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-10 -right-24 w-72 h-72 bg-[#e4cd7f] rounded-full opacity-5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e4cd7f] rounded-full opacity-3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e4cd7f]/20 mb-6"
          >
            <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
            <span
              className={`text-gray-700 text-sm font-medium ${inter.className}`}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight ${playfair.className}`}
          >
            Comprehensive
            <span className="text-[#e4cd7f] block">Architecture Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${inter.className}`}
          >
            From initial concept to final construction, we provide end-to-end
            architectural solutions that transform your vision into reality with
            precision and creativity.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#e4cd7f]/20 shadow-lg"
            >
              <div
                className={`text-2xl lg:text-3xl font-bold text-[#e4cd7f] mb-2 ${playfair.className}`}
              >
                {stat.number}
              </div>
              <div
                className={`text-gray-600 text-sm lg:text-base font-medium ${inter.className}`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "tween",
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="p-6 lg:p-8">
                {/* Icon and Arrow */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-[#e4cd7f]"
                  >
                    {service.icon}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, x: 5 }}
                    className="w-10 h-10 bg-[#f2f1ee] rounded-full flex items-center justify-center group-hover:bg-[#e4cd7f] transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#e4cd7f] transition-colors duration-300 ${playfair.className}`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-gray-600 leading-relaxed mb-6 text-sm lg:text-base ${inter.className}`}
                >
                  {service.description}
                </p>

                {/* Price & Timeline */}
                <div className="flex items-center justify-between mb-6 p-3 bg-[#f2f1ee] rounded-lg">
                  <div>
                    <div
                      className={`text-sm font-semibold text-gray-900 ${inter.className}`}
                    >
                      {service.price}
                    </div>
                    <div className={`text-xs text-gray-600 ${inter.className}`}>
                      Starting Price
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-semibold text-gray-900 ${inter.className}`}
                    >
                      {service.timeline}
                    </div>
                    <div className={`text-xs text-gray-600 ${inter.className}`}>
                      Timeline
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-[#e4cd7f] mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`leading-relaxed ${inter.className}`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-900 rounded-lg font-semibold text-sm lg:text-base flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  <span className={inter.className}>Get Started</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] rounded-2xl p-8 lg:p-12 text-gray-900">
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${playfair.className}`}
            >
              Ready to Start Your Project?
            </h3>
            <p
              className={`text-gray-800 mb-6 max-w-2xl mx-auto ${inter.className}`}
            >
              Let's discuss your vision and create something extraordinary
              together. Schedule a free consultation with our expert team.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(228, 205, 127, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <span className={inter.className}>
                Schedule Free Consultation
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
