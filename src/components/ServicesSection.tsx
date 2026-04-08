import { Paintbrush, Lightbulb, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Creative Design",
    description:
      "색다른 관점, 새로운 생각으로 브랜드만의 특별함을 찾아 가치의 차이를 만들어 내는 디자인으로 직관적이고 이해도가 높은 크리에이티브를 제공합니다.",
  },
  {
    icon: Lightbulb,
    title: "Planning",
    description:
      "국내외 시장 조사는 물론, 전시회 등을 적극적으로 참관하여 시장의 흐름을 정확히 읽어내고, 타깃 분석과 최적의 계획을 수립합니다.",
  },
  {
    icon: FlaskConical,
    title: "R&D",
    description:
      "연구소의 분야별 스터디 그룹과 국내외 여러 학술회의 등에서 얻은 지식을 바탕으로, 다양한 니즈와 변화에 한발 앞선 디자인, 그리고 선도적 연구와 개발을 통해 완벽한 크리에이티브를 제공합니다.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-t border-border px-8 py-32 md:px-16 lg:px-24">
      <div className="mb-20">
        <p className="text-subheading text-accent mb-2">OUR SERVICE</p>
        <h2 className="text-heading">
          VMD / POSM / POP
          <br />
          & DISPLAY
        </h2>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
          현장에서 경험으로 터득한 많은 노하우 데이터를 기반하여,
          효율적 프로세스와 방법론으로 디자인 솔루션을 제공합니다.
        </p>
      </div>

      <div className="grid gap-px bg-border md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-background p-10 transition-colors duration-500 hover:bg-secondary"
          >
            <service.icon className="mb-8 h-8 w-8 text-accent" strokeWidth={1} />
            <h3 className="text-xl font-light tracking-wide">{service.title}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
