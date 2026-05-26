"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight, Cpu } from "lucide-react";
import { experienceData } from "../../data/experience";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#00D4FF] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4 text-[#00D4FF]" />
            PROFESSIONAL_TIMELINE_STREAMS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Engineering Milestones
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-[#A855F7] mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            A chronological mapping of professional career milestones, architectural contributions, and system deployments.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-6 sm:pl-0 sm:before:absolute sm:before:left-1/2 sm:before:top-0 sm:before:bottom-0 sm:before:w-0.5 sm:before:bg-gradient-to-b sm:before:from-cyan-400/50 sm:before:via-purple-500/30 sm:before:to-pink-500/10">
          
          {/* Loop items */}
          {experienceData.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={event.company} 
                className="relative mb-12 sm:mb-16 flex flex-col sm:flex-row items-start sm:justify-between w-full"
              >
                {/* Central pipeline node */}
                <div className="absolute left-[-26px] sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full border border-cyan-400 bg-slate-950 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,212,255,0.4)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Event Card Container */}
                <div className={`w-full sm:w-[45%] ${isLeft ? "sm:text-right" : "sm:text-left sm:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-6 rounded-lg border border-slate-900 shadow-xl group hover:border-cyan-500/20 transition-all select-none"
                  >
                    {/* Header */}
                    <div className="space-y-1 mb-4">
                      <div className={`flex items-center gap-1.5 font-mono text-[10px] text-[#A855F7] uppercase tracking-wider font-bold ${isLeft ? "sm:justify-end" : "justify-start"}`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{event.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                        {event.company}
                      </h3>
                      
                      <div className={`flex items-center gap-1 text-slate-300 font-mono text-xs ${isLeft ? "sm:justify-end" : "justify-start"}`}>
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-bold">{event.role}</span>
                      </div>
                    </div>

                    {/* Description text */}
                    <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Bullet Accomplishments */}
                    <ul className={`space-y-2 mb-4 font-sans text-xs text-slate-400 leading-relaxed ${isLeft ? "sm:text-right" : "text-left"}`}>
                      {event.achievements.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 justify-start sm:justify-normal">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className={`flex flex-wrap gap-1.5 ${isLeft ? "sm:justify-end" : "justify-start"}`}>
                      {event.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-cyan-400/90 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Dummy column for layout */}
                <div className="hidden sm:block w-[45%]" />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
