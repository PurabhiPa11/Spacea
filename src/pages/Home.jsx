import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Aesthetic from "../components/Aesthetic";

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#EDE4D8] to-[#E7DDD1] min-h-screen">
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