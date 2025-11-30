// components/Layout/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { playfair, inter } from "../utils/constant";
import { X, Phone, MapPin, Mail, ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "ai-consultation",
        "sustainable-tech",
        "project-visualizer",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    {
      name: "AI Consultation",
      href: "#ai-consultation",
      id: "ai-consultation",
    },
    {
      name: "Sustainable Tech",
      href: "#sustainable-tech",
      id: "sustainable-tech",
    },
    {
      name: "3D Visualizer",
      href: "#project-visualizer",
      id: "project-visualizer",
    },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-gray-200/50 border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 lg:py-5">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <motion.div
              animate={{
                rotate: isScrolled ? 0 : [0, 2, -2, 0],
              }}
              transition={{ duration: 4, repeat: isScrolled ? 0 : Infinity }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span
                    className={`text-gray-900 font-bold text-sm ${playfair.className}`}
                  >
                    PP
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col">
              <motion.span
                className={`font-bold text-gray-800 leading-none ${
                  isScrolled ? "text-xl" : "text-2xl"
                } ${playfair.className}`}
              >
                Pace Profile
              </motion.span>
              <motion.span
                className={`leading-none ${
                  isScrolled ? "text-xs" : "text-sm"
                } ${inter.className} ${
                  isScrolled ? "text-gray-600" : "text-gray-700"
                } font-medium`}
              >
                Designs
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link href={item.href}>
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      color: "#e4cd7f",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                      inter.className
                    } ${
                      activeSection === item.id
                        ? "text-[#e4cd7f] bg-[#f2f1ee]"
                        : isScrolled
                        ? "text-gray-700 hover:text-[#e4cd7f]"
                        : "text-white hover:text-[#e4cd7f]"
                    }`}
                  >
                    {item.name}

                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 border border-[#e4cd7f] rounded-lg -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.span>
                </Link>
              </motion.div>
            ))}

            {/* More dropdown for additional items */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="relative group"
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  color: "#e4cd7f",
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                  inter.className
                } ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#e4cd7f]"
                    : "text-white hover:text-[#e4cd7f]"
                }`}
              >
                More
                <ArrowRight className="w-3 h-3 inline-block ml-1 transform rotate-90" />
              </motion.span>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {navItems.slice(6).map((item) => (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`px-4 py-3 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                          inter.className
                        } ${
                          activeSection === item.id
                            ? "bg-[#f2f1ee] text-[#e4cd7f]"
                            : "text-gray-700 hover:text-[#e4cd7f] hover:bg-[#f2f1ee]"
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(228, 205, 127, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                inter.className
              } ${
                isScrolled
                  ? "bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-800"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              Start Your Project
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
                backgroundColor: isScrolled
                  ? "#2a2a2a"
                  : isMobileMenuOpen
                  ? "#2a2a2a"
                  : "#FFFFFF",
              }}
              className="w-6 h-0.5 rounded-full mb-1.5 transition-colors duration-300"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                backgroundColor: isScrolled ? "#2a2a2a" : "#FFFFFF",
              }}
              className="w-6 h-0.5 rounded-full mb-1.5 transition-colors duration-300"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
                backgroundColor: isScrolled
                  ? "#2a2a2a"
                  : isMobileMenuOpen
                  ? "#2a2a2a"
                  : "#FFFFFF",
              }}
              className="w-6 h-0.5 rounded-full transition-colors duration-300"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl lg:hidden z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-white lg:hidden z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span
                        className={`text-gray-900 font-bold text-sm ${playfair.className}`}
                      >
                        PP
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-gray-800 font-bold text-xl ${playfair.className}`}
                    >
                      Pace Profile
                    </h3>
                    <p className={`text-gray-600 text-sm ${inter.className}`}>
                      Designs
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 bg-[#f2f1ee] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#e8e6e1] transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={item.href}>
                          <motion.span
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-4 py-4 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                              inter.className
                            } ${
                              activeSection === item.id
                                ? "bg-[#f2f1ee] text-[#e4cd7f] border-l-4 border-[#e4cd7f]"
                                : "text-gray-700 hover:text-[#e4cd7f] hover:bg-[#f2f1ee]"
                            }`}
                          >
                            <span>{item.name}</span>
                            {activeSection === item.id && (
                              <motion.div
                                layoutId="mobileActiveSection"
                                className="w-2 h-2 bg-[#e4cd7f] rounded-full"
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              />
                            )}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-800 py-4 rounded-xl font-semibold shadow-lg mb-4"
                    >
                      <span className={inter.className}>
                        Start Your Project
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
                  >
                    <h4
                      className={`font-bold text-gray-800 mb-4 text-lg ${inter.className}`}
                    >
                      Get In Touch
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <div className="w-10 h-10 bg-[#e4cd7f] rounded-lg flex items-center justify-center mr-3">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Call Us</p>
                          <p className="text-sm">+234 812 772 8084</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <div className="w-10 h-10 bg-[#e4cd7f] rounded-lg flex items-center justify-center mr-3">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Visit Us</p>
                          <p className="text-sm">Abuja, Nigeria</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <div className="w-10 h-10 bg-[#e4cd7f] rounded-lg flex items-center justify-center mr-3">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Email Us</p>
                          <p className="text-sm">info@paceprofile.com</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 grid grid-cols-3 gap-4 text-center"
                  >
                    {[
                      { number: "150+", label: "Projects" },
                      { number: "12+", label: "Years" },
                      { number: "98%", label: "Satisfaction" },
                    ].map((stat, index) => (
                      <div
                        key={stat.label}
                        className="bg-white rounded-lg p-3 border border-gray-200"
                      >
                        <div
                          className={`text-lg font-bold text-[#e4cd7f] ${playfair.className}`}
                        >
                          {stat.number}
                        </div>
                        <div
                          className={`text-xs text-gray-600 ${inter.className}`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a]"
        animate={{
          width: isScrolled
            ? `${
                (window.scrollY /
                  (document.body.scrollHeight - window.innerHeight)) *
                100
              }%`
            : "0%",
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );
};

export default Header;
