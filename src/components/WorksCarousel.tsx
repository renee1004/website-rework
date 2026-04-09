import { useEffect, useRef } from "react";

const works = [
  {
    title: "RIIZE",
    subtitle: "Responsive Display",
    client: "LG U+",
    year: "2024",
    image: "https://www.posi.co.kr/storage/83x5ej1vRxFXlfUKB3I7hVkbSiZeL87zHBFYDG6b.png",
  },
  {
    title: "Membership KIT",
    subtitle: "Package Design",
    client: "HYBE",
    year: "2023",
    image: "https://www.posi.co.kr/storage/2EIiR3HkVJP4ykwIh50QzsQXCLZhGFDcTMzbnPIR.png",
  },
  {
    title: "Galaxy Studio",
    subtitle: "Experience Kit",
    client: "Cheil",
    year: "2022",
    image: "https://www.posi.co.kr/storage/ZTKTvIAPfwPq0zTNaHikZS034rzqTPPrIuwSE1RC.png",
  },
  {
    title: "ENHYPEN KIT",
    subtitle: "Membership Kit",
    client: "HYBE",
    year: "2023",
    image: "https://www.posi.co.kr/storage/rpkJRPJ5ijkiJXHzbQrGrhIw9pFvfTVn7Q2OFyoM.png",
  },
];

const WorksCarousel = () => {
  return (
    <section id="work">

      <style>{`
        .stack-container {
          position: relative;
        }

        .stack-item {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        /* 각 카드마다 쌓이는 느낌을 위한 top offset */
        .stack-item:nth-child(1) { top: 0px;  z-index: 1; }
        .stack-item:nth-child(2) { top: 0px;  z-index: 2; }
        .stack-item:nth-child(3) { top: 0px;  z-index: 3; }
        .stack-item:nth-child(4) { top: 0px;  z-index: 4; }

        .stack-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.0);
          transition: transform 0.6s ease;
        }

        /* 스크롤 연동 애니메이션 */
        @keyframes scaleDown {
          from { transform: scale(1.0); }
          to   { transform: scale(0.95); }
        }

        .stack-item.is-stacked .stack-img {
          animation: scaleDown 0.5s ease forwards;
        }

        /* 텍스트 슬라이드업 */
        @keyframes textUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0px);  opacity: 1; }
        }

        .stack-text {
          animation: textUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }

        /* 카드 진입 — 아래에서 위로 */
        @keyframes cardEnter {
          from { transform: translateY(60px); opacity: 0.6; }
          to   { transform: translateY(0px);  opacity: 1; }
        }

        .stack-item {
          animation: cardEnter 0.8s cubic-bezier(0.16,1,0.3,1) both;
          animation-timeline: view();
          animation-range: entry 0% entry 40%;
        }
      `}</style>

      <div className="stack-container">
        {works.map((work, index) => (
          <div key={index} className="stack-item">

            {/* 배경 이미지 */}
            <img
              src={work.image}
              alt={work.title}
              className="stack-img absolute inset-0 h-full w-full object-cover"
            />

            {/* 오버레이 */}
            <div className="absolute inset-0 bg-background/50" />

            {/* 카드 번호 */}
            <div className="absolute top-8 right-8 md:right-16">
              <p className="text-xs tracking-[0.3em] text-foreground/30">
                {String(index + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
              </p>
            </div>

            {/* 텍스트 정보 */}
            <div className="stack-text absolute bottom-16 left-8 md:left-16">
              <p className="text-xs tracking-[0.2em] text-foreground/50 mb-2">
                {work.client}
              </p>
              <h3 className="text-heading text-foreground">
                {work.title}
              </h3>
              <p className="mt-2 text-sm font-light text-foreground/60">
                [{work.subtitle}]
              </p>
            </div>

            <div className="stack-text absolute bottom-16 right-8 md:right-16">
              <p className="text-xs tracking-[0.2em] text-foreground/40">
                ⓒ{work.year}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default WorksCarousel;