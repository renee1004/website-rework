const clients = [
  "LG U+", "HYBE", "SAMSUNG", "CHEIL", "SK TELECOM",
  "LOTTECARD", "KT&G", "LG", "P&G", "Elizabeth Arden",
  "HHG GLOBAL", "SHINSEGAE", "PHILIPS"
];

const MarqueeSection = () => {
  const text = clients.join(" · ") + " · ";

  return (
    <section className="overflow-hidden border-y border-border py-6">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="text-sm tracking-[0.15em] text-foreground/20 mx-2">
          {text}{text}{text}
        </span>
        <span className="text-sm tracking-[0.15em] text-foreground/20 mx-2">
          {text}{text}{text}
        </span>
      </div>
      <div className="animate-marquee-reverse mt-4 flex whitespace-nowrap">
        <span className="text-sm tracking-[0.15em] text-foreground/20 mx-2">
          {text}{text}{text}
        </span>
        <span className="text-sm tracking-[0.15em] text-foreground/20 mx-2">
          {text}{text}{text}
        </span>
      </div>
    </section>
  );
};

export default MarqueeSection;
