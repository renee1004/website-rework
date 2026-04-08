const projects = [
  {
    title: "RIIZE",
    client: "LG U+",
    category: "매장 연출",
    image: "https://www.posi.co.kr/storage/83x5ej1vRxFXlfUKB3I7hVkbSiZeL87zHBFYDG6b.png",
  },
  {
    title: "Membership KIT",
    client: "HYBE",
    category: "BTS 멤버십 키트",
    image: "https://www.posi.co.kr/storage/2EIiR3HkVJP4ykwIh50QzsQXCLZhGFDcTMzbnPIR.png",
  },
  {
    title: "Galaxy Studio",
    client: "Cheil",
    category: "Z Flip4 체험킷",
    image: "https://www.posi.co.kr/storage/ZTKTvIAPfwPq0zTNaHikZS034rzqTPPrIuwSE1RC.png",
  },
  {
    title: "ENHYPEN KIT",
    client: "HYBE",
    category: "멤버십 키트",
    image: "https://www.posi.co.kr/storage/rpkJRPJ5ijkiJXHzbQrGrhIw9pFvfTVn7Q2OFyoM.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="px-8 py-32 md:px-16 lg:px-24">
      <div className="mb-20 flex items-end justify-between">
        <div>
          <p className="text-subheading text-accent mb-2">SELECTED</p>
          <h2 className="text-heading">WORK</h2>
        </div>
        <p className="hidden text-sm text-muted-foreground md:block">
          WHAT WE DO
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/20" />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-light">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.client}
                </p>
              </div>
              <span className="text-xs tracking-widest text-muted-foreground">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
