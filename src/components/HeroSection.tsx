import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="POSI Design Solution"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-8 py-12 md:px-16 lg:px-24">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <div className="text-subheading tracking-widest">POSI</div>
          <div className="hidden gap-8 md:flex">
            {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light tracking-widest text-foreground/70 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Center text */}
        <div className="flex flex-col items-center text-center">
          <p className="animate-fade-up text-subheading text-muted-foreground">
            Design Solution Group
          </p>
          <h1 className="animate-fade-up animation-delay-200 text-display mt-4">
            POSI
          </h1>
          <p className="animate-fade-up animation-delay-400 mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            창의적 생각을 가진 사람들이 모여
            <br />
            세일즈 프로모션의 다양한 채널을 만들어가는
          </p>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between">
          <p className="text-xs text-muted-foreground">_©1972</p>
          <p className="text-xs text-muted-foreground">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
