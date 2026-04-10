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
      x: number; y: number; r: number; phase: number; speed: number; opacity: number;
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
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.8 + 0.3,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const spawnShootingStar = () => {
      // Start from top-right, end at left-center
      const startX = canvas.width * (0.85 + Math.random() * 0.1);
      const startY = canvas.height * (0.02 + Math.random() * 0.08);
      const endX = canvas.width * (0.0 + Math.random() * 0.05);
      const endY = canvas.height * (0.45 + Math.random() * 0.1);
      const angle = Math.atan2(endY - startY, endX - startX);

      shootingStars.push({
        x: startX,
        y: startY,
        len: 180,
        speed: 14,
        angle,
        opacity: 1,
        life: 0,
        maxLife: 55,
      });
    };

    let lastShootingTime = -8000;
    let nextInterval = 5000;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      for (const s of stars) {
        const twinkle = (Math.sin(time * 0.001 * s.speed + s.phase) + 1) / 2;
        const alpha = s.opacity * (0.3 + twinkle * 0.7);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      // Shooting star - one at a time
      if (shootingStars.length === 0 && time - lastShootingTime > nextInterval) {
        spawnShootingStar();
        lastShootingTime = time;
        nextInterval = 6000 + Math.random() * 6000;
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

        // Glow trail
        const grad2 = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad2.addColorStop(0, `rgba(200, 220, 255, ${ss.opacity * 0.4})`);
        grad2.addColorStop(1, "rgba(200, 220, 255, 0)");
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad2;
        ctx.lineWidth = 5;
        ctx.stroke();

        // Core trail
        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
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
