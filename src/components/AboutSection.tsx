const AboutSection = () => {
  return (
    <section id="about" className="px-8 py-32 md:px-16 lg:px-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="text-subheading text-accent mb-2">ABOUT</p>
          <h2 className="text-heading">SINCE<br />1972.</h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            1972년 '미공사'를 시작으로, '한국미공'으로 개명되었으며,
            1989년 법인 전환 후 ㈜포시로 이어졌습니다.
          </p>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            지난 50여 년간 국내외 유수의 대기업과 함께
            글로벌 전략 파트너로서 다양한 프로젝트를 성공적으로 이끌어 왔으며,
            VMD, POSM, POP, Display 등을 아우르는
            종합 디자인 그룹으로 자리잡아 왔습니다.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { num: "50+", label: "Years" },
              { num: "1000+", label: "Projects" },
              { num: "100+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-light text-foreground md:text-4xl">
                  {stat.num}
                </p>
                <p className="mt-1 text-xs tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
