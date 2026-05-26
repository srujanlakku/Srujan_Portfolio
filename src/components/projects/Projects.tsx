"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Workflow, ArrowRight } from "lucide-react";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Workflow className="w-4 h-4 text-cyan-400" />
            AI_PRODUCTION_SYSTEMS_SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Featured Systems Showcase
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-[#A855F7] mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Deep dive into functional fullstack platforms engineered with advanced agent networks, RAG pipelines, and high-performance async backends.
          </p>
        </div>

        {/* Projects Layout */}
        <div className="space-y-16">
          {projectsData.map((project, projectIdx) => {
            const isEven = projectIdx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/40 p-6 md:p-8 rounded-lg border border-slate-900/60 shadow-xl relative group overflow-hidden"
              >
                {/* Spotlights glow behind project cards */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* PROJECT SPECS - 7 Columns */}
                <div className={`lg:col-span-7 space-y-5 text-left ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#A855F7] font-bold tracking-widest uppercase bg-purple-950/20 border border-purple-500/10 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-sm md:text-base text-slate-400 leading-relaxed">
                    {project.detailedDescription}
                  </p>

                  {/* Technical badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-cyan-400/90 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs tracking-wider text-slate-300 bg-slate-900 border border-slate-800 rounded hover:bg-slate-800 hover:text-white hover:border-cyan-500/30 transition-all shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      <span>REPOSITORY</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs tracking-wider text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 rounded hover:bg-cyan-500/20 hover:text-white transition-all shadow-md"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE ENGINE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* ARCHITECTURE WORKFLOW ORCHESTRATOR - 5 Columns */}
                <div className={`lg:col-span-5 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="glass-panel p-5 rounded-lg border border-slate-800/80 space-y-4 text-left font-mono">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="text-slate-400 font-bold tracking-wider">AGENT_STATE_ROUTING</span>
                      </div>
                      <span className="text-[9px] text-[#A855F7] uppercase tracking-wider font-bold">
                        ACTIVE
                      </span>
                    </div>

                    {/* Step Timeline Pipeline */}
                    <div className="flex flex-col gap-3">
                      {project.workflow.map((step, stepIdx) => (
                        <div key={step.name} className="relative pl-6 pb-1 group/step">
                          {/* Pulsing indicator node */}
                          <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full border border-cyan-400 bg-slate-950 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-cyan-400 group-hover/step:scale-125 transition-transform" />
                          </div>

                          {/* Connector line */}
                          {stepIdx < project.workflow.length - 1 && (
                            <div className="absolute left-[4px] top-[14px] bottom-[-14px] w-0.5 bg-gradient-to-b from-cyan-500/30 to-purple-500/10" />
                          )}

                          <div className="text-xs">
                            <span className="font-bold text-slate-300 group-hover/step:text-cyan-400 transition-colors uppercase">
                              {step.name}:
                            </span>{" "}
                            <span className="text-slate-400 group-hover/step:text-slate-200 transition-colors">
                              {step.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
