const projects = [
  {
    date: "2024",
    tags: ["매장 연출", "VMD Design"],
    title: "RIIZE",
    client: "LG U+",
    image: "https://www.posi.co.kr/storage/83x5ej1vRxFXlfUKB3I7hVkbSiZeL87zHBFYDG6b.png",
  },
  {
    date: "2023",
    tags: ["멤버십 키트", "Package Design"],
    title: "Membership KIT",
    client: "HYBE",
    image: "https://www.posi.co.kr/storage/2EIiR3HkVJP4ykwIh50QzsQXCLZhGFDcTMzbnPIR.png",
  },
  {
    date: "2022",
    tags: ["체험킷", "Experience Design"],
    title: "Galaxy Studio",
    client: "Cheil",
    image: "https://www.posi.co.kr/storage/ZTKTvIAPfwPq0zTNaHikZS034rzqTPPrIuwSE1RC.png",
  },
  {
    date: "2023",
    tags: ["멤버십 키트", "Package Design"],
    title: "ENHYPEN KIT",
    client: "HYBE",
    image: "https://www.posi.co.kr/storage/rpkJRPJ5ijkiJXHzbQrGrhIw9pFvfTVn7Q2OFyoM.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-8 py-32 md:px-16 lg:px-24">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="text-subheading text-accent mb-4">Design is never done</p>
          <h2 className="text-heading text-foreground">
            <span className="text-accent">1000+</span> OUR WORK
          </h2>
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group grid cursor-pointer grid-cols-1 gap-8 border-t border-border py-12 transition-colors hover:bg-secondary/30 md:grid-cols-[1fr_2fr_3fr] md:items-center md:gap-16 md:px-8"
          >
            {/* Left: date & tags */}
            <div>
              <p className="text-xs tracking-[0.1em] text-muted-foreground mb-3">
                {project.date}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-[10px] tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: title & client */}
            <div>
              <h3 className="text-2xl font-light text-foreground transition-colors group-hover:text-accent md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                [{project.client}]
              </p>
            </div>

            {/* Right: image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
