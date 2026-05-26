"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Database, Layout, GitBranch } from "lucide-react";
import { skillsData } from "../../data/skills";

// Map titles to lucide icons
const iconMap: Record<string, any> = {
  "Orchestration & Agentic AI": Cpu,
  "AI Backend & API Engines": Server,
  "Databases & Semantic Search": Database,
  "Frontend UI & Motion Engineering": Layout,
  "DevOps & Infrastructure": GitBranch
};

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#EC4899] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4 text-[#EC4899]" />
            TECHNICAL_ECOSYSTEM_MATRIX
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            System Tech Stack
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-[#A855F7] mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Categorized directory of frameworks, languages, and orchestration layers used to build high-performance systems.
          </p>
        </div>

        {/* Tech Stack Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, catIdx) => {
            const Icon = iconMap[category.title] || Cpu;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="group relative flex flex-col p-6 rounded-lg glass-panel border border-slate-900 hover:border-cyan-500/20 transition-all select-none"
              >
                {/* Visual border highlights */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-slate-800 group-hover:border-cyan-500/40" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-slate-800 group-hover:border-cyan-500/40" />

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-950 border border-slate-900 text-[#A855F7] rounded group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm md:text-base text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                      ECOSYSTEM_LAYER
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded bg-slate-950/60 border border-slate-900 font-mono text-xs flex items-center justify-between w-full group/skill hover:border-cyan-500/10 transition-colors"
                    >
                      <span className="text-slate-300 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        skill.level === "Expert" 
                          ? "text-cyan-400 bg-cyan-950/20 border border-cyan-500/20" 
                          : "text-purple-400 bg-purple-950/20 border border-purple-500/20"
                      }`}>
                        {skill.level.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
