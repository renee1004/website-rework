import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    interface Star {
      x: number; y: number; r: number; phase: number; speed: number; baseOpacity: number;
    }
    interface ShootingStar {
      x: number; y: number; len: number; speed: number; angle: number; opacity: number; life: number; maxLife: number;
    }

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const init = () => {
      resize();
      stars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        const isBright = Math.random() < 0.08;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: isBright ? Math.random() * 2.5 + 1.5 : Math.random() * 1.2 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: isBright ? Math.random() * 1.5 + 1.0 : Math.random() * 0.8 + 0.3,
          baseOpacity: isBright ? Math.random() * 0.4 + 0.6 : Math.random() * 0.5 + 0.2,
        });
      }
    };

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.3,
        len: Math.random() * 180 + 100,
        speed: Math.random() * 16 + 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 50 + 40,
      });
    };

    let lastShootingTime = -5000; // spawn one early
    let nextInterval = 2000;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      for (const s of stars) {
        const twinkle = (Math.sin(time * 0.001 * s.speed + s.phase) + 1) / 2;
        const alpha = s.baseOpacity * (0.15 + twinkle * 0.85);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Glow for bright stars
        if (s.r > 1.5) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
          g.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.3})`);
          g.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = g;
          ctx.fill();
        }
      }

      // Shooting stars
      if (time - lastShootingTime > nextInterval) {
        spawnShootingStar();
        lastShootingTime = time;
        nextInterval = 2000 + Math.random() * 3000;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity = 1 - ss.life / ss.maxLife;

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.len;
        const tailY = ss.y - Math.sin(ss.angle) * ss.len;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Wider glow trail
        const grad2 = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad2.addColorStop(0, `rgba(200, 220, 255, ${ss.opacity * 0.4})`);
        grad2.addColorStop(1, "rgba(200, 220, 255, 0)");
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad2;
        ctx.lineWidth = 5;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", init);

    const ro = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight;
    });
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default StarField;
