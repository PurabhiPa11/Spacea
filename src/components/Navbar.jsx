import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 gap-6 md:gap-0">

      <Link to="/">
        <h1 className="text-[42px] tracking-wide text-[#D4A08D] font-medium">
          SPACEA
        </h1>
      </Link>

      <div className="flex items-center gap-10 text-[#6B7B88] text-[15px]">

        <Link
          to="/"
          className="hover:text-[#4F6473] transition-all duration-300"
        >
          Home
        </Link>

        <Link
          to="/explore"
          className="hover:text-[#4F6473] transition-all duration-300"
        >
          Explore
        </Link>

        <Link
          to="/transformations"
          className="hover:text-[#4F6473] transition-all duration-300"
        >
          Transformations
        </Link>

        <Link
          to="/contact"
          className="hover:text-[#4F6473] transition-all duration-300"
        >
          Contact
        </Link>

      </div>

      <Link
  to="/start-planning"
  className="bg-[#8FA7BA] text-white px-6 py-3 rounded-[999px] hover:bg-[#7A93A7] hover:scale-105 transition-all duration-300"
>
  Start Planning
</Link>

    </nav>
  );
}

export default Navbar;