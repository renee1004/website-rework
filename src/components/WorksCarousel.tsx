import { useState, useEffect } from "react";

const works = [
  {
    title: "RIIZE",
    subtitle: "Responsive Display",
    client: "LG U+",
    year: "2024",
    image: "https://www.posi.co.kr/storage/83x5ej1vRxFXlfUKB3I7hVkbSiZeL87zHBFYDG6b.png",
  },
  {
    title: "Membership KIT",
    subtitle: "Package Design",
    client: "HYBE",
    year: "2023",
    image: "https://www.posi.co.kr/storage/2EIiR3HkVJP4ykwIh50QzsQXCLZhGFDcTMzbnPIR.png",
  },
  {
    title: "Galaxy Studio",
    subtitle: "Experience Kit",
    client: "Cheil",
    year: "2022",
    image: "https://www.posi.co.kr/storage/ZTKTvIAPfwPq0zTNaHikZS034rzqTPPrIuwSE1RC.png",
  },
  {
    title: "ENHYPEN KIT",
    subtitle: "Membership Kit",
    client: "HYBE",
    year: "2023",
    image: "https://www.posi.co.kr/storage/rpkJRPJ5ijkiJXHzbQrGrhIw9pFvfTVn7Q2OFyoM.png",
  },
];

const WorksCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % works.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="relative min-h-screen bg-background">
      {/* Current slide */}
      <div className="relative h-screen overflow-hidden">
        {works.map((work, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/50" />

            {/* Slide info overlay */}
            <div className="absolute bottom-16 left-8 md:left-16">
              <p className="text-xs tracking-[0.2em] text-foreground/50 mb-2">
                {work.client}
              </p>
              <h3 className="text-heading text-foreground">
                {work.title}
              </h3>
              <p className="mt-2 text-sm font-light text-foreground/60">
                [{work.subtitle}]
              </p>
            </div>

            <div className="absolute bottom-16 right-8 md:right-16">
              <p className="text-xs tracking-[0.2em] text-foreground/40">
                ⓒ{work.year}
              </p>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1 transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-foreground"
                  : "w-4 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksCarousel;
