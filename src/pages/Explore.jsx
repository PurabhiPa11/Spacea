import { motion } from "framer-motion";
import { Heart, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

/* HERO IMAGES */
import heroImage from "../assets/explore-hero.jpg";

/* CATEGORY IMAGES */
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";
import category5 from "../assets/category5.jpg";
import category6 from "../assets/category6.jpg";

/* STAY IMAGES */
import stay1 from "../assets/stay1.jpg";
import stay2 from "../assets/stay2.jpg";
import stay3 from "../assets/stay3.jpg";
import stay4 from "../assets/stay4.jpg";

/* BOTTOM IMAGES */
import indiaMap from "../assets/india-map.png";
import recommendationImg from "../assets/recommendation.jpg";

function Explore() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (index) => {
  if (favorites.includes(index)) {
    setFavorites(favorites.filter((item) => item !== index));
  } else {
    setFavorites([...favorites, index]);
  }
};
  return (
    <motion.div
  className="bg-[#1E4A3B] min-h-screen"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen lg:h-[920px] overflow-hidden">

        {/* LEFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08261D] via-[#12362D] to-[#1E4A3B]" />

        {/* HERO CONTENT */}
        <div className="relative z-20 px-6 md:px-16 pt-[120px] md:pt-[170px] flex flex-col lg:flex-row">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2">

            <p className="text-[#E6DED2] tracking-[0.32em] text-[14px] mb-10 font-medium">
              EXPLORE STAYS
            </p>

            <h1 className="font-serif text-[#F5F1EA] text-[42px] sm:text-[58px] lg:text-[96px] leading-[100%] lg:leading-[88px] max-w-[620px]">
              Discover spaces
              <br />
              that stay with you.
            </h1>

            <p className="text-[#DDD5CA] text-[18px] md:text-[24px] leading-[170%] max-w-[480px] mt-12">
              Handpicked stays in stunning locations,
              curated for your comfort, style and unforgettable experiences.
            </p>

            {/* SEARCH BAR */}
            <div className="
             mt-10
             relative
             z-40
             w-full
             max-w-[860px]
             bg-[#FBF8F3]
             rounded-[30px] lg:rounded-full
             p-6
             lg:p-0
             flex
             flex-col
             lg:flex-row
             gap-6
             lg:gap-0
             shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
              <div className="flex-1 px-10">
                <p className="text-[#2D2A27] text-[18px] font-medium">
                  Where to?
                </p>
                <p className="text-[#77716A] text-[15px] mt-1">
                  Search destinations
                </p>
              </div>

              <div className="hidden lg:block w-[1px] h-[60px] bg-[#DDD5CA]" />

              <div className="flex-1 px-10">
                <p className="text-[#2D2A27] text-[18px] font-medium">
                  Check in – Check out
                </p>
                <p className="text-[#77716A] text-[15px] mt-1">
                  Add dates
                </p>
              </div>

              <div className="hidden lg:block w-[1px] h-[60px] bg-[#DDD5CA]" />
              <div className="flex-1 px-10">
                <p className="text-[#2D2A27] text-[18px] font-medium">
                  Guests
                </p>
                <p className="text-[#77716A] text-[15px] mt-1">
                  2 Guests
                </p>
              </div>

             <button
             onClick={() => navigate("/start-planning")}
             className="w-full lg:w-[90px] h-[60px] lg:h-[90px] rounded-full bg-[#163B2F] flex items-center justify-center mr-5 hover:scale-105 transition-all duration-300">
            <ArrowRight className="text-white w-7 h-7" />
            </button>
            </div>

            {/* TAGS */}
            <div className="hidden lg:flex flex-wrap gap-3 md:gap-5 mt-10 md:mt-16">
              <p>Beachfront</p>
              <p>•</p>
              <p>Mountain</p>
              <p>•</p>
              <p>City Escapes</p>
              <p>•</p>
              <p>Nature Retreats</p>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="relative lg:absolute mt-10 lg:mt-0 lg:right-[80px] lg:top-[60px]">

            <div className="w-full max-w-[560px] h-[420px] md:h-[520px] lg:h-[680px] overflow-hidden rounded-t-[360px] rounded-b-[0px] shadow-[0_35px_70px_rgba(0,0,0,0.30)]">
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT SECTION */}
      <section className="bg-[#F4F1EA] rounded-t-[60px] relative z-30 px-8 md:px-16 pt-32 pb-20">

        {/* CATEGORY SECTION */}
        <div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
            <div>
              <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
                EXPLORE BY CATEGORY
              </p>

              <h2 className="font-serif text-[36px] md:text-[56px] text-[#2D2A27]">
                Find your perfect escape
              </h2>
            </div>
          </div>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

            {[
              {
                title: "Beachfront",
                stays: "12 Stays",
                image: category1,
              },
              {
                title: "Mountain View",
                stays: "18 Stays",
                image: category2,
              },
              {
                title: "City Escapes",
                stays: "14 Stays",
                image: category3,
              },
              {
                title: "Nature Retreats",
                stays: "16 Stays",
                image: category4,
              },
              {
                title: "Luxury Villas",
                stays: "10 Stays",
                image: category5,
              },
              {
                title: "Poolside Stays",
                stays: "8 Stays",
                image: category6,
              },
            ].map((item, index) => (
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="bg-[#FBF8F3] rounded-[28px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
              >
                <div className="p-6">
                  <h3 className="font-serif text-[28px] text-[#2D2A27]">
                    {item.title}
                  </h3>

                  <p className="text-[#726B64] mt-2">
                    {item.stays}
                  </p>
                </div>

                <img
                  src={item.image}
                  alt=""
                  className="h-[220px] w-full object-cover hover:scale-105 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* FEATURED STAYS */}
        <div className="mt-32">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">

            <div>
              <p className="tracking-[0.30em] text-[13px] text-[#6D665F] mb-5">
                FEATURED STAYS
              </p>

              <h2 className="font-serif text-[42px] md:text-[68px] text-[#2D2A27]">
                Handpicked for you
              </h2>
            </div>
          </div>

          {/* STAY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              {
                title: "Coastal Haven",
                location: "Goa, India",
                price: "₹12,500",
                image: stay1,
              },
              {
                title: "Monsoon Retreat",
                location: "Lonavala, India",
                price: "₹9,800",
                image: stay2,
              },
              {
                title: "Urban Hideout",
                location: "Mumbai, India",
                price: "₹11,200",
                image: stay3,
              },
              {
                title: "The Olive Villa",
                location: "Udaipur, India",
                price: "₹18,900",
                image: stay4,
              },
            ].map((stay, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FBF8F3] rounded-[30px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={stay.image}
                    alt=""
                    className="w-full h-[320px] object-cover hover:scale-105 transition-all duration-700"
                  />

                  <button
                  onClick={() => toggleFavorite(index)}
                  className="absolute top-5 right-5 w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center">
                  <Heart
                  size={18}
                  fill={favorites.includes(index) ? "#ef4444" : "none"}
                  color={favorites.includes(index) ? "#ef4444" : "black"}/>
                  </button>
                </div>

                <div className="p-7">

                  <h3 className="font-serif text-[32px] text-[#2D2A27]">
                    {stay.title}
                  </h3>

                  <p className="text-[#726B64] mt-2">
                    {stay.location}
                  </p>

                  <div className="flex gap-5 mt-5 text-[#5B554F] text-[14px]">
  <div>2 Guests</div>
  <div>1 Bedroom</div>
  <div>Sea View</div>
</div>

                  <div className="mt-7 text-[#163B2F] font-semibold text-[34px]">
                    {stay.price}
                    <span className="text-[18px] font-normal text-[#726B64]">
                      /night
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-32">

          {/* LEFT */}
          <div className="rounded-[34px] bg-[#FBF8F3] p-10 shadow-[0_18px_40px_rgba(0,0,0,0.08)] min-h-[430px]">
            <h3 className="font-serif text-[36px] md:text-[54px] leading-[110%]">
              Explore India
              <br />
              like never before
            </h3>

            <p className="text-[#D4CEC4] mt-7 text-[20px] leading-[170%]">
              120+ handpicked destinations across beaches,
              mountains, cities and more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">

              <div>
                <h4 className="text-[42px] font-semibold">120+</h4>
                <p className="text-[#D6D0C6] mt-1">Destinations</p>
              </div>

              <div>
                <h4 className="text-[42px] font-semibold">500+</h4>
                <p className="text-[#D6D0C6] mt-1">Unique Stays</p>
              </div>

              <div>
                <h4 className="text-[42px] font-semibold">10K+</h4>
                <p className="text-[#D6D0C6] mt-1">Happy Guests</p>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="rounded-[34px] overflow-hidden bg-[#E9ECE5] shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <img
              src={indiaMap}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT */}
         
{/* RIGHT */}
<div
  className="rounded-[34px] p-10 shadow-[0_18px_40px_rgba(0,0,0,0.08)] min-h-[420px] relative overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(
      rgba(251,248,243,0.75),
      rgba(251,248,243,0.75)
    ), url(${recommendationImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-[340px]">

    <h3 className="font-serif text-[36px] md:text-[52px] leading-[105%] text-[#2D2A27]">
      Not sure where to go?
    </h3>

    <p className="text-[#6D665F] mt-6 text-[18px] leading-[180%]">
      Tell us your preferences and we'll help
      you discover stays tailored to your style,
      budget and travel mood.
    </p>

    <Link
  to="/start-planning"
  className="mt-10 bg-[#163B2F] hover:bg-[#0E241C] transition-all duration-300 text-white px-8 py-5 rounded-full flex items-center gap-4 w-fit">
  Get Recommendations
  <ArrowRight size={18} />
</Link>

  </div>
</div>
</div>
      </section>
    </motion.div>
  );
}
export default Explore;
