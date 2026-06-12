import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import { useState } from "react";
import demoVideo from "../assets/airbnb_transformation.mp4";
import { Link } from "react-router-dom";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <motion.section
        className="px-6 md:px-16 pt-16 pb-20 flex flex-col md:flex-row justify-between items-center gap-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* LEFT CONTENT */}

        <div className="w-full max-w-[600px]">
          <h1 className="text-[36px] sm:text-[48px] md:text-[78px] leading-[100%] md:leading-[95%] text-[#5C534D] font-['Playfair_Display'] tracking-[-2px]">
            Transform <br />
            Properties <br />
            Into <br />
            Experiences
          </h1>

          <p className="mt-6 md:mt-8 text-[#7B746D] text-[18px] md:text-[20px] leading-[30px] md:leading-[32px] max-w-[500px]">
            Luxury Airbnb transformation platform helping owners redesign,
            optimize, and elevate their spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto">
            {/* Explore Button */}

            <Link to="/explore">
              <button className="bg-[#6E7A6A] text-white px-8 py-4 rounded-[999px] text-[18px] hover:bg-[#5C6758] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(95,116,133,0.18)]">
                Explore Spaces
              </button>
            </Link>

            {/* Demo Button */}

            <button
              onClick={() => setShowVideo(true)}
              className="bg-[#E4D8CA] text-[#5C534D] px-8 py-4 rounded-[999px] text-[18px] hover:bg-[#D9CCBD] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(95,116,133,0.18)]"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="relative w-full flex justify-center">
          <img
            src={heroImage}
            alt="Luxury Interior"
            className="w-full max-w-[450px] h-[420px] md:h-[620px] rounded-[40px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.16)] hover:scale-[1.03] transition-all duration-500"
            willChange="transform"
          />

          <div className="absolute -z-10 w-full max-w-[450px] h-[500px] md:h-[620px] bg-[#BFD1DD] blur-[160px] rounded-full top-[120px] left-[20px]"></div>
        </div>
      </motion.section>

      {/* VIDEO MODAL */}

      {showVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="bg-white rounded-[24px] p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="w-full rounded-[16px]"
            >
              <source src={demoVideo} type="video/mp4" />
            </video>

            <button
              onClick={() => setShowVideo(false)}
              className="mt-4 bg-[#8FA7BA] text-white px-6 py-3 rounded-full hover:bg-[#7A93A7] transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;