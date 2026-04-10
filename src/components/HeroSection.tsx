import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <style>{`

        /* 이미지 자연스러운 무빙 - linear로 끊김 없음 */
        @keyframes auroraFloat {
          0%   { transform: scale(1.10) translate(0px, 0px); }
          12%  { transform: scale(1.12) translate(6px, -10px); }
          25%  { transform: scale(1.14) translate(10px, -22px); }
          37%  { transform: scale(1.12) translate(4px, -16px); }
          50%  { transform: scale(1.10) translate(-6px, -8px); }
          62%  { transform: scale(1.13) translate(-10px, -18px); }
          75%  { transform: scale(1.11) translate(-4px, -24px); }
          87%  { transform: scale(1.12) translate(2px, -12px); }
          100% { transform: scale(1.10) translate(0px, 0px); }
        }

        /* 색조 변환 - 끊김없이 360도 순환 */
        @keyframes auroraHue {
          0%   { filter: brightness(1.15) saturate(2.2) hue-rotate(0deg); }
          100% { filter: brightness(1.15) saturate(2.2) hue-rotate(360deg); }
        }

        .aurora-animate {
          animation:
            auroraFloat 20s linear infinite,
            auroraHue 18s linear infinite;
          transform-origin: center center;
          will-change: transform, filter;
        }

        /* 핑크 레이어 - 부드럽게 페이드인아웃 */
        @keyframes pinkFlow {
          0%   { opacity: 0.0; }
          10%  { opacity: 0.0; }
          30%  { opacity: 0.7; }
          50%  { opacity: 0.9; }
          70%  { opacity: 0.5; }
          90%  { opacity: 0.0; }
          100% { opacity: 0.0; }
        }

        /* 초록 레이어 - 항상 켜져있다가 변동 */
        @keyframes greenFlow {
          0%   { opacity: 0.8; }
          25%  { opacity: 1.0; }
          50%  { opacity: 0.5; }
          75%  { opacity: 0.9; }
          100% { opacity: 0.8; }
        }

        /* 청록 레이어 */
        @keyframes cyanFlow {
          0%   { opacity: 0.6; }
          33%  { opacity: 0.2; }
          66%  { opacity: 0.9; }
          100% { opacity: 0.6; }
        }

        /* 보라 레이어 */
        @keyframes purpleFlow {
          0%   { opacity: 0.0; }
          20%  { opacity: 0.0; }
          45%  { opacity: 0.6; }
          65%  { opacity: 0.8; }
          85%  { opacity: 0.2; }
          100% { opacity: 0.0; }
        }

        .aurora-pink {
          background: radial-gradient(ellipse 65% 85% at 72% 22%,
            rgba(255, 20, 170, 0.55) 0%,
            rgba(220, 60, 200, 0.30) 45%,
            transparent 70%
          );
          animation: pinkFlow 14s ease-in-out infinite;
          will-change: opacity;
        }

        .aurora-green {
          background: radial-gradient(ellipse 75% 90% at 22% 20%,
            rgba(0, 255, 120, 0.55) 0%,
            rgba(0, 210, 160, 0.30) 45%,
            transparent 70%
          );
          animation: greenFlow 10s ease-in-out infinite;
          will-change: opacity;
        }

        .aurora-cyan {
          background: radial-gradient(ellipse 65% 75% at 50% 12%,
            rgba(0, 210, 255, 0.45) 0%,
            rgba(60, 190, 255, 0.25) 45%,
            transparent 65%
          );
          animation: cyanFlow 12s ease-in-out 2s infinite;
          will-change: opacity;
        }

        .aurora-purple {
          background: radial-gradient(ellipse 60% 80% at 62% 28%,
            rgba(180, 0, 255, 0.45) 0%,
            rgba(140, 60, 255, 0.25) 45%,
            transparent 68%
          );
          animation: purpleFlow 16s ease-in-out 4s infinite;
          will-change: opacity;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="POSI Design Solution"
          className="aurora-animate h-full w-full object-cover"
        />
        <div className="aurora-green  absolute inset-0" />
        <div className="aurora-pink   absolute inset-0" />
        <div className="aurora-cyan   absolute inset-0" />
        <div className="aurora-purple absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      {/* Hero text */}
      <div className="relative z-10 flex h-[calc(100%-100px)] flex-col justify-end px-8 pb-16 md:px-16">
        <div className="absolute bottom-40 right-8 text-right md:right-16">
          <p className="animate-fade-in animation-delay-600 text-xs font-light tracking-[0.2em] text-foreground/70">
            WE CRAFT
          </p>
          <p className="animate-fade-in animation-delay-800 text-xs font-light tracking-[0.2em] text-foreground/70">
            GROWTH
          </p>
          <p className="animate-fade-in animation-delay-800 text-xs font-light tracking-[0.2em] text-orange-600">
            PATHWAYS
          </p>
        </div>

        <div className="absolute bottom-36 left-8 md:left-16">
          <h1 className="animate-fade-up text-display text-foreground">
            WE ARCHITECT<br />
            THE RETAIL<br />
            EXPERIENCE.
          </h1>
        </div>

        <div className="animate-fade-in animation-delay-800 absolute bottom-16 left-1/2 -translate-x-1/2">
          <p className="text-xs tracking-[0.3em] text-foreground/40">Down</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;