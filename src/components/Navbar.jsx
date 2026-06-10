import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 md:px-16 py-6">

      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-[30px] md:text-[42px] tracking-wide text-[#D4A08D] font-medium">
            SPACEA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[#6B7B88] text-[15px]">

          <Link
            to="/"
            className="hover:text-[#4F6473] transition-all duration-300"
          >
            Home
          </Link>

          <NavLink
  to="/explore"
  className={({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-[#4F6473] border-b-2 border-[#4F6473] pb-1"
        : "text-[#6B7B88]"
    }`
  }
>
  Explore
</NavLink>

          <NavLink
  to="/transformations"
  className={({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-[#4F6473] border-b-2 border-[#4F6473] pb-1"
        : "text-[#6B7B88]"
    }`
  }
>
  Transformations
</NavLink>

          <NavLink
  to="/contact"
  className={({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-[#4F6473] border-b-2 border-[#4F6473] pb-1"
        : "text-[#6B7B88]"
    }`
  }
>
  Contact
</NavLink>


        </div>

        {/* Desktop Button */}
        <Link
          to="/start-planning"
          className="hidden md:block bg-[#8FA7BA] text-white px-6 py-3 rounded-[999px] hover:bg-[#7A93A7] hover:scale-105 transition-all duration-300"
        >
          Start Planning
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5B5551]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 mt-8 text-[#6B7B88] text-[16px]">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4F6473] transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4F6473] transition-all duration-300"
          >
            Explore
          </Link>

          <Link
            to="/transformations"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4F6473] transition-all duration-300"
          >
            Transformations
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#4F6473] transition-all duration-300"
          >
            Contact
          </Link>

          <Link
            to="/start-planning"
            onClick={() => setMenuOpen(false)}
            className="bg-[#8FA7BA] text-white px-6 py-3 rounded-[999px] hover:bg-[#7A93A7] transition-all duration-300"
          >
            Start Planning
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;