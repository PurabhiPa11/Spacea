import minimal from "../assets/minimal.jpg";
import luxury from "../assets/luxury.jpg";
import japandi from "../assets/japandi.jpg";
import earthy from "../assets/earthy.jpg";

function Aesthetic() {
  return (
    <section className="px-16 pb-32">

      <p className="text-[#7B746D] tracking-[4px] text-[13px] uppercase">
        Choose Your Aesthetic
      </p>

      <h2 className="text-[56px] leading-[115%] text-[#5C534D] font-['Playfair_Display'] mt-6">
        Design Your Space, <br />
        Your Way
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {/* MINIMAL */}

        <div className="w-[220px] h-[290px] rounded-[28px] overflow-hidden relative group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={minimal}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <h3 className="absolute top-6 left-6 text-white text-[26px] font-['Playfair_Display']">
            Minimal
          </h3>

        </div>

        {/* LUXURY */}

        <div className="w-[220px] h-[290px] rounded-[28px] overflow-hidden relative group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={luxury}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <h3 className="absolute top-6 left-6 text-white text-[26px] font-['Playfair_Display']">
            Luxury
          </h3>

        </div>

        {/* JAPANDI */}

        <div className="w-[220px] h-[290px] rounded-[28px] overflow-hidden relative group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={japandi}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <h3 className="absolute top-6 left-6 text-white text-[26px] font-['Playfair_Display']">
            Japandi
          </h3>

        </div>

        {/* EARTHY */}

        <div className="w-[220px] h-[290px] rounded-[28px] overflow-hidden relative group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(95,116,133,0.22)] hover:translate-y-[-6px] transition-all duration-500">

          <img
            src={earthy}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <h3 className="absolute top-6 left-6 text-white text-[26px] font-['Playfair_Display']">
            Earthy
          </h3>

        </div>

      </div>

    </section>
  );
}

export default Aesthetic;