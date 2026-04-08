const AboutSection = () => {
  return (
    <section id="about" className="px-8 py-32 md:px-16 lg:px-24">
      <div className="mb-12">
        <p className="text-subheading text-accent mb-6">What we do</p>
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-heading leading-snug text-foreground">
            포시는 끝을 맺기를
            <br />
            처음과 같이 합니다.
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-base font-light leading-loose text-muted-foreground md:text-lg">
            작은 것 하나도 놓치지 않고 확실한 결과물을 만들기 위해
            항상 고민하고 소통합니다.
          </p>
          <p className="mt-6 text-base font-light leading-loose text-muted-foreground md:text-lg">
            "소통"을 기본으로 혁신적인 기술과 창의력을 더해
            고객의 만족을 감동으로 전하겠습니다.
          </p>
          <p className="mt-8 text-sm font-light italic leading-relaxed text-foreground/30">
            POSI wants to end the same way we started.
            We always think and communicate to create clear results
            without missing a single detail.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-24 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        {[
          { num: "50+", label: "YEARS" },
          { num: "1000+", label: "PROJECTS" },
          { num: "100+", label: "CLIENTS" },
          { num: "1972", label: "SINCE" },
        ].map((stat) => (
          <div key={stat.label} className="bg-background p-8 text-center md:p-12">
            <p className="text-4xl font-extralight text-foreground md:text-5xl">
              {stat.num}
            </p>
            <p className="mt-3 text-xs tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
