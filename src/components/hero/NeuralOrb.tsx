"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
  distance: number;
  label: string;
}

export default function NeuralOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = containerRef.current?.clientWidth || 500);
    let height = (canvas.height = containerRef.current?.clientHeight || 500);

    const handleResize = () => {
      if (canvas && containerRef.current) {
        width = canvas.width = containerRef.current.clientWidth;
        height = canvas.height = containerRef.current.clientHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const labels = ["LangGraph Router", "Vector Database", "FASTAPI Node", "RAG Pipeline", "Agent LLM", "Memory Schema"];
    const colors = ["#00D4FF", "#A855F7", "#EC4899", "#00D4FF", "#A855F7", "#EC4899"];

    const nodes: Node[] = Array.from({ length: 6 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 6;
      const distance = 100 + Math.random() * 60;
      return {
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance,
        targetX: 0,
        targetY: 0,
        radius: 4 + Math.random() * 4,
        color: colors[i],
        speed: 0.005 + Math.random() * 0.01,
        angle,
        distance,
        label: labels[i]
      };
    });

    const drawCentralCore = (ctx: CanvasRenderingContext2D, cx: number, cy: number, time: number) => {
      const pulse = Math.sin(time * 0.003) * 15;
      const r1 = 55 + pulse;
      
      const grad1 = ctx.createRadialGradient(cx, cy, 5, cx, cy, r1);
      grad1.addColorStop(0, "rgba(0, 212, 255, 0.4)");
      grad1.addColorStop(0.3, "rgba(168, 85, 247, 0.2)");
      grad1.addColorStop(0.7, "rgba(236, 72, 153, 0.05)");
      grad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      ctx.beginPath();
      ctx.arc(cx, cy, r1, 0, Math.PI * 2);
      ctx.fillStyle = grad1;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 20 + Math.sin(time * 0.01) * 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 212, 255, 0.85)";
      ctx.shadowColor = "#00D4FF";
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      ctx.strokeStyle = "rgba(0, 212, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(168, 85, 247, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(0, 212, 255, 0.05)";
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.stroke();

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = "rgba(0, 212, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const progress = (time * 0.002 * node.speed) % 1;
        const px = cx + (node.x - cx) * progress;
        const py = cy + (node.y - cy) * progress;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#00D4FF";
        ctx.shadowColor = "#00D4FF";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((node) => {
        node.angle += node.speed;
        
        let targetX = cx + Math.cos(node.angle) * node.distance;
        let targetY = cy + Math.sin(node.angle) * node.distance;

        if (mouse.active) {
          const dx = mouse.x - targetX;
          const dy = mouse.y - targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            targetX += (dx / dist) * 25;
            targetY += (dy / dist) * 25;
          }
        }

        node.x += (targetX - node.x) * 0.1;
        node.y += (targetY - node.y) * 0.1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}15`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        nodes.forEach((otherNode) => {
          if (node === otherNode) return;
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y - node.radius - 8);
      });

      drawCentralCore(ctx, cx, cy, time);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouse]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center cursor-pointer select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse((prev) => ({ ...prev, active: false }))}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400/40" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400/40" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40" />
      
      <div className="absolute right-6 top-6 flex items-center gap-1.5 font-mono text-[9px] text-[#A855F7] bg-purple-950/20 px-2 py-0.5 border border-[#A855F7]/20 rounded">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-ping" />
        NODE_STREAMING: OK
      </div>
    </div>
  );
}
