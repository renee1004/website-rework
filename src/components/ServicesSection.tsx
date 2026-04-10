import heroBg from "@/assets/hero-bg.jpg";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-[80vh] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 px-8 py-32 md:px-16 lg:px-24">
        <p className="text-subheading mb-6 text-orange-600">for Everyone</p>

        <div className="max-w-3xl">
          <p className="text-lg font-light leading-loose text-foreground/80 md:text-xl">
            From Insight to Impact.
          </p>
          <p className="mt-2 text-lg font-light leading-loose text-foreground/80 md:text-xl">
            풍부한 경험과 개발로 브랜드 가치를
            현실로 구현하는 디자인 솔루션을 제공합니다.
          </p>
          <p className="mt-8 text-sm font-light italic text-foreground/30">
            With our extensive experience and understanding, we provide
            design solutions that anyone can use. We provide stable services
            with the latest technology through various construction cases
            and efforts for the future.
          </p>
        </div>

        {/* Service grid */}
        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Creative Design",
              desc: "VMD, POSM, POP, Display 등 다양한 채널의 크리에이티브 디자인",
            },
            {
              num: "02",
              title: "Planning",
              desc: "시장 조사와 타깃 분석을 통한 최적의 전략 기획 수립",
            },
            {
              num: "03",
              title: "R&D",
              desc: "선도적 연구와 개발을 통한 혁신적 디자인 솔루션",
            },
          ].map((service) => (
            <div
              key={service.num}
              className="group bg-background/80 p-10 backdrop-blur-sm transition-colors hover:bg-secondary/50"
            >
              <span className="text-xs tracking-[0.2em] text-orange-600">
                {service.num}
              </span>
              <h3 className="mt-4 text-xl font-light tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
