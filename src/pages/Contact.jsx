import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import contactBg from "../assets/contact.jpg";
import Navbar from "../components/Navbar";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    property: "",
    budget: "",
    vision: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      property: "",
      budget: "",
      vision: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      className="bg-[#E3EBF0] min-h-screen overflow-hidden relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* BACKGROUND IMAGE */}
      <img
        src={contactBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.28]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#E3EBF0]/45"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar />

        {/* HERO SECTION */}
        <section className="px-6 md:px-16 pt-16 md:pt-20 pb-24 relative">

          <p className="text-[#6B7B88] tracking-[4px] text-[13px] uppercase">
            Contact Page
          </p>

          <div className="max-w-[520px] mt-10">

            <h1 className="text-[52px] md:text-[88px] leading-[95%] tracking-[-2px] text-[#5B5551] font-['Playfair_Display'] font-medium">
              Let’s Design Something Exceptional
            </h1>

            <p className="text-[#707B84] text-[18px] md:text-[20px] leading-[30px] md:leading-[32px] mt-8 md:mt-10">
              Transform your property into an unforgettable guest experience through curated styling and intentional design.
            </p>

            <Link to="/start-planning">
            <button className="mt-10 bg-[#8FA7BA] text-white px-8 py-4 rounded-full text-[18px] hover:bg-[#7D93A3] hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(95,116,133,0.18)]">
            Book Consultation
            </button>
            </Link>

          </div>

          {/* FLOATING GLASS CARDS */}
          <div className="hidden xl:flex absolute right-[80px] top-[180px] flex-col gap-8">

            {/* CARD 1 */}
            <div className="w-[260px] xl:w-[320px] h-[120px] xl:h-[140px] flex items-center justify-center backdrop-blur-[30px] bg-white/8 border border-white/20 rounded-[28px] px-10 shadow-[0_18px_50px_rgba(0,0,0,0.10)] hover:-translate-y-2 hover:scale-105 hover:bg-white/12 transition-all duration-500 cursor-pointer">

              <h3 className="text-[#5B5551] text-[28px] xl:text-[34px] font-['Playfair_Display']">
                Luxury styling.
              </h3>

            </div>

            {/* CARD 2 */}
            <div className="w-[260px] xl:w-[320px] h-[120px] xl:h-[140px] flex items-center justify-center backdrop-blur-[30px] bg-white/8 border border-white/20 rounded-[28px] px-10 shadow-[0_18px_50px_rgba(0,0,0,0.10)] hover:-translate-y-2 hover:scale-105 hover:bg-white/12 transition-all duration-500 cursor-pointer ml-[-40px]">

              <h3 className="text-[#5B5551] text-[28px] xl:text-[34px] font-['Playfair_Display']">
                Curated living.
              </h3>

            </div>

            {/* CARD 3 */}
            <div className="w-[260px] xl:w-[320px] h-[120px] xl:h-[140px] flex items-center justify-center backdrop-blur-[30px] bg-white/8 border border-white/20 rounded-[28px] px-10 shadow-[0_18px_50px_rgba(0,0,0,0.10)] hover:-translate-y-2 hover:scale-105 hover:bg-white/12 transition-all duration-500 cursor-pointer">

              <h3 className="text-[#5B5551] text-[28px] xl:text-[34px] font-['Playfair_Display']">
                Modern stays.
              </h3>

            </div>

          </div>

        </section>

        {/* CONSULTATION CARD */}
        <section className="px-6 md:px-16 pb-24 md:pb-28">

          <div className="w-full max-w-[1180px] mx-auto rounded-[42px] bg-[#E4EBF0]/90 backdrop-blur-[10px] shadow-[0_24px_60px_rgba(0,0,0,0.06)] p-8 md:p-16 flex flex-col lg:flex-row justify-between gap-14 md:gap-20">

            {/* LEFT SIDE */}
            <div className="max-w-[420px]">

              <h2 className="text-[48px] md:text-[72px] leading-[95%] tracking-[-2px] text-[#5B5551] font-['Playfair_Display'] font-medium">
                Design spaces your guests remember.
              </h2>

              <p className="text-[#707B84] text-[17px] md:text-[18px] leading-[30px] mt-8 md:mt-10">
                Tell us about your property, aesthetic goals, and guest experience vision.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="w-full max-w-[430px]">

              <h3 className="text-[#5B5551] text-[28px] md:text-[30px] font-medium mb-8 md:mb-10">
                Start Your Consultation
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-[68px] rounded-[18px] bg-[#E7EEF3]/45 border border-[#D3DDE5] px-6 text-[#5B5551] placeholder:text-[#8B99A4] outline-none hover:border-[#AFC0CD] focus:border-[#8FA7BA] focus:bg-white/70 transition-all duration-300"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="h-[68px] rounded-[18px] bg-[#E7EEF3]/45 border border-[#D3DDE5] px-6 text-[#5B5551] placeholder:text-[#8B99A4] outline-none hover:border-[#AFC0CD] focus:border-[#8FA7BA] focus:bg-white/70 transition-all duration-300"
                />

                <input
                  type="text"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  placeholder="Property Type"
                  className="h-[68px] rounded-[18px] bg-[#E7EEF3]/45 border border-[#D3DDE5] px-6 text-[#5B5551] placeholder:text-[#8B99A4] outline-none hover:border-[#AFC0CD] focus:border-[#8FA7BA] focus:bg-white/70 transition-all duration-300"
                />

                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Budget Range"
                  className="h-[68px] rounded-[18px] bg-[#E7EEF3]/45 border border-[#D3DDE5] px-6 text-[#5B5551] placeholder:text-[#8B99A4] outline-none hover:border-[#AFC0CD] focus:border-[#8FA7BA] focus:bg-white/70 transition-all duration-300"
                />

                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  placeholder="Tell us about your vision"
                  className="h-[180px] rounded-[18px] bg-[#E7EEF3]/45 border border-[#D3DDE5] p-6 text-[#5B5551] placeholder:text-[#8B99A4] outline-none resize-none hover:border-[#AFC0CD] focus:border-[#8FA7BA] focus:bg-white/70 transition-all duration-300"
                ></textarea>

                <button
                  type="submit"
                  className="mt-2 w-fit bg-[#8FA7BA] text-white px-8 py-4 rounded-full text-[18px] hover:bg-[#7D93A3] hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(95,116,133,0.18)]"
                >
                  Send Inquiry
                </button>

                <p className="text-[#8B99A4] text-[14px] mt-2">
                  We’ll reach out within 24 hours.
                </p>

              </form>

            </div>

          </div>

        </section>

      </div>

      {/* SUCCESS POPUP */}
      {submitted && (
        <div className="fixed bottom-8 right-8 bg-[#8FA7BA] text-white px-6 py-4 rounded-[20px] shadow-[0_10px_30px_rgba(95,116,133,0.18)] z-50 animate-pulse">
          Response submitted successfully ✨
        </div>
      )}

    </motion.div>
  );
}

export default Contact;