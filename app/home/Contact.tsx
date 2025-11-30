// components/Sections/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { playfair, inter } from "../utils/constant";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-12 lg:py-20 bg-white overflow-hidden"
    >
      {/* Simplified Background Elements - No heavy animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-24 w-72 h-72 bg-[#f2f1ee] rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-20 -left-24 w-72 h-72 bg-[#f2f1ee] rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#f2f1ee] border border-gray-200 mb-6"
          >
            <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
            <span
              className={`text-gray-700 text-sm font-medium ${inter.className}`}
            >
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight ${playfair.className}`}
          >
            Let's Start Your
            <span className="text-[#e4cd7f] block">Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${inter.className}`}
          >
            Ready to transform your space? Contact us today for a free
            consultation and let's bring your vision to life together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#f2f1ee] rounded-xl lg:rounded-2xl border border-gray-200 p-4 lg:p-6"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#e4cd7f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-semibold text-gray-900 text-sm lg:text-base ${inter.className}`}
                    >
                      Phone
                    </h3>
                    <p
                      className={`text-gray-700 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      +234 812 772 8084
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#f2f1ee] rounded-xl lg:rounded-2xl border border-gray-200 p-4 lg:p-6"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#e4cd7f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-semibold text-gray-900 text-sm lg:text-base ${inter.className}`}
                    >
                      Email
                    </h3>
                    <p
                      className={`text-gray-700 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      info@paceprofiledesigns.com
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#f2f1ee] rounded-xl lg:rounded-2xl border border-gray-200 p-4 lg:p-6"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#e4cd7f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-semibold text-gray-900 text-sm lg:text-base ${inter.className}`}
                    >
                      Office
                    </h3>
                    <p
                      className={`text-gray-700 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#f2f1ee] rounded-xl lg:rounded-2xl border border-gray-200 p-4 lg:p-6"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#e4cd7f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`font-semibold text-gray-900 text-sm lg:text-base ${inter.className}`}
                    >
                      Hours
                    </h3>
                    <p
                      className={`text-gray-700 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      Mon - Fri: 9AM - 6PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] rounded-xl lg:rounded-2xl p-4 lg:p-6 text-gray-800"
            >
              <h3
                className={`text-lg lg:text-xl font-bold mb-2 lg:mb-3 ${playfair.className}`}
              >
                Quick Response
              </h3>
              <p
                className={`text-gray-800 leading-relaxed text-sm lg:text-base ${inter.className}`}
              >
                We typically respond to all inquiries within 24 hours. For
                urgent projects, please call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 p-4 lg:p-6"
          >
            <h3
              className={`text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 ${playfair.className}`}
            >
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 lg:py-12"
              >
                <CheckCircle className="w-12 h-12 lg:w-16 lg:h-16 text-[#e4cd7f] mx-auto mb-4" />
                <h4
                  className={`text-xl lg:text-2xl font-bold text-gray-900 mb-2 ${playfair.className}`}
                >
                  Thank You!
                </h4>
                <p
                  className={`text-gray-600 text-sm lg:text-base ${inter.className}`}
                >
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      className={`block text-gray-700 mb-2 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e4cd7f] focus:border-transparent transition-all duration-200 text-sm lg:text-base ${inter.className}`}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-gray-700 mb-2 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e4cd7f] focus:border-transparent transition-all duration-200 text-sm lg:text-base ${inter.className}`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      className={`block text-gray-700 mb-2 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e4cd7f] focus:border-transparent transition-all duration-200 text-sm lg:text-base ${inter.className}`}
                      placeholder="+234 812 772 8084"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-gray-700 mb-2 font-medium text-sm lg:text-base ${inter.className}`}
                    >
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e4cd7f] focus:border-transparent transition-all duration-200 text-sm lg:text-base ${inter.className}`}
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="interior">Interior Design</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium text-sm lg:text-base ${inter.className}`}
                  >
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e4cd7f] focus:border-transparent transition-all duration-200 text-sm lg:text-base ${inter.className}`}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₦5,000,000</option>
                    <option value="50k-100k">₦5,000,000 - ₦10,000,000</option>
                    <option value="100k-250k">₦10,000,000 - ₦25,000,000</option>
                    <option value="250k-plus">₦25,000,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`block text-gray-700 mb-2 font-medium text-sm lg:text-base ${inter.className}`}
                  >
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e4cd7f] focus:border-transparent transition-all duration-200 resize-none text-sm lg:text-base ${inter.className}`}
                    placeholder="Tell us about your project, requirements, and vision..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -10px rgba(228, 205, 127, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-800 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className={inter.className}>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
