"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Eye, Network } from "lucide-react";
import TypingText from "./TypingText";
import NeuralOrb from "./NeuralOrb";
import ResumeButton from "../resume/ResumeButton";

const FLOATING_BADGES = [
  "LangGraph",
  "LangChain",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "ChromaDB",
  "RAG",
  "Multi-Agent AI"
];

const STATUS_ITEMS = [
  { label: "LangGraph Engines", status: "Active", color: "bg-emerald-400" },
  { label: "FastAPI Async Core", status: "Running", color: "bg-emerald-400" },
  { label: "Vector DB Embeddings", status: "Synced", color: "bg-cyan-400" },
  { label: "Multi-Agent Nodes", status: "Healthy", color: "bg-emerald-400" },
  { label: "RAG Pipeline Engine", status: "Online", color: "bg-cyan-400" }
];

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 font-mono text-[10px] md:text-xs text-cyan-400 tracking-wider uppercase shadow-[0_0_10px_rgba(0,212,255,0.05)]"
            >
              <Network className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:10s]" />
              <span>Agentic Orchestration Framework Engaged</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-tight"
              >
                Srujan Lakku
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-2xl font-mono min-h-[38px] flex items-center text-slate-300"
              >
                <TypingText />
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans"
            >
              Engineering scalable **Agentic AI systems** using **LangGraph**, **FastAPI**, vector databases, custom RAG retrieval, and production-grade LLM pipeline orchestration. Focused on building high-reliability, asynchronous cognitive backends.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a 
                href="#projects" 
                onClick={handleScrollToProjects}
                className="relative group overflow-hidden px-6 py-3 font-mono text-sm tracking-widest text-black bg-cyan-400 font-bold rounded-sm transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
              >
                <Eye className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
                <span>VIEW PROJECTS</span>
              </a>

              <ResumeButton variant="hero" />

              <div className="flex gap-2.5 items-center pl-2">
                <a
                  href="https://github.com/srujanlakku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 rounded-md transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/srujan-lakku/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950 border border-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 rounded-md transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-2 pt-4"
            >
              <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                SYSTEM STACK CORE_
              </div>
              <div className="flex flex-wrap gap-1.5 max-w-xl">
                {FLOATING_BADGES.map((badge) => (
                  <motion.span
                    key={badge}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900/60 text-cyan-400/90 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    #{badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel-neon p-2.5 rounded-lg overflow-hidden relative shadow-[0_8px_32px_rgba(0,212,255,0.02)]">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
              <NeuralOrb />
            </div>

            <div className="glass-panel p-4 rounded-lg border border-slate-800/80 space-y-3 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] md:text-xs text-slate-400 tracking-wider">SYSTEM ORCHESTRATION INTEGRITY</span>
                </div>
                <span className="text-[9px] text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                  ONLINE
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {STATUS_ITEMS.map((item) => (
                  <div 
                    key={item.label}
                    className="flex items-center justify-between bg-slate-950/50 p-2 border border-slate-900 rounded"
                  >
                    <span className="text-slate-400 text-[10px]">{item.label}</span>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      <span className="text-slate-300 text-[10px] font-bold uppercase">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
