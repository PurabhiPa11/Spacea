import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

function Features() {
  return (
    <section className="px-16 pb-32">
    
      <p className="text-[#7C8A95] tracking-[4px] text-[13px] uppercase">
        Our Services
      </p>

      <h2 className="text-[56px] leading-[115%] text-[#5B5551] font-['Playfair_Display'] mt-6 max-w-[800px]">
        Everything You Need To Transform Your Property
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {/* CARD 1 */}

        <div className="w-[240px] h-[240px] rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] group cursor-pointer hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={service1}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <h3 className="absolute bottom-6 left-6 text-white text-[28px] leading-[110%]">
            Interior <br /> Suggestions
          </h3>

        </div>

        {/* CARD 2 */}

        <div className="w-[240px] h-[240px] rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] group cursor-pointer hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={service2}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <h3 className="absolute bottom-6 left-6 text-white text-[28px] leading-[110%]">
            Airbnb <br /> Styling
          </h3>

        </div>

        {/* CARD 3 */}

        <div className="w-[240px] h-[240px] rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] group cursor-pointer hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={service3}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <h3 className="absolute bottom-6 left-6 text-white text-[28px] leading-[110%]">
            Space <br /> Optimization
          </h3>

        </div>

       {/* EDITORIAL CARD */}

<div className="w-[240px] h-[270px] rounded-[32px] bg-[#EEF3F6] shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] p-8 flex flex-col justify-center gap-8 cursor-pointer hover:translate-y-[-6px] transition-all duration-500">

  <div className="w-[62px] h-[62px] rounded-full border border-[#9BAFBE] flex items-center justify-center text-[#7D93A3] text-[26px]">
    ✦
  </div>

  <div>

    <p className="text-[#6E7E8A] text-[24px] leading-[135%] font-['Playfair_Display']">
      Tailored for every space, designed for your guests.
    </p>

  </div>

</div>

</div>
    </section>
  );
}

export default Features;