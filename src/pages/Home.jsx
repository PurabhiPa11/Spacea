import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Aesthetic from "../components/Aesthetic";

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#E3EBF0] to-[#DCE5EB] min-h-screen">
       <div className="max-w-[1440px] mx-auto">

      <Navbar />
      <Hero />
      <Features />
      <Aesthetic />
    </div>
    </div>
  );
}

export default Home;