"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, MapPin, Mail, Phone, Cpu } from "lucide-react";

export default function About() {

  return (
    <section id="about" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Portrait Avatar with Neon Glass Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Outer Cyan Glowing Rings */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-75 blur-[12px] group-hover:blur-[20px] transition-all duration-500" />
              
              {/* Glassmorphism frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2.5 bg-slate-950/90 border border-cyan-500/20 backdrop-blur-md overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.03] shadow-[0_0_40px_rgba(32,211,234,0.18)]">
                  <Image
                    src="/assets/profile/profile.png"
                    alt="Srujan Lakku"
                    fill
                    sizes="(max-width: 768px) 16rem, 20rem"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Cybernetic Summary */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                SYSTEM_ARCHITECT_SPECS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white">
                About Srujan Lakku
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-400 to-[#A855F7]" />
            </div>

            <div className="space-y-4 text-slate-400 text-sm md:text-base font-sans leading-relaxed">
              <p>
                I am a highly focused **GenAI & Agentic AI Developer** based in Hyderabad, India, dedicated to engineering premium, high-integrity cognitive backends. My technical specialization revolves around constructing state-driven autonomous systems using **LangGraph**, designing resilient API frameworks with **FastAPI**, and architecting high-fidelity vector search indexes.
              </p>
              <p>
                I approach AI engineering from an infrastructure-first mindset: optimizing token flows, designing modular and memory-persistent dialogues, and guaranteeing sub-200ms semantic search. From batch pipelines to concurrent websocket streaming, my goal is to deliver production-ready systems that scale seamlessly.
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-3 bg-slate-900/40 p-3 border border-slate-900 rounded-md">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-slate-500 text-[10px]">CURRENT_LOCATION</div>
                  <div className="text-slate-300 font-bold">Hyderabad, India</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-slate-900/40 p-3 border border-slate-900 rounded-md">
                <Mail className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-slate-500 text-[10px]">SECURE_EMAIL</div>
                  <a href="mailto:lakkusrujan@gmail.com" className="text-slate-300 hover:text-cyan-400 font-bold transition-colors">
                    lakkusrujan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/40 p-3 border border-slate-900 rounded-md">
                <Phone className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-slate-500 text-[10px]">COMM_COMMUNICATION</div>
                  <a href="tel:+918977428152" className="text-slate-300 hover:text-cyan-400 font-bold transition-colors">
                    +91 8977428152
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/40 p-3 border border-slate-900 rounded-md">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-slate-500 text-[10px]">SYSTEM_ROLE</div>
                  <div className="text-slate-300 font-bold">GenAI & Agentic AI Specialist</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
