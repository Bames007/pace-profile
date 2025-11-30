// components/Sections/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { playfair, inter } from "../utils/constant";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Building,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#e4cd7f] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 border-2 border-[#e4cd7f] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${playfair.className}`}>
                  Pace Profile
                  <span className="text-[#e4cd7f]"> Designs</span>
                </h3>
                <p className={`text-gray-300 text-sm ${inter.className}`}>
                  Architectural Excellence
                </p>
              </div>
            </div>

            <p
              className={`text-gray-300 leading-relaxed mb-6 ${inter.className}`}
            >
              Creating architectural masterpieces that stand the test of time in
              Abuja and beyond. We blend innovation with tradition to deliver
              spaces that inspire and endure.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  icon: <Facebook className="w-4 h-4" />,
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: <Twitter className="w-4 h-4" />,
                  href: "#",
                  label: "Twitter",
                },
                {
                  icon: <Instagram className="w-4 h-4" />,
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  href: "#",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#e4cd7f] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="text-white group-hover:text-gray-900 transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-6 ${playfair.className}`}>
              Quick Links
            </h4>
            <ul className={`space-y-3 ${inter.className}`}>
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#e4cd7f] transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-6 ${playfair.className}`}>
              Our Services
            </h4>
            <ul className={`space-y-3 ${inter.className}`}>
              {[
                "Architectural Design",
                "Interior Design",
                "Space Planning",
                "3D Visualization",
                "Project Management",
                "Construction Supervision",
              ].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    className="text-gray-300 hover:text-[#e4cd7f] transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-6 ${playfair.className}`}>
              Contact Info
            </h4>
            <div className={`space-y-4 ${inter.className}`}>
              <motion.div
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-[#e4cd7f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Our Studio</p>
                  <p className="text-gray-300">Plot 123, Design District</p>
                  <p className="text-gray-300">Abuja, Nigeria</p>
                </div>
              </motion.div>

              <motion.a
                href="tel:+2349012345678"
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-[#e4cd7f] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Call Us</p>
                  <p className="text-gray-300">+234 901 234 5678</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@paceprofiledesigns.com"
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-[#e4cd7f] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-900" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email Us</p>
                  <p className="text-gray-300">info@paceprofiledesigns.com</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`text-gray-400 text-sm text-center md:text-left ${inter.className}`}
            >
              © {currentYear} Pace Profile Designs. All rights reserved.
            </p>

            <div
              className={`text-gray-400 text-sm text-center ${inter.className}`}
            >
              Crafted with excellence by{" "}
              <motion.span
                whileHover={{ color: "#e4cd7f" }}
                className="font-medium transition-colors duration-300 cursor-pointer"
              >
                EBCom Technologies
              </motion.span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-6">
                {["Privacy Policy", "Terms", "Cookies"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-gray-400 hover:text-[#e4cd7f] text-sm transition-colors duration-300 ${inter.className}`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, backgroundColor: "#e4cd7f" }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
