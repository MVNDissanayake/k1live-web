import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // adjust path relative to your HeroSection file


export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    navigate("/"); // make sure we are on home page
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section 
    id="hero"
    className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Bottom Tagline + Buttons */}
      <div className="absolute bottom-55 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4">
        <p className="text-white text-lg md:text-xl mb-4 opacity-80">
          Bringing live music experiences to life
        </p>

        <div className="flex gap-4 justify-center">

          <button
            onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
          >
            Watch Live
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition"
          >
            Contact Us
          </button>

        </div>
      </div>



    </section>
  );
};
