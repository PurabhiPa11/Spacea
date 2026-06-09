import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

/* HERO IMAGES */
import heroBg from "../assets/transform-bg.jpg";
import heroArch from "../assets/transform-arch.jpg";

/* FEATURED TRANSFORMATION */
import beforeRoom from "../assets/before-room.png";
import afterRoom from "../assets/after-room.png";

/* GRID CARDS */
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";

function Transformations() {
  return (
    <motion.div
      className="bg-[#EFE8DF] min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen md:h-[1180px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
        />

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-16 pt-16 md:pt-24">

          {/* SMALL LABEL */}
          <p className="text-[#6B625A] tracking-[6px] text-[13px] uppercase">
            Transformations
          </p>

          {/* HEADING */}
          <h1 className="max-w-[560px] mt-10 text-[42px] sm:text-[58px] md:text-[96px] leading-[92%] tracking-[-3px] text-[#5B5551] font-['Playfair_Display'] font-medium">
            Transformations
            That Redefine
            Spaces
          </h1>

          {/* PARAGRAPH */}
          <p className="w-full max-w-[390px] mt-8 md:mt-10 text-[#70675F] text-[22px] leading-[150%]">
            Thoughtful design. Intentional details.
            Unforgettable guest experiences.
          </p>

          {/* BUTTON */}
          <button
  onClick={() =>
    document
      .getElementById("more-transformations")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="mt-12 bg-[#8C7763] text-white px-10 py-5 rounded-full text-[18px] hover:bg-[#756250] hover:scale-105 transition-all duration-500 shadow-[0_12px_30px_rgba(90,70,50,0.18)]">
  View Transformations
</button>

          {/* ARCH IMAGE */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="relative lg:absolute
            mx-auto md:mx-0
            mt-12 md:mt-0
            lg:right-[180px]
            lg:top-[240px]
            w-full
            max-w-[420px]
            md:max-w-[520px]
            h-[500px]
            md:h-[700px]
            overflow-hidden
            rounded-t-[220px]
            md:rounded-t-[260px]
            shadow-[0_30px_90px_rgba(0,0,0,0.12)]">

            <img
              src={heroArch}
              alt=""
              className="w-full h-full object-cover scale-[1.25] object-[62%_40%]"
            />

          </motion.div>

          {/* GLASS CARD */}
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="
            relative lg:absolute
            mx-auto
            mt-8
            md:mt-0
            lg:right-[160px]
            lg:top-[860px]
            w-full
            max-w-[340px]
            h-auto
            min-h-[150px]
            bg-[#F4EEE7]/80
            border border-white/30
            rounded-[40px]
            px-8 md:px-10
            py-6
            flex items-center
            shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

            <p className="text-[#5B5551] text-[24px] md:text-[32px] leading-[110%] font-medium tracking-[-2%] font-['Cormorant_Garamond']">
              Where thoughtful
              design meets comfort.
            </p>

          </motion.div>

        </div>

      </section>

      {/* FEATURED TRANSFORMATION */}
      <section className="px-6 md:px-16 pb-32">

        <div className="w-full max-w-[1280px] mx-auto bg-[#F7F3EE] rounded-[38px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 md:p-14">

          {/* LABEL */}
          <p className="text-[#7B726A] tracking-[5px] text-[13px] uppercase">
            Featured Transformation
          </p>

          {/* BEFORE AFTER SECTION */}
          <div className="mt-10 flex flex-col lg:flex-row gap-4 relative">

            {/* BEFORE */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative w-full lg:w-1/2 h-[420px] rounded-[28px] overflow-hidden"
            >

              <img
                src={beforeRoom}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />

              <div className="absolute top-6 left-6 bg-[#5B4B3E] text-white px-6 py-3 rounded-full text-[14px] tracking-[2px]">
                BEFORE
              </div>

            </motion.div>

            {/* AFTER */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative w-full lg:w-1/2 h-[420px] rounded-[28px] overflow-hidden"
            >

              <img
                src={afterRoom}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />

              <div className="absolute top-6 left-6 bg-[#8C7763] text-white px-6 py-3 rounded-full text-[14px] tracking-[2px]">
                AFTER
              </div>

            </motion.div>

            {/* CENTER BUTTON */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] bg-white rounded-full items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.12)] text-[24px] text-[#5B5551]">
              ↔
            </div>

          </div>

          {/* INFO ROW */}
          <div className="mt-12 flex flex-col lg:flex-row justify-between gap-12">

            {/* LEFT */}
            <div>

              <h2 className="text-[#5B5551] text-[32px] md:text-[42px] font-medium font-['Cormorant_Garamond']">
                Coastal Retreat
              </h2>

              <p className="text-[#7B726A] text-[18px] mt-2">
                Goa, India
              </p>

            </div>

            {/* CENTER */}
            <p className="max-w-[420px] text-[#6D655D] text-[18px] leading-[165%]">
              A complete styling and furnishing transformation
              that elevated the space and enhanced the overall guest experience.
            </p>

            {/* RIGHT */}
            <div>

              <h3 className="text-[#5B5551] text-[42px] md:text-[64px] leading-[100%] font-['Cormorant_Garamond']">
                Luxury
              </h3>

              <p className="text-[#7B726A] text-[16px] mt-2">
                Warm hospitality-inspired redesign
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MORE TRANSFORMATIONS */}
      <section 
       id="more-transformations"
      className="px-6 md:px-16 pb-32">

        <p className="text-[#7B726A] tracking-[6px] text-[13px] uppercase mb-12">
          More Transformations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F3EE] rounded-[32px] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] cursor-pointer"
          >

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={grid1}
                alt=""
                className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="mt-8 text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
              Airbnb Makeover
            </h3>

            <p className="mt-2 text-[#7B726A] text-[18px]">
              Bandra, Mumbai
            </p>

            <p className="mt-8 text-[#8C7763] text-[18px] font-medium">
              View Project →
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F3EE] rounded-[32px] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] cursor-pointer"
          >

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={grid2}
                alt=""
                className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="mt-8 text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
              Modern Escape
            </h3>

            <p className="mt-2 text-[#7B726A] text-[18px]">
              Pune, India
            </p>

            <p className="mt-8 text-[#8C7763] text-[18px] font-medium">
              View Project →
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F3EE] rounded-[32px] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] cursor-pointer"
          >

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={grid3}
                alt=""
                className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="mt-8 text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
              Earthy Stay
            </h3>

            <p className="mt-2 text-[#7B726A] text-[18px]">
              Lonavala, India
            </p>

            <p className="mt-8 text-[#8C7763] text-[18px] font-medium">
              View Project →
            </p>

          </motion.div>

          {/* CARD 4 */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F3EE] rounded-[32px] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] cursor-pointer"
          >

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={grid4}
                alt=""
                className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            <h3 className="mt-8 text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
              Boutique Living
            </h3>

            <p className="mt-2 text-[#7B726A] text-[18px]">
              Jaipur, India
            </p>

            <p className="mt-8 text-[#8C7763] text-[18px] font-medium">
              View Project →
            </p>

          </motion.div>

        </div>

      </section>

      {/* FINAL SECTION */}
      <section className="px-6 md:px-16 pb-32">

        <div className="max-w-[1280px] mx-auto bg-[#F7F3EE] rounded-[38px] shadow-[0_18px_50px_rgba(0,0,0,0.07)] px-10 py-16">

          <p className="text-center text-[#7B726A] tracking-[6px] text-[13px] uppercase">
            Curated Spaces. Lasting Impressions.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

            {/* BLOCK 1 */}
            <div>
              <h3 className="text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
                Thoughtful Styling
              </h3>

              <p className="mt-4 text-[#7B726A] text-[16px] leading-[165%]">
                Curated interiors designed
                for memorable stays.
              </p>
            </div>

            {/* BLOCK 2 */}
            <div>
              <h3 className="text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
                Warm Aesthetics
              </h3>

              <p className="mt-4 text-[#7B726A] text-[16px] leading-[165%]">
                Soft tones and textures
                with a calming feel.
              </p>
            </div>

            {/* BLOCK 3 */}
            <div>
              <h3 className="text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
                Guest Experience
              </h3>

              <p className="mt-4 text-[#7B726A] text-[16px] leading-[165%]">
                Designed for comfort
                and effortless stays.
              </p>
            </div>

            {/* BLOCK 4 */}
            <div>
              <h3 className="text-[#5B5551] text-[28px] md:text-[36px] font-medium font-['Cormorant_Garamond']">
                Elevated Living
              </h3>

              <p className="mt-4 text-[#7B726A] text-[16px] leading-[165%]">
                Luxury-inspired spaces
                with thoughtful details.
              </p>
            </div>

          </div>

        </div>

      </section>

    </motion.div>
  );
}

export default Transformations;