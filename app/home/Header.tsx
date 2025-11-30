// components/Layout/Header.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playfair, inter } from "../utils/constant";
import { Phone, MapPin, Mail, ArrowRight, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (!isClient) return;

      setIsScrolled(window.scrollY > 20);

      // Update scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / docHeight) * 100)
      );
      setScrollProgress(progress);

      // Update active section
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

    if (isClient) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial call

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isClient]);

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

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Remove body overflow restriction when closing menu
    if (isClient) {
      document.body.style.overflow = "unset";
    }
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    // Prevent body scroll when menu is open
    if (isClient) {
      document.body.style.overflow = newState ? "hidden" : "unset";
    }
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    if (isClient) {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // REMOVED: isolate class and simplified z-index
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
              onClick={() => handleNavClick("#home")}
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
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="outline-none border-none"
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
                  </button>
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
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-2">
                    {navItems.slice(6).map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left outline-none border-none"
                      >
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
                      </button>
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
                onClick={() => handleNavClick("#contact")}
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
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center z-50"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                  backgroundColor:
                    isScrolled || isMobileMenuOpen ? "#2a2a2a" : "#FFFFFF",
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
                  backgroundColor:
                    isScrolled || isMobileMenuOpen ? "#2a2a2a" : "#FFFFFF",
                }}
                className="w-6 h-0.5 rounded-full transition-colors duration-300"
              />
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        {isClient && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200/50">
            <motion.div
              className="h-1 bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a]"
              initial={{ width: 0 }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        )}
      </motion.header>

      {/* Mobile Menu - MOVED OUTSIDE THE HEADER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // FIX: Use fixed positioning with high z-index, placed outside header
            className="fixed inset-0 lg:hidden z-[60]"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={handleCloseMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              // FIX: Ensure menu content is above backdrop
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
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

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCloseMenu}
                  className="w-10 h-10 bg-[#f2f1ee] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#e8e6e1] transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto pb-6">
                <nav className="p-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="w-full text-left outline-none border-none"
                        >
                          <motion.span
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center justify-between px-4 py-4 rounded-xl font-medium cursor-pointer transition-all duration-300 w-full ${
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
                        </button>
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
                      onClick={() => handleNavClick("#contact")}
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
                      className={`font-bold text-gray-800 mb-4 text-lg ${playfair.className}`}
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
                    ].map((stat) => (
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
