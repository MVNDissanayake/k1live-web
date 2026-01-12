import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> K1 Live</span>
        </h2>

        <div className=" md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Live performers & Entertainers
            </h3>

            <p className="text-muted-foreground">
            K1 Live is a Colombo-based professional live band 
            with over 5 years of experience, performing across Sri Lanka
             on major stages, TV shows, and premium events. We deliver 
             powerful live music in Sinhala, English, and Hindi always 
             with style, energy, and quality.
            </p>

            <p className="text-muted-foreground">

            K1 Live is a high-energy professional live band based in Colombo, 
            Sri Lanka, delivering world-class musical performances for weddings, 
            corporate events, hotels, clubs, private parties, and large-scale 
            concerts. With a powerful mix of Sinhala, English, and Hindi music 
            across pop, rock, EDM, Bollywood, and jazz, we create the perfect 
            atmosphere for every celebration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Pacages
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
