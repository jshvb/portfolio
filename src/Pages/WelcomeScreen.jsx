import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Github, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });

    const timer = setTimeout(() => {
      onLoadingComplete?.();
    }, 4000); // 4s

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030014] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BackgroundEffect />
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {[Code2, User, Github].map((Icon, index) => (
              <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                <IconButton Icon={Icon} />
              </div>
            ))}
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
              <div className="mb-2 sm:mb-4">
                <span
                  data-aos="fade-right"
                  data-aos-delay="200"
                  className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  Welcome
                </span>{" "}
                <span
                  data-aos="fade-right"
                  data-aos-delay="400"
                  className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  To
                </span>{" "}
                <span
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                >
                  My
                </span>
              </div>
              <div>
                <span
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Portfolio
                </span>{" "}
                <span
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Website
                </span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
