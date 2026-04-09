import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="POSI Design Solution"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-8 md:px-16">
        <div className="text-sm font-medium tracking-[0.3em] text-foreground">
          POSI DESIGN
        </div>
        <div className="hidden gap-10 md:flex">
          {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-light tracking-[0.2em] text-foreground/60 transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero text - bottom aligned like SORO */}
      <div className="relative z-10 flex h-[calc(100%-100px)] flex-col justify-end px-8 pb-16 md:px-16">
        {/* Right side tagline */}
        <div className="absolute bottom-40 right-8 text-right md:right-16">
          <p className="animate-fade-in animation-delay-600 text-xs font-light tracking-[0.2em] text-foreground/70">
            WE DESIGN
          </p>
          <p className="animate-fade-in animation-delay-800 text-xs font-light tracking-[0.2em] text-foreground/70">
            EVERYTHING
          </p>
          <p className="animate-fade-in animation-delay-800 text-xs font-light tracking-[0.2em] text-accent">
            SOLUTIONS
          </p>
        </div>

        {/* Main display text */}
        <h1 className="animate-fade-up text-display text-foreground">
          Design Solution Group
        </h1>
        <div className="animate-fade-up animation-delay-200 flex items-baseline gap-4">
          <span className="text-display italic font-extralight text-foreground/80">for</span>
          <span className="text-display text-foreground">POSI</span>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in animation-delay-800 mt-12 flex justify-center">
          <p className="text-xs tracking-[0.3em] text-foreground/40">Down</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
