// components/Sections/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { playfair, inter } from "../utils/constant";
import { Star, Quote, Award, ThumbsUp, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Pace Profile Designs transformed our outdated house into a modern dream home. Their attention to detail and creative solutions exceeded our expectations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Villa Renovation",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      content:
        "The commercial space they designed for our company has significantly improved employee morale and productivity. Professional and innovative!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Office Design",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      content:
        "Our restaurant's renovation by Pace Profile Designs resulted in a 40% increase in customers. The design perfectly captures our brand's essence.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Restaurant Makeover",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Hotel Manager",
      content:
        "The luxury hotel interior they designed has received countless compliments from guests. Exceptional work from concept to completion.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Hotel Interior",
    },
  ];

  const stats = [
    {
      number: "150+",
      label: "Projects Completed",
      icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <ThumbsUp className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      number: "12+",
      label: "Years Experience",
      icon: <Star className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      number: "50+",
      label: "Awards Won",
      icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-12 lg:py-20 bg-[#f2f1ee] overflow-hidden"
    >
      {/* Simplified Background Elements - No heavy animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 lg:-left-48 w-48 lg:w-96 h-48 lg:h-96 bg-white rounded-full opacity-10 lg:opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 lg:-right-48 w-48 lg:w-96 h-48 lg:h-96 bg-white rounded-full opacity-10 lg:opacity-20 blur-3xl" />
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6"
          >
            <div className="w-2 h-2 bg-[#e4cd7f] rounded-full mr-2" />
            <span
              className={`text-gray-700 text-sm font-medium ${inter.className}`}
            >
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight ${playfair.className}`}
          >
            What Our
            <span className="text-[#e4cd7f] block">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${inter.className}`}
          >
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with Pace Profile Designs.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 p-4 lg:p-6 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-[#e4cd7f] mb-3 lg:mb-4">
                <Quote className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 lg:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 lg:w-5 lg:h-5 text-[#e4cd7f] fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className={`text-gray-600 leading-relaxed text-sm lg:text-base mb-4 lg:mb-6 ${inter.className}`}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4
                      className={`font-bold text-gray-900 text-sm lg:text-base ${inter.className}`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-gray-600 text-xs lg:text-sm ${inter.className}`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className={`text-[#e4cd7f] text-xs lg:text-sm font-medium ${inter.className}`}
                  >
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="text-gray-800">{stat.icon}</div>
              </div>
              <div
                className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 lg:mb-2 ${playfair.className}`}
              >
                {stat.number}
              </div>
              <div
                className={`text-gray-600 text-sm lg:text-base ${inter.className}`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
