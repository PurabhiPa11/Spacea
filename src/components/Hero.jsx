import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <motion.section
      className="px-6 md:px-16 pt-16 pb-20 flex flex-col md:flex-row justify-between items-center gap-14"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* LEFT CONTENT */}

      <div className="max-w-[600px]">

        <h1 className="text-[52px] md:text-[78px] leading-[95%] text-[#5B5551] font-['Playfair_Display'] tracking-[-2px]">
          Transform <br />
          Properties <br />
          Into <br />
          Experiences
        </h1>

        <p className="mt-8 text-[#707B84] text-[20px] leading-[32px] max-w-[500px]">
          Luxury Airbnb transformation platform helping owners redesign,
          optimize, and elevate their spaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto">

          <button className="bg-[#5F7485] text-white px-8 py-4 rounded-[999px] text-[18px] hover:bg-[#4F6473] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(95,116,133,0.18)]">
            Explore Spaces
          </button>

          <button className="bg-[#D7E2E9] text-[#5F7485] px-8 py-4 rounded-[999px] text-[18px] hover:bg-[#C5D5DF] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(95,116,133,0.18)]">
            Watch Demo
          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="relative">

        <img
          src={heroImage}
          alt="Luxury Interior"
          className="w-[450px] h-[620px] rounded-[40px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.16)] hover:scale-[1.03] transition-all duration-500"
          will-change-transform
        />

        <div className="absolute -z-10 w-full max-w-[450px] h-[500px] md:h-[620px] bg-[#BFD1DD] blur-[160px] rounded-full top-[120px] left-[20px]"></div>

      </div>

    </motion.section>
  );
}

export default Hero;