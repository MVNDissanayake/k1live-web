import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", hash: "hero" },
  { name: "About", hash: "about" },
  { name: "Gallary", hash: "skills" },
  { name: "Projects", hash: "projects" },
  { name: "Contact", hash: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (hash) => {
    navigate("/"); // make sure we are on home page
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
    setIsMenuOpen(false);
  };

  return (
<nav
  className={cn(
    "fixed w-full z-40 transition-all duration-300",
    isScrolled
      ? "py-3 bg-black/40 backdrop-blur-xl shadow-lg"
      : "py-5 bg-black/10 backdrop-blur-md"
  )}
>


      <div className="container flex items-center justify-between">
        <button
          onClick={() => goToSection(item.hash)}
          className="text-xl font-bold text-primary flex items-center cursor-pointer"
        >
          
          <span className="relative z-10">
           <span className="text-white font-bold">k1</span>
            <span className="ml-1 text-purple-500 font-bold">Live</span>
            </span>



        </button>

        {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
  {navItems.map((item, key) => (
    <button
      key={key}
      onClick={() => goToSection(item.hash)}
      className="text-white hover:text-white/80 transition-colors duration-300"
    >
      {item.name}
    </button>
  ))}
</div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden cursor-auto",
        isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
         )}
>

          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <button
                key={key}
                onClick={() => goToSection(item.hash)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
