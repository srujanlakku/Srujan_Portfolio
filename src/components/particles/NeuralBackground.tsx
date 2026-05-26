"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const LINK_DISTANCE = 130;
    const GRAB_DISTANCE = 180;
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 40 : 90;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Spawn particles
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`;
        ctx.fill();

        // Mouse grab glow
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < GRAB_DISTANCE) {
          const grabOpacity = 0.6 * (1 - mdist / GRAB_DISTANCE);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${grabOpacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw links to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const linkOpacity = 0.25 * (1 - dist / LINK_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${linkOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-50">
      {/* Layer 1: Dark Neural Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#09051d_0%,_#030014_50%,_#020108_100%)]" />

      {/* Layer 2: Canvas Neural Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-50 md:opacity-70"
        style={{ pointerEvents: "none" }}
      />

      {/* Layer 3: Glow Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#00D4FF]/10 blur-[80px] md:blur-[120px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#A855F7]/10 blur-[80px] md:blur-[130px] animate-pulse [animation-delay:1.5s]" />
      <div className="absolute top-[40%] right-[20%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[#EC4899]/5 blur-[60px] md:blur-[100px] animate-pulse [animation-delay:3s]" />

      {/* Layer 4: Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none mix-blend-overlay" />
    </div>
  );
}
