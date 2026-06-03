import { motion } from "framer-motion";
import { ArrowRight, Upload } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

import heroImage from "../assets/planning-hero.jpg";

import style1 from "../assets/style1.jpg";
import style2 from "../assets/style2.jpg";
import style3 from "../assets/style3.jpg";
import style4 from "../assets/style4.jpg";

function StartPlanning() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
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
      phone: "",
      location: "",
      vision: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      className="bg-[#F4F1EA] min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >

      <Navbar />

      {/* HERO SECTION */}

      <section className="px-8 md:px-16 pt-20 pb-32">

        <div className="flex items-center justify-between">

          <div className="max-w-[620px]">

            <p className="tracking-[0.30em] text-[13px] text-[#6D665F]">
              START PLANNING
            </p>

            <h1 className="font-serif text-[96px] leading-[90%] text-[#2D2A27] mt-8">
              Let's transform
              <br />
              your property
              <br />
              together.
            </h1>

            <p className="text-[#6D665F] text-[22px] leading-[170%] mt-10">
              Tell us about your space,
              style and goals.
              We'll create a tailored
              transformation plan.
            </p>

            <button className="mt-12 bg-[#163B2F] text-white px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
              Begin Project
            </button>

          </div>

          <div className="w-[520px] h-[680px] overflow-hidden rounded-t-[260px] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">

            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* PROPERTY TYPE */}

      <section className="px-8 md:px-16 pb-28">

        <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
          YOUR SPACE
        </p>

        <h2 className="font-serif text-[68px] text-[#2D2A27]">
          What are you redesigning?
        </h2>

        <div className="grid grid-cols-4 gap-8 mt-14">

          {[
            "Airbnb",
            "Villa",
            "Apartment",
            "Boutique Hotel",
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FBF8F3] rounded-[30px] p-10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] cursor-pointer"
            >

              <h3 className="font-serif text-[42px] text-[#2D2A27]">
                {item}
              </h3>

              <p className="text-[#6D665F] mt-5 leading-[170%]">
                Designed to elevate guest
                experience and increase bookings.
              </p>

            </motion.div>

          ))}

                  </div>

      </section>

      {/* TRANSFORMATION GOALS */}

      <section className="px-8 md:px-16 pb-28">

        <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
          PROJECT GOALS
        </p>

        <h2 className="font-serif text-[68px] text-[#2D2A27]">
          What are you looking for?
        </h2>

        <div className="grid grid-cols-4 gap-8 mt-14">

          {[
            "Increase Bookings",
            "Luxury Upgrade",
            "Better Guest Experience",
            "Complete Redesign",
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="border border-[#D9D2C9] rounded-[30px] p-10 bg-[#F8F5EF] hover:bg-[#163B2F] hover:text-white transition-all duration-300 cursor-pointer"
            >

              <h3 className="font-serif text-[36px] leading-[110%]">
                {item}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* STYLE PREFERENCES */}

      <section className="px-8 md:px-16 pb-28">

        <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
          STYLE PREFERENCES
        </p>

        <h2 className="font-serif text-[68px] text-[#2D2A27]">
          Choose your aesthetic
        </h2>

        <div className="grid grid-cols-2 gap-8 mt-14">

          {[
            {
              image: style1,
              title: "Modern Minimal",
            },
            {
              image: style2,
              title: "Earthy Retreat",
            },
            {
              image: style3,
              title: "Coastal Luxury",
            },
            {
              image: style4,
              title: "Contemporary Elegance",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FBF8F3] rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-[320px] object-cover hover:scale-105 transition-all duration-700"
              />

              <div className="p-8">

                <h3 className="font-serif text-[42px] text-[#2D2A27]">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* UPLOAD SECTION */}

      <section className="px-8 md:px-16 pb-28">

        <div className="bg-[#FBF8F3] rounded-[38px] p-20 shadow-[0_18px_40px_rgba(0,0,0,0.06)] text-center">

          <Upload
            size={52}
            className="mx-auto text-[#163B2F]"
          />

          <h2 className="font-serif text-[68px] text-[#2D2A27] mt-8">
            Upload Your Space
          </h2>

          <p className="text-[#6D665F] text-[20px] leading-[180%] mt-6 max-w-[700px] mx-auto">
            Share photos of your property and we'll
            understand its potential before creating
            your transformation strategy.
          </p>

          <button className="mt-10 border border-[#163B2F] text-[#163B2F] px-8 py-4 rounded-full hover:bg-[#163B2F] hover:text-white transition-all duration-300">
            Browse Files
          </button>

        </div>

      </section>
              {/* BUDGET RANGE */}

      <section className="px-8 md:px-16 pb-28">

        <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
          BUDGET RANGE
        </p>

        <h2 className="font-serif text-[68px] text-[#2D2A27]">
          What's your budget?
        </h2>

        <div className="flex gap-6 mt-14 flex-wrap">

          {[
            "₹50K - ₹1L",
            "₹1L - ₹3L",
            "₹3L - ₹5L",
            "₹5L+",
          ].map((item, index) => (

            <button
              key={index}
              className="px-10 py-5 rounded-full bg-[#FBF8F3] text-[#2D2A27] shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:bg-[#163B2F] hover:text-white transition-all duration-300"
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      {/* CONSULTATION FORM */}

      <section className="px-8 md:px-16 pb-28">

        <div className="bg-[#FBF8F3] rounded-[40px] p-16 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">

          <div className="flex justify-between gap-20">

            {/* LEFT */}

            <div className="max-w-[450px]">

              <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
                CONSULTATION
              </p>

              <h2 className="font-serif text-[68px] leading-[95%] text-[#2D2A27]">
                Tell us about your project.
              </h2>

              <p className="text-[#6D665F] text-[20px] leading-[180%] mt-8">
                The more details you share,
                the better we can understand your vision.
              </p>

            </div>

            {/* RIGHT */}

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[520px] flex flex-col gap-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="h-[70px] rounded-[18px] border border-[#DDD6CD] px-6 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="h-[70px] rounded-[18px] border border-[#DDD6CD] px-6 outline-none"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="h-[70px] rounded-[18px] border border-[#DDD6CD] px-6 outline-none"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Property Location"
                className="h-[70px] rounded-[18px] border border-[#DDD6CD] px-6 outline-none"
              />

              <textarea
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                placeholder="Tell us about your project"
                className="h-[180px] rounded-[18px] border border-[#DDD6CD] p-6 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-fit bg-[#163B2F] text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                Submit Project
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-8 md:px-16 pb-32">

        <div className="bg-[#163B2F] rounded-[42px] p-20 text-center">

          <h2 className="font-serif text-[76px] leading-[100%] text-white">
            Ready to unlock
            <br />
            your property's potential?
          </h2>

          <p className="text-[#D5DED9] text-[20px] mt-8 max-w-[700px] mx-auto leading-[180%]">
            Let's create a stay that guests remember,
            review and recommend.
          </p>

          <button className="mt-12 bg-white text-[#163B2F] px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">

            Request Consultation

            <ArrowRight size={18} />

          </button>

        </div>

      </section>

      {/* SUCCESS POPUP */}

      {submitted && (

        <div className="fixed bottom-8 right-8 bg-[#163B2F] text-white px-6 py-4 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-50">

          Project submitted successfully ✨

        </div>

      )}

    </motion.div>
  );
}

export default StartPlanning;
