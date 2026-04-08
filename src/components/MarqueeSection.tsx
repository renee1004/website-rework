const MarqueeSection = () => {
  const text = "DESIGN SOLUTION ✦ VMD ✦ POSM ✦ POP & DISPLAY ✦ FIXTURE ✦ ";
  
  return (
    <section className="overflow-hidden border-y border-border py-8">
      <div className="animate-marquee flex whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-display text-foreground/10 mx-4"
          >
            {text}{text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
