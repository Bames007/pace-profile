// components/Sections/AIConsultation.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { playfair, inter } from "../utils/constant";
import {
  Brain,
  Clock,
  CheckCircle,
  MessageCircle,
  Sparkles,
  Calculator,
  Palette,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";

const AIConsultation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userInputs, setUserInputs] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    style: "",
    requirements: "",
  });

  const consultationSteps = [
    {
      title: "Project Vision",
      description: "Tell us about your dream project",
      icon: Lightbulb,
      questions: [
        {
          id: "projectType",
          question: "What type of project are you planning?",
          type: "select",
          options: [
            "Residential Home",
            "Commercial Building",
            "Renovation Project",
            "Interior Design",
            "Landscape Design",
            "Mixed-Use Development",
          ],
        },
      ],
    },
    {
      title: "Budget & Timeline",
      description: "Define your investment and schedule",
      icon: Calculator,
      questions: [
        {
          id: "budget",
          question: "What is your estimated budget range?",
          type: "select",
          options: [
            "₦20M - ₦50M",
            "₦50M - ₦100M",
            "₦100M - ₦200M",
            "₦200M - ₦500M",
            "₦500M+",
            "Not sure yet",
          ],
        },
        {
          id: "timeline",
          question: "What is your preferred timeline?",
          type: "select",
          options: [
            "3-6 months",
            "6-12 months",
            "1-2 years",
            "2+ years",
            "Flexible",
          ],
        },
      ],
    },
    {
      title: "Design Style",
      description: "Choose your preferred aesthetic",
      icon: Palette,
      questions: [
        {
          id: "style",
          question: "Which design style resonates with you?",
          type: "select",
          options: [
            "Modern Contemporary",
            "Minimalist",
            "Traditional",
            "Industrial",
            "Sustainable/Eco-Friendly",
            "Luxury Premium",
            "Transitional",
            "Custom Blend",
          ],
        },
      ],
    },
    {
      title: "Special Requirements",
      description: "Any specific needs or features?",
      icon: Sparkles,
      questions: [
        {
          id: "requirements",
          question: "What special features are important to you?",
          type: "multiselect",
          options: [
            "Smart Home Technology",
            "Sustainable Materials",
            "Accessibility Features",
            "Home Office Space",
            "Entertainment Areas",
            "Outdoor Living",
            "Luxury Amenities",
            "Energy Efficiency",
            "Home Gym",
            "Multi-generational Living",
          ],
        },
      ],
    },
  ];

  const handleInputChange = (id: string, value: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (activeStep < consultationSteps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      // Submit consultation
      console.log("Consultation submitted:", userInputs);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const getAISuggestion = () => {
    // This would typically call an AI API
    return {
      recommendedStyle: "Modern Contemporary with Sustainable Features",
      estimatedTimeline: "8-12 months",
      keyConsiderations: [
        "Solar integration for energy efficiency",
        "Open floor plan for natural light",
        "Indoor-outdoor living spaces",
        "Smart home automation",
        "Water recycling system",
      ],
      suggestedBudget: "₦85M - ₦120M",
      sustainabilityScore: "92%",
    };
  };

  const aiSuggestion = getAISuggestion();

  return (
    <section
      id="ai-consultation"
      className="py-12 lg:py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
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
            <Brain className="w-4 h-4 text-[#e4cd7f] mr-2" />
            <span
              className={`text-gray-700 text-sm font-medium ${inter.className}`}
            >
              AI-Powered Design Assistant
            </span>
          </motion.div>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 ${playfair.className}`}
          >
            Intelligent Project
            <span className="text-[#e4cd7f] block">Consultation</span>
          </h2>
          <p
            className={`text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed ${inter.className}`}
          >
            Get personalized architectural recommendations powered by AI. Our
            system analyzes your needs to provide optimal design solutions in
            minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* Consultation Wizard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-gray-200 p-4 lg:p-8"
          >
            {/* Progress Bar */}
            <div className="mb-6 lg:mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm text-gray-600 ${inter.className}`}>
                  Step {activeStep + 1} of {consultationSteps.length}
                </span>
                <span
                  className={`text-sm font-medium text-[#e4cd7f] ${inter.className}`}
                >
                  {Math.round(
                    ((activeStep + 1) / consultationSteps.length) * 100
                  )}
                  % Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      ((activeStep + 1) / consultationSteps.length) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] h-2 rounded-full"
                />
              </div>
            </div>

            {/* Current Step */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#e4cd7f] to-[#d4b95a] rounded-xl flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const Icon = consultationSteps[activeStep].icon;
                      return (
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      );
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-xl lg:text-2xl font-bold text-gray-900 ${playfair.className}`}
                    >
                      {consultationSteps[activeStep].title}
                    </h3>
                    <p
                      className={`text-gray-600 text-sm lg:text-base ${inter.className}`}
                    >
                      {consultationSteps[activeStep].description}
                    </p>
                  </div>
                </div>

                {consultationSteps[activeStep].questions.map((question) => (
                  <div key={question.id} className="space-y-3 lg:space-y-4">
                    <label
                      className={`block text-lg font-medium text-gray-900 ${inter.className}`}
                    >
                      {question.question}
                    </label>
                    <div className="grid gap-2 lg:gap-3">
                      {question.options.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleInputChange(question.id, option)}
                          className={`p-3 lg:p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                            userInputs[
                              question.id as keyof typeof userInputs
                            ] === option
                              ? "border-[#e4cd7f] bg-[#e4cd7f]/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span
                            className={`text-sm lg:text-base ${inter.className}`}
                          >
                            {option}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-6 lg:mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                disabled={activeStep === 0}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeStep === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } ${inter.className}`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#e4cd7f] to-[#d4b95a] text-gray-800 rounded-lg font-medium flex items-center gap-2"
              >
                <span className={inter.className}>
                  {activeStep === consultationSteps.length - 1
                    ? "Get AI Recommendations"
                    : "Continue"}
                </span>
                {activeStep === consultationSteps.length - 1 ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <MessageCircle className="w-4 h-4" />
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* AI Recommendations Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-8 text-white">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-[#e4cd7f]" />
                <h3
                  className={`text-xl lg:text-2xl font-bold ${playfair.className}`}
                >
                  AI Design Insights
                </h3>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="bg-white/5 rounded-xl p-3 lg:p-4">
                  <h4
                    className={`font-bold text-[#e4cd7f] mb-2 text-sm lg:text-base ${inter.className}`}
                  >
                    Recommended Style
                  </h4>
                  <p className={`text-sm lg:text-base ${inter.className}`}>
                    {aiSuggestion.recommendedStyle}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  <div className="bg-white/5 rounded-xl p-3 lg:p-4">
                    <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-[#e4cd7f] mb-2" />
                    <h4
                      className={`font-bold text-white mb-1 text-sm lg:text-base ${inter.className}`}
                    >
                      Timeline
                    </h4>
                    <p className={`text-xs lg:text-sm ${inter.className}`}>
                      {aiSuggestion.estimatedTimeline}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 lg:p-4">
                    <Calculator className="w-4 h-4 lg:w-5 lg:h-5 text-[#e4cd7f] mb-2" />
                    <h4
                      className={`font-bold text-white mb-1 text-sm lg:text-base ${inter.className}`}
                    >
                      Budget Range
                    </h4>
                    <p className={`text-xs lg:text-sm ${inter.className}`}>
                      {aiSuggestion.suggestedBudget}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-3 lg:p-4">
                  <h4
                    className={`font-bold text-[#e4cd7f] mb-2 text-sm lg:text-base ${inter.className}`}
                  >
                    Key Considerations
                  </h4>
                  <div className="space-y-2">
                    {aiSuggestion.keyConsiderations.map(
                      (consideration, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-[#e4cd7f] mt-0.5 flex-shrink-0" />
                          <span
                            className={`text-xs lg:text-sm leading-relaxed ${inter.className}`}
                          >
                            {consideration}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {[
                {
                  icon: Clock,
                  title: "Save Time",
                  description: "Instant personalized recommendations",
                },
                {
                  icon: CheckCircle,
                  title: "Optimized Solutions",
                  description: "AI-analyzed design options",
                },
                {
                  icon: Calculator,
                  title: "Accurate Budgeting",
                  description: "Realistic cost estimates",
                },
                {
                  icon: Sparkles,
                  title: "Innovative Ideas",
                  description: "Creative design insights",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-3 lg:p-4 border border-gray-200 shadow-sm"
                >
                  <benefit.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#e4cd7f] mb-2" />
                  <h4
                    className={`font-bold text-gray-900 mb-1 text-sm lg:text-base ${inter.className}`}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className={`text-xs lg:text-sm text-gray-600 ${inter.className}`}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultation;
